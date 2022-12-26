import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
} from "firebase/storage";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZt4Oye_v_HPoHvmjRgJO7z6W8iqGJFSI",
  authDomain: "soccer-scores-b00ac.firebaseapp.com",
  projectId: "soccer-scores-b00ac",
  storageBucket: "soccer-scores-b00ac.appspot.com",
  messagingSenderId: "1023550689092",
  appId: "1:1023550689092:web:8335751a5cf493982a5111",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const db = getFirestore(app);

provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

export const signInUserWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    alert(error);
  }
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const uploadImageToFirebase = async (email, image) => {
  const imageRef = ref(storage, `images/${email}`);
  await uploadBytes(imageRef, image);
  const url = await getDownloadURL(imageRef);
  return url;
};

export const getImageOnSignIn = async (email) => {
  const imageRef = ref(storage, `images/${email}`);
  const result = await getDownloadURL(imageRef);
  return result;
};

export const uploadFavoritesToFirebase = async (email, ...userFavorites) => {
  if (!userFavorites.length) return;
  const teamRef = ref(storage, `favorites/${email}`);
  const data = userFavorites.toString();
  uploadString(teamRef, data).then((snapshot) => {});
};

export const getFavoritesFromFirebase = async (email) => {
  const favoritesRef = ref(storage, `favorites/${email}`);
  const result = await getDownloadURL(favoritesRef);
  return result;
};

export const getUserDataFromFirebase = async (userAuth) => {
  const docRef = doc(db, "users", userAuth.uid);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        phoneNumber,
        ...additionalInfo,
      });
    } catch (error) {
      alert("Error creating user", error);
    }
  }
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const signOutUser = async () => {
  await signOut(auth);
};
