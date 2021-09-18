import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMB0Qg_0_7kjV67-7zD1F8lVzSZlXYSMY",
  authDomain: "portafolio-fcce5.firebaseapp.com",
  projectId: "portafolio-fcce5",
  storageBucket: "portafolio-fcce5.appspot.com",
  messagingSenderId: "1010980875033",
  appId: "1:1010980875033:web:d4c57de25f2101f1327388"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
  db,
  firebase
}