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

const ExtractActivity = params => {
  const { props, activityName, data, subscriptionLevel } = params;

  let activityComponent = null;
  const activity = data.activities[activityName];
  const requiredSubscriptionLevel: number =
    (activity && activity["subscription"]) || 0;
  const userAuth: boolean = subscriptionLevel >= requiredSubscriptionLevel;

  switch (activityName) {
    case "common words":
      activityComponent = (
        <CommonWords
          ipa={data.ipa}
          words={activity.words}
          userAuth={userAuth}
        />
      );
      break;

    case "dialogues":
      activityComponent = (
        <Dialogues
          ipa={data.ipa}
          dialogues={activity.dialogues}
          userAuth={userAuth}
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
          userAuth={userAuth}
        />
      );
      break;

    case "odd one out1":
      activityComponent = (
        <FindTheWords
          ipa={data.ipa}
          tag={data.tag}
          OddOneOut
          words={activity.words}
          correct={activity.correct}
          userAuth={userAuth}
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
          userAuth={userAuth}
        />
      );
      break;

    case "how to pronounce":
      activityComponent = (
        <HowToPronounce
          ipa={data.ipa}
          arr={activity.text}
          image={activity.image}
          userAuth={userAuth}
        />
      );
      break;

    case "minimal pairs":
      activityComponent = (
        <MinimalPairs
          ipa={data.ipa}
          tag={data.tag}
          pairs={activity.pairs}
          userAuth={userAuth}
        />
      );
      break;

    case "movie":
      activityComponent = (
        <Movie ipa={data.ipa} url={activity.url} userAuth={userAuth} />
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
          userAuth={userAuth}
          {...props}
        />
      );
      break;

    case "phrases":
      activityComponent = (
        <Phrases
          phrases={activity.phrases}
          ipa={data.ipa}
          userAuth={userAuth}
        />
      );
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
          userAuth={userAuth}
        />
      );
      break;

    case "words":
      activityComponent = (
        <Words ipa={data.ipa} words={activity.words} userAuth={userAuth} />
      );
      break;

    case "words maze":
      activityComponent = (
        <WordsMaze
          ipa={data.ipa}
          tag={data.tag}
          words={activity.words}
          correct={activity.correct}
          userAuth={userAuth}
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

    case undefined:
      break;

    default:
      activityComponent = undefined;
  }

  return activityComponent;
};

export default ExtractActivity;
