import firebase from 'firebase/app'
import { auth } from './firebase'

const setupNewUser = (user) => {
  firebase.database().ref('users/' + user.uid).set({
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

export const signOut = () => auth.signOut()
