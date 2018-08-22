import React from 'react'

import ActivityButton from './ActivityButton'

const openActivities = ['how to pronounce', 'movie', 'words', 'phrases',
  'dialogues', 'common words', 'tongue twisters']
const memberActivities = ['minimal pairs', 'find the words',
  'say the sentences', 'odd one out', 'beginner news stories',
  'intermediate news stories', 'words maze']
const pendingActivities = ['hear the words', 'pronunciation journey',
  'sort the words', 'four in a row', 'rhyming words', 'count the sounds']

const getStatus = (activity) => {
  if (openActivities.includes(activity)) return 'open'
  if (memberActivities.includes(activity)) return 'member'
  if (pendingActivities.includes(activity)) return 'pending'
  return undefined
}

const ActivityButtons = (props) => {
  const { phoneme, activityNames } = props

  return activityNames.map(activity => (
    <ActivityButton
      phoneme={phoneme}
      activity={activity}
      key={activity}
      accessStatus={getStatus(activity)}
      {...props}
    />
  ))
}

export default ActivityButtons
