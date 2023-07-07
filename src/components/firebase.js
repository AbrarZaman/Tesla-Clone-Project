import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDryybEZH34ckVY3YdDjpTacDp8WlB_qBc",
  authDomain: "tesla-clone-8f0c6.firebaseapp.com",
  projectId: "tesla-clone-8f0c6",
  storageBucket: "tesla-clone-8f0c6.appspot.com",
  messagingSenderId: "706135328941",
  appId: "1:706135328941:web:344f0509a18e0f327f1e24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
