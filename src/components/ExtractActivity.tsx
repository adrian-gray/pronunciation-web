import React from "react";

import CommonWords from "./../components/CommonWords";
import Dialogues from "./../components/Dialogues";
import FindTheWords from "./../components/FindTheWords";
import OddOneOut from "./../components/OddOneOut";
import HowToPronounce from "./../components/HowToPronounce";
import NewsStories from "./../components/NewsStories";
import MinimalPairs from "./../components/MinimalPairs";
import Movie from "./../components/Movie";
import Pending from "./../components/Pending";
import Phrases from "./../components/Phrases";
import SayTheSentences from "./../components/SayTheSentences";
import TongueTwisters from "./../components/TongueTwisters";
import Words from "./../components/Words";
import WordsMaze from "./../components/WordsMaze";

const ExtractActivity = (params: {
  props: any;
  activityName: string;
  data: any;
  subscriptionLevel: number;
}) => {
  const { props, activityName, data, subscriptionLevel } = params;
  let activityComponent = null;
  const activity = data.activities[activityName];
  const requiredSubscriptionLevel: number =
    (activity && activity["subscription"]) || 0;
  const isUserAuth: boolean = subscriptionLevel >= requiredSubscriptionLevel;

  switch (activityName) {
    case "common words":
      activityComponent = (
        <CommonWords
          ipa={data.ipa}
          words={activity.words}
          isUserAuth={isUserAuth}
        />
      );
      break;

    case "dialogues":
      activityComponent = (
        <Dialogues
          ipa={data.ipa}
          dialogues={activity.dialogues}
          isUserAuth={isUserAuth}
        />
      );
      break;

    case "find the words":
      activityComponent = (
        <FindTheWords
          ipa={data.ipa}
          tag={data.tag}
          words={activity.words}
          correct={activity.correct}
          isHearTheDifference={false}
          isUserAuth={isUserAuth}
        />
      );
      break;

    case "odd one out1":
      activityComponent = (
        <FindTheWords
          ipa={data.ipa}
          tag={data.tag}
          words={activity.words}
          correct={activity.correct}
          isUserAuth={isUserAuth}
          isHearTheDifference={false}
        />
      );
      break;

    case "odd one out":
      activityComponent = (
        <OddOneOut
          correct={activity.correct}
          example={activity.example}
          exampleHilite={activity.exampleHilite}
          ipa={data.ipa}
          tag={data.tag}
          rows={activity.rows}
          isUserAuth={isUserAuth}
        />
      );
      break;

    case "how to pronounce":
      activityComponent = (
        <HowToPronounce
          ipa={data.ipa}
          arr={activity.text}
          image={activity.image}
        />
      );
      break;

    case "minimal pairs":
      activityComponent = (
        <MinimalPairs
          ipa={data.ipa}
          tag={data.tag}
          pairs={activity.pairs}
          isUserAuth={isUserAuth}
        />
      );
      break;

    case "movie":
      activityComponent = (
        <Movie ipa={data.ipa} url={activity.url} isUserAuth={isUserAuth} />
      );
      break;

    case "new stories":
    case "beginner news stories":
    case "intermediate news stories":
      activityComponent = (
        <NewsStories
          level={activity.level}
          title={activity.title}
          headline={activity.headline}
          options={activity.options}
          sentences={activity.sentences}
          answers={activity.answers}
          isUserAuth={isUserAuth}
          {...props}
        />
      );
      break;

    case "phrases":
      activityComponent = <Phrases phrases={activity.phrases} ipa={data.ipa} />;
      break;

    case "say the sentences":
      activityComponent = (
        <SayTheSentences ipa={data.ipa} sentences={activity.sentences} />
      );
      break;

    case "tongue twisters":
      activityComponent = (
        <TongueTwisters
          tag={data.tag}
          tongueTwisters={activity.twisters}
          isUserAuth={isUserAuth}
        />
      );
      break;

    case "words":
      activityComponent = <Words ipa={data.ipa} words={activity.words} />;
      break;

    case "words maze":
      activityComponent = (
        <WordsMaze
          ipa={data.ipa}
          tag={data.tag}
          words={activity.words}
          correct={activity.correct}
          isUserAuth={isUserAuth}
        />
      );
      break;

    case "sort the words":
    case "hear the words":
    case "pronunciation journey":
    case "rhyming words":
    case "count the sounds":
    case "write the minimal pair":
    case "join to make words":
    case "listen to the sounds":
    case "minimal pairs dominos":
      activityComponent = <Pending name={activityName} />;
      break;

    default:
      activityComponent = null;
  }

  return activityComponent;
};

export default ExtractActivity;
