import React, { createContext, ReactElement, ReactNode } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import firebaseConfig from './firebaseConfig';

type FirebaseProvider = {
  children: ReactNode;
  }

const FirebaseContext: React.Context<any> = createContext(undefined);
export { FirebaseContext };

const FirebaseProvider = ({ children }: FirebaseProvider): ReactElement => {
  let firebase;

  if (!getApps.length) {
    initializeApp(firebaseConfig);
    const db = getFirestore();

    firebase = {
      db,
    };
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
