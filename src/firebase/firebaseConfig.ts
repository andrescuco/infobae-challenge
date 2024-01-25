import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAkCsNls7aY4YQdDm4Zw2p0lsK_tlMikao",
  authDomain: "infobae-challenge.firebaseapp.com",
  projectId: "infobae-challenge",
  storageBucket: "infobae-challenge.appspot.com",
  messagingSenderId: "832425144479",
  appId: "1:832425144479:web:96d076fe68fdf55eeeb2aa",
  measurementId: "G-5FHGPVYYJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
