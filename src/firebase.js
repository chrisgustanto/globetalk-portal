import firebase from 'firebase';

let config = {
    /*apiKey: "AIzaSyAIOU_NcQli8MNBxAN9Oi-DwiDz4WT2FlY",
    authDomain: "globetalk-portfolio.firebaseapp.com",
    databaseURL: "https://globetalk-portfolio.firebaseio.com",
    projectId: "globetalk-portfolio",
    storageBucket: "",
    messagingSenderId: "941991011702"*/
    apiKey: "AIzaSyD9FZqIrm92wSASv_CvxpIrTVB9VtnlATM",
    authDomain: "foootos-1487631404939.firebaseapp.com",
    databaseURL: "https://foootos-1487631404939.firebaseio.com",
    projectId: "foootos-1487631404939",
    storageBucket: "foootos-1487631404939.appspot.com",
    messagingSenderId: "513033457955"
};

firebase.initializeApp(config);
export default firebase;
export const auth = firebase.auth();
export const db = firebase.database();
