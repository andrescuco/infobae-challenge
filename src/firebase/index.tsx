import React, {
  createContext,
  ReactElement,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  getAuth,
} from "firebase/auth";
import {
  doc,
  collection,
  Firestore,
  getDocs,
  updateDoc,
  increment,
  query,
  where,
  setDoc,
} from "firebase/firestore";

import { firebaseConfig } from "./firebaseConfig";
import { auth } from "./firebaseConfig";

type FirebaseProvider = {
  children: ReactNode;
};

const FirebaseContext: React.Context<any> = createContext(undefined);
export { FirebaseContext };

const FirebaseProvider = ({ children }: FirebaseProvider): ReactElement => {
  let firebase: any;
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

    // If it's a new user, save it to the collection
    signInWithPopup(auth, provider)
      .then(async (result) => {
        await setDoc(doc(firebase.db, "Users", result.user.uid), {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <FirebaseContext.Provider
      value={{ ...firebase, user, googleSignIn, logOut }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => React.useContext(FirebaseContext);

export default FirebaseProvider;
