import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8InB-pbIDZYDtxnwGrGZAybUjZnr23u4",
  authDomain: "prepwise-247a4.firebaseapp.com",
  projectId: "prepwise-247a4",
  storageBucket: "prepwise-247a4.firebasestorage.app",
  messagingSenderId: "132929591119",
  appId: "1:132929591119:web:818071536b586aa0b3d73a",
  measurementId: "G-C6WVQWK3P8"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);