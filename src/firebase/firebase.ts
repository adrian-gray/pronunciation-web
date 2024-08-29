import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/database";
// import 'firebase/firestore'
// import 'firebase/messaging'
// import 'firebase/functions'

const prodConfig = {
  apiKey: "AIzaSyAW6J-r9LGwEUkYGR4Zxmd9FXA1ySdKML8",
  authDomain: "pronounceweb.firebaseapp.com",
  databaseURL: "https://pronounceweb.firebaseio.com",
  projectId: "pronounceweb",
  storageBucket: "pronounceweb.appspot.com",
  messagingSenderId: "293770489446"
};

// TODO dev and prod versions
const config = prodConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
