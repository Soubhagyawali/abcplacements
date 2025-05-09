import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBSJE24PtA-0-CO_u7cjiglzsvEHb4fLVI",
  authDomain: "abchackfinity.firebaseapp.com",
  projectId: "abchackfinity",
  storageBucket: "abchackfinity.firebasestorage.app",
  messagingSenderId: "58944259111",
  appId: "1:58944259111:web:6bf3a3d90520d216db3a02",
  measurementId: "G-K44X5C5PZ7"
};

const provider= new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//const analytics = getAnalytics(app); 
const auth = getAuth(app);
export {database,auth,provider};