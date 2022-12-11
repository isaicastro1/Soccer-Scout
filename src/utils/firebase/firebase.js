import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZt4Oye_v_HPoHvmjRgJO7z6W8iqGJFSI",
  authDomain: "soccer-scores-b00ac.firebaseapp.com",
  projectId: "soccer-scores-b00ac",
  storageBucket: "soccer-scores-b00ac.appspot.com",
  messagingSenderId: "1023550689092",
  appId: "1:1023550689092:web:8335751a5cf493982a5111",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const db = getFirestore(app);

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

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = await doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
};
