import React, { createContext, ReactElement, ReactNode, useState, useEffect } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  getAuth,
} from "firebase/auth";

import { firebaseConfig } from './firebaseConfig';
import { auth } from "./firebaseConfig";

type FirebaseProvider = {
  children: ReactNode;
}

const FirebaseContext: React.Context<any> = createContext(undefined);
export { FirebaseContext };

const FirebaseProvider = ({ children }: FirebaseProvider): ReactElement => {
  let firebase;
  const [user, setUser] = useState<User | null>(null);

  if (!getApps.length) {
    initializeApp(firebaseConfig);
    const db = getFirestore();

    firebase = {
      db,
    };
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <FirebaseContext.Provider value={{ ...firebase, user, googleSignIn, logOut}}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => React.useContext(FirebaseContext);

export default FirebaseProvider;
