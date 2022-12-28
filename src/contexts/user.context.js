import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  userImage: null,
  setUserImage: () => null,
  openFavorites: false,
  setOpenFavorites: () => null,
  userFavorites: null,
  setUserFavorites: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [userFavorites, setUserFavorites] = useState(null);

  const value = {
    currentUser,
    setCurrentUser,
    userImage,
    setUserImage,
    openFavorites,
    setOpenFavorites,
    userFavorites,
    setUserFavorites,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
