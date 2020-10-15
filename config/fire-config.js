import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDe-43qLZLuycX0fW930KMOCVLCQRnMbqo",
    authDomain: "blogapp-1ba10.firebaseapp.com",
    databaseURL: "https://blogapp-1ba10.firebaseio.com",
    projectId: "blogapp-1ba10",
    storageBucket: "blogapp-1ba10.appspot.com",
    messagingSenderId: "144255390452",
    appId: "1:144255390452:web:b140215b66a668f70e04a1",
    measurementId: "G-4Z1HXCPDH4"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;