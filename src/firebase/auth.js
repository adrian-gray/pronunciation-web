import firebase from 'firebase/app'
import { encode } from 'firebase-encode'
import { auth } from './firebase'

let _name

const setupNewUser = (user) => {
  firebase.database().ref(`users/${user.uid}`).set({
    'name': _name || user.displayName || 'anonymous',
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

export const signUpWithEmail = (params) => {
  const name = encode(params.name)
  const email = encode(params.email)
  const { password } = params
  _name = name

  auth.createUserWithEmailAndPassword(email, password)
    .then(checkForAssignNewRecord)
    .catch(error => {
      console.log('error', error)
    })
}

export const signInWithEmail = (params) => {
  const email = encode(params.email)
  const { password } = params

  auth.signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error', error)
    })
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
