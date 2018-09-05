import React from 'react'

import CommonWords from './../components/CommonWords'
import Dialogues from './../components/Dialogues'
import FindTheWords from './../components/FindTheWords'
import FourInARow from './../components/FourInARow'
import HowToPronounce from './../components/HowToPronounce'
import NewsStories from './../components/NewsStories'
import MinimalPairs from './../components/MinimalPairs'
import Movie from './../components/Movie'
import Pending from './../components/Pending'
import Phrases from './../components/Phrases'
import SayTheSentences from './../components/SayTheSentences'
import TongueTwisters from './../components/TongueTwisters'
import Words from './../components/Words'
import WordsMaze from './../components/WordsMaze'

const ExtractActivity = (params) => {
  const { activityName, data, subscriptionLevel } = params

  let activityComponent = null
  const activity = data.activities[activityName]
  const requiredSubscriptionLevel = activity && activity['subscription']
  const userAuth = subscriptionLevel >= requiredSubscriptionLevel

  switch (activityName) {
    case 'common words':
      activityComponent = (
        <CommonWords
          ipa={data.ipa}
          words={activity.words}
          userAuth={userAuth}
        />
      )
      break

    case 'dialogues':
      activityComponent = (
        <Dialogues
          ipa={data.ipa}
          dialogues={activity.dialogues}
          userAuth={userAuth}
        />
      )
      break

    case 'find the words':
      activityComponent = (
        <FindTheWords
          ipa={data.ipa}
          tag={data.tag}
          titleStart='Select the words with an '
          titleEnd='sound'
          words={activity.words}
          correct={activity.correct}
          userAuth={userAuth}
        />
      )
      break

    case 'odd one out':
      activityComponent = (
        <FindTheWords
          ipa={data.ipa}
          titleStart="Select the words that DON'T have an "
          titleEnd='sound'
          words={activity.words}
          correct={activity.correct}
          userAuth={userAuth}
        />
      )
      break

    case 'four in a row':
      activityComponent = (
        <FourInARow
          correct={activity.correct}
          example={activity.example}
          exampleHilite={activity.exampleHilite}
          ipa={data.ipa}
          rows={activity.rows}
          tag={data.tag}
          userAuth={userAuth}
        />
      )
      break

    case 'how to pronounce':
      activityComponent = (
        <HowToPronounce
          ipa={data.ipa}
          arr={activity.text}
          image={activity.image}
          userAuth={userAuth}
        />
      )
      break

    case 'minimal pairs':
      activityComponent = (
        <MinimalPairs
          ipa={data.ipa}
          tag={data.tag}
          pairs={activity.pairs}
          userAuth={userAuth}
        />
      )
      break

    case 'movie':
      activityComponent = (
        <Movie
          ipa={data.ipa}
          url={activity.url}
          userAuth={userAuth}
        />
      )
      break

    case 'new stories': case 'beginner news stories': case 'intermediate news stories':
      activityComponent = (
        <NewsStories
          title={activity.title}
          headline={activity.headline}
          options={activity.options}
          sentences={activity.sentences}
          answers={activity.answers}
          userAuth={userAuth}
        />
      )
      break

    case 'phrases':
      activityComponent = (
        <Phrases
          phrases={activity.phrases}
          ipa={data.ipa}
          userAuth={userAuth}
        />
      )
      break

    case 'say the sentences':
      activityComponent = (
        <SayTheSentences
          ipa={data.ipa}
          sentences={activity.sentences}
        />
      )
      break

    case 'tongue twisters':
      activityComponent = (
        <TongueTwisters
          tag={data.tag}
          tongueTwisters={activity.twisters}
          userAuth={userAuth}
        />
      )
      break

    case 'words':
      activityComponent = (
        <Words
          ipa={data.ipa}
          words={activity.words}
          userAuth={userAuth}
        />
      )
      break

    case 'words maze':
      activityComponent = (
        <WordsMaze
          tag={data.tag}
          words={activity.words}
          correct={activity.correct}
          userAuth={userAuth}
        />
      )
      break

    case 'sort the words':
    case 'hear the words':
    case 'pronunciation journey':
    case 'rhyming words':
    case 'count the sounds':
    case 'write the minimal pair':
    case 'join to make words':
    case 'listen to the sounds':
    case 'minimal pairs dominos':
      activityComponent = <Pending name={activityName} />
      break

    case undefined:
      break

    default:
      activityComponent = undefined
  }

  return activityComponent
}

export default ExtractActivity
