// apiKey: 'AIzaSyD5cZybQ_cYVWxl9Yg48FOb5CEj7QCC6Mc',
// authDomain: 'cornershop-wheel.firebaseapp.com',
// projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
// storageBucket: 'cornershop-wheel.appspot.com',
// messagingSenderId: '560114000470',
// appId: '1:560114000470:web:63bc2ce47aaae93a62d1f7',

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
