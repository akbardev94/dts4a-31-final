// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDodGsrU9teCprC4iM0OvMJ8A0N2cU83Yk",
  authDomain: "dts4a-31-final.firebaseapp.com",
  projectId: "dts4a-31-final",
  storageBucket: "dts4a-31-final.appspot.com",
  messagingSenderId: "795275865576",
  appId: "1:795275865576:web:9c294ae31ace620d1e085d",
  measurementId: "G-80353V13S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const keluar = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

const signInEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

const regist = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};
export { auth, keluar, signInEmail, regist };
