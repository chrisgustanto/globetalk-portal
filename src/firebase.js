import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC10FYCUiv-3C062C9iVgredK8q3mtjW8c",
  authDomain: "globe-talk-portal.firebaseapp.com",
  databaseURL: "https://globe-talk-portal.firebaseio.com",
  projectId: "globe-talk-portal",
  storageBucket: "globe-talk-portal.appspot.com",
  messagingSenderId: "749045233222"
};

firebase.initializeApp(config);
export default firebase;
export const auth = firebase.auth();
export const db = firebase.database();
