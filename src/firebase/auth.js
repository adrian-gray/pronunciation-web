import firebase from 'firebase/app'
import { auth } from './firebase'

const setupNewUser = (user) => {
  firebase.database().ref(`users/${user.uid}`).set({
    'subscriptionLevel': 0
  })
}

const checkForAssignNewRecord = (e) => {
  if (e.additionalUserInfo.isNewUser) {
    setupNewUser(e.user)
  }
}

const signIn = (provider) => {
  auth.signInWithPopup(provider)
    .then(checkForAssignNewRecord)
}

export const handleGoogleLogin = () => {
  signIn(new firebase.auth.GoogleAuthProvider())
}

const pullUserData = () => {
  return firebase.database()
    .ref(`/users/${auth.currentUser.uid}`)
    .once('value')
    .then(data => data.val().subscriptionLevel)
}

export const getUserData = () => {
  return pullUserData()
}

export const signOut = () => auth.signOut()
