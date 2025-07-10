import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD1DgUdpi8MUoI31W4S-UJpAbTQ1u4LWA",
  authDomain: "spotify-44a60.firebaseapp.com",
  projectId: "spotify-44a60",
  storageBucket: "spotify-44a60.firebasestorage.app",
  messagingSenderId: "704291981502",
  appId: "1:704291981502:web:e68f565e96eeec3ada76ef",
  measurementId: "G-6EP1J29NW5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const firebaseDatabase = getFirestore(app);

export const analytics = getAnalytics(app);

export default app;
