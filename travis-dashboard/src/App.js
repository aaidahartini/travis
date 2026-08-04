// Import React
import React, { useEffect } from "react";

// Import our Firebase database connection
import { db } from "./firebase";

// Import Firebase database functions
import { ref, set } from "firebase/database";

function App() {

  useEffect(() => {
    // This runs once when the app loads
    // We write a test value to Firebase database
    console.log("Database URL:", process.env.REACT_APP_FIREBASE_DATABASE_URL);
    set(ref(db, "test/connection"), {
      status: "connected",
      message: "TRAVIS Firebase connection successful!"
    })
    .then(() => {
      // If successful, show this in browser console
      console.log("Firebase connected successfully!");
    })
    .catch((error) => {
      // If failed, show the error
      console.log("Firebase connection failed:", error);
    });
  }, []);

  return (
    <div>
      <h1>TRAVIS - Firebase Connection Test</h1>
      <p>Check your browser console and Firebase database for results.</p>
    </div>
  );
}

export default App;
