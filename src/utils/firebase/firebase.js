import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZt4Oye_v_HPoHvmjRgJO7z6W8iqGJFSI",
  authDomain: "soccer-scores-b00ac.firebaseapp.com",
  projectId: "soccer-scores-b00ac",
  storageBucket: "soccer-scores-b00ac.appspot.com",
  messagingSenderId: "1023550689092",
  appId: "1:1023550689092:web:8335751a5cf493982a5111",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

export const signInUserWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      alert(error);
    });

export const signInUserWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      alert(error);
    });
