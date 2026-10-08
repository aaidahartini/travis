// // Import React
// import React, { useEffect } from "react";

// // Import our Firebase database connection
// import { db } from "./firebase";

// // Import Firebase database functions
// import { ref, set } from "firebase/database";

// function App() {

//   useEffect(() => {
//     // This runs once when the app loads
//     // We write a test value to Firebase database
//     console.log("Database URL:", process.env.REACT_APP_FIREBASE_DATABASE_URL);
//     set(ref(db, "test/connection"), {
//       status: "connected",
//       message: "TRAVIS Firebase connection successful!"
//     })
//     .then(() => {
//       // If successful, show this in browser console
//       console.log("Firebase connected successfully!");
//     })
//     .catch((error) => {
//       // If failed, show the error
//       console.log("Firebase connection failed:", error);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>TRAVIS - Firebase Connection Test</h1>
//       <p>Check your browser console and Firebase database for results.</p>
//       <h1 className="text-3xl font-bold text-blue-500">TRAVIS - Firebase Connection Test</h1>
//     </div>
//   );
// }

// export default App;

import Header from "./components/common/Header";
import SummaryCard from "./components/common/SummaryCard";
import DailyPatternChart from "./components/common/DailyPatternCharts";
import StatusSummary from "./components/common/StatusSummary";
import LocationCard from "./components/common/LocationCard";

function App() {
  return (
    <div>
      {/*Header*/}
      <Header/>
      {/*Summary Card*/}
      <div className="grid grid-cols-4 gap-4 p-4">
        <SummaryCard title="Peak Hour" value="5 PM" />
        <SummaryCard title="Max Congestion" value="70 %" />
        <SummaryCard title="Average Congestion" value="45 %" />
        <SummaryCard title="Critical Area" value="2" />
      </div>

      {/*Daily Pattern and Status Summary */}
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="col-span-2">
          <DailyPatternChart/>
        </div>
         <StatusSummary/>
      </div>
      
      {/*Location Card*/}
      <div className="grid grid-cols-2 gap-4 p-4">
        <LocationCard name="Canselori Junction" congestion={40} vehicleCount={12}/>
        <LocationCard name="UNIMAS Entrance" congestion={50} vehicleCount={15}/>
      </div>

    </div>

    

  );
}

export default App;