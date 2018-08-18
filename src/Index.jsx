import React from 'react'
import ReactDOM from 'react-dom'

import {
  MuiThemeProvider
} from '@material-ui/core'

import Theme from './Theme'
import App from './App'

import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/firestore'
// import 'firebase/messaging'
// import 'firebase/functions'

const config = {
  apiKey: 'AIzaSyAW6J-r9LGwEUkYGR4Zxmd9FXA1ySdKML8',
  authDomain: 'pronounceweb.firebaseapp.com',
  databaseURL: 'https://pronounceweb.firebaseio.com',
  projectId: 'pronounceweb',
  storageBucket: 'pronounceweb.appspot.com',
  messagingSenderId: '293770489446'
}
firebase.initializeApp(config)

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
)
