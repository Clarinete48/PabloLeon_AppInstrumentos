import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChXfO_2eXAiFtW_B-gb83v5RrDnxOfTKE",
  authDomain: "instruments-e69e1.firebaseapp.com",
  projectId: "instruments-e69e1",
  storageBucket: "instruments-e69e1.appspot.com",
  messagingSenderId: "263144192381",
  appId: "1:263144192381:web:edbbc803cd2802f4b27414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)