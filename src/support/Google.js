import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCT3gLGfzNWpIHzxXhKBgSwEHLqYH-z5xk",
    authDomain: "login-with-73b23.firebaseapp.com",
    databaseURL: "https://login-with-73b23.firebaseio.com",
    projectId: "login-with-73b23",
    storageBucket: "login-with-73b23.appspot.com",
    messagingSenderId: "1021448612780"
  };
firebase.initializeApp(config)
export const ref = firebase.database().ref()
// export const auth = firebase.auth
export const provider = new firebase.auth.GoogleAuthProvider()