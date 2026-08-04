// Import the Firebase functions we need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your Firebase configuration — values come from .env file
// REACT_APP_ prefix is required by React to read .env variables
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID
  // apiKey:"AIzaSyCXOpghFJZV6UFD20Dpy8Fmm0CVJlK0_Ss",
  // authDomain:"travis-fyp.firebaseapp.com",
  // databaseURL:"https://travis-fyp-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId:"travis-fyp",
  // storageBucket:"travis-fyp.firebasestorage.app",
  // messagingSenderId:"170888761615",
  // appId:"1:170888761615:web:5d97f25cb8ee7bf8c86e7a",

};

// Initialize Firebase — this starts the connection
const app = initializeApp(firebaseConfig);

// Get the database instance — we use this to read/write data
export const db = getDatabase(app);

// Get the auth instance — we use this for login/logout
export const auth = getAuth(app);

// Export app as default
export default app;