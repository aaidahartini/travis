import { useEffect, useState} from "react";

import Header from "./components/common/Header";
import SummaryCard from "./components/common/SummaryCard";
import DailyPatternChart from "./components/common/DailyPatternCharts";
import StatusSummary from "./components/common/StatusSummary";
import LocationCard from "./components/common/LocationCard";

import {locations, hourlyByLocation} from "./data/mockData";
import {getStatus} from "./utils/congestion";

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

  const overallHourlyData = Array.from(
    {length: 24 },
    (_, hour) => {
      const total = locations.reduce((sum, location) => {
        return sum + hourlyByLocation[location.id][hour];
      },0); 

      return{
        hour: String(hour),
        congestion: Math.round(total / locations.length),
      };
    }
  );

  const selectedChartData = 
    selected === "all" 
      ? overallHourlyData 
      : hourlyByLocation[selected].map((value, hour) => ({
      hour: String(hour),
      congestion: value,
    }));

    const selectedLocation = locations.find(
      (location) => location.id === selected 
    );

    const chartTitle = selectedLocation 
    ? `${selectedLocation.name} Traffic Pattern`
    : "Overall Traffic Pattern";

    const congestionValues = locations.map(
      (location) => location.congestion
    );

    const maxCongestion = Math.max(...congestionValues);

    const averageCongestion = Math.round(
      congestionValues.reduce((sum, value) => sum + value, 0) / congestionValues.length
    );

    const criticalAreas = locations.filter(
      (location) => getStatus(location.congestion) === "Heavy"
    ).length;

    const totalVehicles = locations.reduce(
      (sum, location) => sum + location.vehicleCount, 0
    );

    const totalVehicles = locations.reduce(
      (sum, location) => sum + location.vehicleCount, 0
    );

    const peakHour = overallHourlyData.reduce((peak, current) =>
      current.congestion > peak.congestion ? current : peak
    );

    const peakHourLabel = `${String(peakHour.hour).padStart(2, "0")}:00`;

  return (
    <div className={isDark ? "dark" : "" }>
      <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
         {/*Header*/}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
      
      {/*Summary Card*/}
      <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard title="Peak Hour" value={peakHourLabel} />
        <SummaryCard title="Max Congestion" value={`${maxCongestion}%`} />
        <SummaryCard title="Average Congestion" value={`${averageCongestion}%`} />
        <SummaryCard title="Critical Area" value={criticalAreas} />
      </div>

      {/*Daily Pattern and Status Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-3">
        <div className="lg:col-span-2">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <label htmlFor="location-select" className="text-sm font medium text-slate-600 dark:text-slate-300">
              Traffic Pattern: 
            </label>

            <select 
              id="location-select" 
              value={selected} 
              onChange={(event) => 
              setSelected(event.target.value)} 
              className="rounded-lg brder border-slate-300 bg-white px-3 py-2 text-sem text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                <option value="all">
                  Overall (All Locations)
              </option>

              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
              </div>
                <DailyPatternChart/>
              </div>
          
         <StatusSummary locations={locations}/>
      </div>
      
      {/*Location Card*/}
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <LocationCard name="Canselori Junction" congestion={30} vehicleCount={12}/>
        <LocationCard name="UNIMAS Entrance" congestion={85} vehicleCount={100}/>
      </div>

    </div>
      </div>
     
  );
}

export default App;