// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAS-8y2Rb8JB72hb1ShUbVT901QAIdFRx8",
    authDomain: "react-pwa-131c4.firebaseapp.com",
    databaseURL: 'https://react-pwa-131c4-default-rtdb.firebaseio.com',
    projectId: "react-pwa-131c4",
    storageBucket: "react-pwa-131c4.appspot.com",
    messagingSenderId: "438201434714",
    appId: "1:438201434714:web:95d950cfc9c1f180780e63",
    measurementId: "G-1SLRLEWG80"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

db.enablePersistence().catch(err => {
    console.log('error is...', err)
    if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        console.log('persistance failed');
    } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        console.log('persistance not available');
    }
});
