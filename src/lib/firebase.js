import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "recatchat-eb247.firebaseapp.com",
  projectId: "recatchat-eb247",
  storageBucket: "recatchat-eb247.appspot.com",
  messagingSenderId: "312261050405",
  appId: "1:312261050405:web:5562a98cb5c50a882bffcc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
