import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCISwO0CqkoIfsq5TAKhh3L5B9zBVLsOZg",
  authDomain: "shopbag-clone.firebaseapp.com",
  projectId: "shopbag-clone",
  storageBucket: "shopbag-clone.appspot.com",
  messagingSenderId: "614782020909",
  appId: "1:614782020909:web:1fe3e2bcad8bca9c1b77a4",
  measurementId: "G-E86379R06J"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};
