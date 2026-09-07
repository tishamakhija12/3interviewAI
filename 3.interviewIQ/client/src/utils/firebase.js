
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "fir-d020a.firebaseapp.com",
  projectId: "fir-d020a",
  storageBucket: "fir-d020a.firebasestorage.app",
  messagingSenderId: "153770154082",
  appId: "1:153770154082:web:601de3dab539a681ba993b"
 
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}