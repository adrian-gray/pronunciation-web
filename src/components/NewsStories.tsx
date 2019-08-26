import React, { Component } from "react";
import {
  INewsStoriesCustomProps,
  INewsStoriesCustomState
} from "./../../@types/PronounceWeb";

import Container from "react-bootstrap/Container";

import SplitHilite from "./SplitHilite";
import MemberGate from "./MemberGate";
import Picker from "./Picker";

const countSelectors = (arr: string[]) => {
  let count = 0;
  arr.forEach((sentence: string) => {
    const num = (sentence.match(/OPTION/g) || []).length;
    count += num;
  });
  return count;
};

class NewsStories extends Component<
  INewsStoriesCustomProps,
  INewsStoriesCustomState
> {
  constructor(props: INewsStoriesCustomProps) {
    super(props);

    const { ...other } = props;

    this.state = {
      sentences: [],
      selectedOption: [],
      selectedBgColour: [],
      other: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.parseSentences = this.parseSentences.bind(this);
    this.addNewSentences = this.addNewSentences.bind(this);
    this.updateSentences = this.updateSentences.bind(this);
    this.checkForCorrect = this.checkForCorrect.bind(this);
  }

  componentDidMount() {
    this.addNewSentences(this.props.sentences);
  }

  componentWillReceiveProps(nextProps: INewsStoriesCustomProps) {
    if (nextProps.sentences !== this.props.sentences) {
      this.addNewSentences(nextProps.sentences);
    }
  }

  parseSentences(
    sentences: string[],
    selectedOption: number[],
    selectedBgColour: string[]
  ) {
    let id = 0;
    let selectorId = 0;

    const parsedSentences = sentences.map((sentence, index) => {
      const fragments = [];
      let key = 0;
      do {
        const idx = sentence.indexOf("OPTION");
        if (idx === -1) {
          fragments.push(sentence);
          break;
        } else if (idx === 0) {
          fragments.push(
            <Picker
              options={this.props.options}
              selected={selectedOption[selectorId]}
              colour={selectedBgColour[selectorId]}
              handleClick={this.handleClick}
              key={key}
              index={id}
              {...this.state.other}
            />
          );
          id++;
          selectorId++;
          sentence = sentence.substr(6, sentence.length);
        } else {
          const substr = sentence.slice(0, idx);
          fragments.push(<SplitHilite str={substr} key={key} />);
          sentence = sentence.slice(substr.length);
        }
        key++;
      } while (sentence.length);

      return <p key={index}>{fragments}</p>;
    });

    return parsedSentences;
  }

  addNewSentences(newSentences: string[]) {
    const numSelectors: number = countSelectors(newSentences);
    const selectedOption: number[] = Array(numSelectors).fill(0);
    const selectedBgColour: string[] = Array(numSelectors).fill(undefined);
    const sentences = this.parseSentences(
      newSentences,
      selectedOption,
      selectedBgColour
    );

    this.setState({
      selectedOption,
      selectedBgColour,
      sentences
    });
  }

  updateSentences(params) {
    const newSentences = params.sentences;
    const selectedOption = params.selectedOption || this.state.selectedOption;
    const selectedBgColour =
      params.selectedBgColour || this.state.selectedBgColour;

    const sentences = this.parseSentences(
      newSentences,
      selectedOption,
      selectedBgColour
    );

    this.setState({ sentences });
  }

  checkForCorrect(values: number[]) {
    return values.map((value, index: number) => {
      return this.props.options[index] === this.props.answers[index];
    });
  }

  handleClick(index: number) {
    if (!this.props.userAuth) return;
    const newStateSelectedOption = this.state.selectedOption.slice();
    const selectedBgColour: string[] = [];
    newStateSelectedOption[index] =
      (this.state.selectedOption[index] + 1) % this.props.options.length;
    if (newStateSelectedOption.every(val => val > 0)) {
      this.checkForCorrect(newStateSelectedOption).map(
        (value: boolean, index: number) => {
          switch (value) {
            case true:
              selectedBgColour[index] = "#99BB99"; // TODO
              break;
            case false:
              selectedBgColour[index] = "#BB9999"; // TODO
              break;
            default:
              selectedBgColour[index] = undefined;
          }
        }
      );
    }
    this.setState({
      selectedOption: newStateSelectedOption,
      selectedBgColour
    });
    this.updateSentences({
      sentences: this.props.sentences,
      selectedOption: newStateSelectedOption,
      selectedBgColour
    });
  }

  render() {
    const { headline, title } = this.props;

    const content = <Container>{this.state.sentences}</Container>;

    const description = `Extra! Extra! Read all about it! News Stories is a collection of interesting and feel-good stories from around the world.  Each story is written in two levels – beginners and intermediate. All you need to do is identify the highlighted sounds and choose the correct phoneme that represents that sound. News Stories helps you to identify individual sounds in long and more difficult written text. This improves your pronunciation of the words you read and your reading fluency.`;

    return (
      <Container className="headspace">
        <h2>{"News Stories"}</h2>
        <p>{description}</p>
        <h3>{headline}</h3>
        <h5>
          <SplitHilite str={title} />
        </h5>
        <MemberGate
          content={content}
          userAuth={this.props.userAuth}
          {...this.props.other}
        />
      </Container>
    );
  }
}

export default NewsStories;
