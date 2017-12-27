import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAIOU_NcQli8MNBxAN9Oi-DwiDz4WT2FlY",
    authDomain: "globetalk-portfolio.firebaseapp.com",
    databaseURL: "https://globetalk-portfolio.firebaseio.com",
    projectId: "globetalk-portfolio",
    storageBucket: "",
    messagingSenderId: "941991011702"
};

firebase.initializeApp(config);
export default firebase;
export const auth = firebase.auth();
