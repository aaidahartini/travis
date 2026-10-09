import { useEffect, useState} from "react";
import Header from "./components/common/Header";
import SummaryCard from "./components/common/SummaryCard";
import DailyPatternChart from "./components/common/DailyPatternCharts";
import StatusSummary from "./components/common/StatusSummary";
import LocationCard from "./components/common/LocationCard";

function App() {
  const [isDark, setIsDark] = useState(()=> {
    const savedTheme = localStorage.getItem("travis-theme");

    if (savedTheme !== null){
      return savedTheme === "dark";
    }

    return false; //Light mode by default

  });

  useEffect(() => {
    localStorage.setItem("travis-theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggleTheme() {
    setIsDark((current) => !current);
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
         {/*Header*/}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
      {/*Summary Card*/}
      <div className="grid grid-cols-4 gap-4 p-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard title="Peak Hour" value="5 PM" />
        <SummaryCard title="Max Congestion" value="70 %" />
        <SummaryCard title="Average Congestion" value="45 %" />
        <SummaryCard title="Critical Area" value="2" />
      </div>

      {/*Daily Pattern and Status Summary */}
      <div className="grid grid-cols-3 gap-4 p-2">
        <div className="col-span-2">
          <DailyPatternChart/>
        </div>
         <StatusSummary/>
      </div>
      
      {/*Location Card*/}
      <div className="grid grid-cols-2 gap-4 p-3">
        <LocationCard name="Canselori Junction" congestion={40} vehicleCount={12}/>
        <LocationCard name="UNIMAS Entrance" congestion={50} vehicleCount={15}/>
      </div>

    </div>
      </div>
     

    

  );
}

export default App;