import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD71-bHcrXvQI5bMmo05yYnt3FmBIVSCfM",
  authDomain: "taskflow-bc343.firebaseapp.com",
  projectId: "taskflow-bc343",
  storageBucket: "taskflow-bc343.appspot.com",
  messagingSenderId: "1017966806541",
  appId: "1:1017966806541:web:839c1b9d1dc1e07ddab744",
  measurementId: "G-CYRGQN21QL",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
