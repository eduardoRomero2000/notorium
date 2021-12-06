import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuZxztHs_F-29B-lianAerPUTVrQbzmBM",
  authDomain: "notorium-edda9.firebaseapp.com",
  projectId: "notorium-edda9",
  storageBucket: "notorium-edda9.appspot.com",
  messagingSenderId: "152575939800",
  appId: "1:152575939800:web:222857c0593419933273ad",
};

const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();
const auth = app.auth();

export { database, auth };
