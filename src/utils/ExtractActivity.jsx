import React from 'react'

import CommonWords from './../components/CommonWords'
import Dialogues from './../components/Dialogues'
import FindTheWords from './../components/FindTheWords'
import HowToPronounce from './../components/HowToPronounce'
import NewsStories from './../components/NewsStories'
import MinimalPairs from './../components/MinimalPairs'
import Movie from './../components/Movie'
import Phrases from './../components/Phrases'
import SayTheSentences from './../components/SayTheSentences'
import TongueTwisters from './../components/TongueTwisters'
import Words from './../components/Words'
import WordsMaze from './../components/WordsMaze'

const ExtractActivity = (params) => {
  const { activityName, data, subscriptionLevel } = params

  let activityComponent = null
  const activity = data.activities[activityName]
  const requiredSubscriptionLevel = activity && activity['subscription level']
  const userAuth = subscriptionLevel >= requiredSubscriptionLevel

  switch (activityName) {
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

    case 'movie':
      activityComponent = (
        <Movie
          ipa={data.ipa}
          url={activity.url}
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

    case 'phrases':
      activityComponent = (
        <Phrases
          phrases={activity.phrases}
          ipa={data.ipa}
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

    case 'common words':
      activityComponent = (
        <CommonWords
          ipa={data.ipa}
          words={activity.words}
          userAuth={userAuth}
        />
      )
      break

    case 'tongue twisters':
      activityComponent = (
        <TongueTwisters
          ipa={data.ipa}
          tongueTwisters={activity.twisters}
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

    case 'find the words':
      activityComponent = (
        <FindTheWords
          ipa={data.ipa}
          titleStart='Select the words with an '
          titleEnd='sound'
          words={activity.words}
          correct={activity.correct}
          userAuth={userAuth}
        />
      )
      break

    case 'say the sentences':
      activityComponent = (
        <SayTheSentences
          ipa={data.ipa}
          sentences={activity.sentences}
          userAuth={userAuth}
        />
      )
      break

    case 'odd one out':
      activityComponent = (
        <FindTheWords
          ipa={data.ipa}
          titleStart="Select the words that don't have the "
          titleEnd='sound'
          words={activity.words}
          correct={activity.correct}
          userAuth={userAuth}
        />
      )
      break

    case 'news stories':
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

    case undefined:
      break

    default:
      console.log('Pending activity:', activityName)
      activityComponent = undefined
  }

  return activityComponent
}

export default ExtractActivity
