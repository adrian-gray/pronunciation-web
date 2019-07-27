import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

import SplitHilite from "./SplitHilite";
import MemberGate from "./MemberGate";
import Picker from "./Picker";

const styles = theme => ({
  headspace: theme.headspace,
  sentence: {
    padding: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1.2rem"
  },
  red: {
    color: "maroon"
  },
  green: {
    color: "green"
  }
});

const countSelectors = arr => {
  let count = 0;
  arr.forEach(sentence => {
    const num = (sentence.match(/OPTION/g) || []).length;
    count += num;
  });
  return count;
};

class NewsStories extends Component {
  constructor(props) {
    super(props);

    const { classes, ...other } = props;

    this.state = {
      classes,
      other,
      sentences: [],
      selectedOption: [],
      selectedBgColour: []
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.sentences !== this.props.sentences) {
      this.addNewSentences(nextProps.sentences);
    }
  }

  parseSentences(sentences, selectedOption, selectedBgColour) {
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

      return (
        <Typography key={index} className={this.state.classes.sentence}>
          {fragments}
        </Typography>
      );
    });

    return parsedSentences;
  }

  addNewSentences(newSentences) {
    const numSelectors = countSelectors(newSentences);
    const selectedOption = Array(numSelectors).fill(0);
    const selectedBgColour = Array(numSelectors).fill(undefined);
    const sentences = this.parseSentences(newSentences, selectedOption, selectedBgColour);

    this.setState({
      selectedOption,
      selectedBgColour,
      sentences
    });
  }

  updateSentences(params) {
    const newSentences = params.sentences;
    const selectedOption = params.selectedOption || this.state.selectedOption;
    const selectedBgColour = params.selectedBgColour || this.state.selectedBgColour;

    const sentences = this.parseSentences(newSentences, selectedOption, selectedBgColour);

    this.setState({ sentences });
  }

  checkForCorrect(values) {
    return values.map((value, index) => {
      return this.props.options[value] === this.props.answers[index];
    });
  }

  handleClick(index) {
    if (!this.props.userAuth) return;
    const newStateSelectedOption = this.state.selectedOption.slice();
    const selectedBgColour = [];
    newStateSelectedOption[index] =
      (this.state.selectedOption[index] + 1) % this.props.options.length;
    if (newStateSelectedOption.every(val => val > 0)) {
      this.checkForCorrect(newStateSelectedOption).map((value, index) => {
        switch (value) {
          case true:
            selectedBgColour[index] = this.state.classes.green;
            break;
          case false:
            selectedBgColour[index] = this.state.classes.red;
            break;
          default:
            selectedBgColour[index] = undefined;
        }
      });
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
    const { classes } = this.state;

    const content = <Paper>{this.state.sentences}</Paper>;

    const description = `Extra! Extra! Read all about it! News Stories is a collection of interesting and feel-good stories from around the world.  Each story is written in two levels – beginners and intermediate. All you need to do is identify the highlighted sounds and choose the correct phoneme that represents that sound. News Stories helps you to identify individual sounds in long and more difficult written text. This improves your pronunciation of the words you read and your reading fluency.`;

    return (
      <div className={classes.headspace}>
        <Typography variant="display1" gutterBottom>
          {"News Stories"}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        <Typography variant="headline" gutterBottom>
          {headline}
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <SplitHilite str={title} />
        </Typography>
        <MemberGate content={content} userAuth={this.props.userAuth} {...this.props.other} />
      </div>
    );
  }
}

export default withStyles(styles)(NewsStories);
