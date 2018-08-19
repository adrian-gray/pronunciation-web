import firebase from 'firebase/app'
import { auth } from './firebase'

export const handleGoogleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}

export const signOut = () => auth.signOut()
