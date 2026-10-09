const locations = [
    {name: "Canselori Junction", congestion: 40},
    {name: "UNIMAS Entrance", congestion: 50},
];

function getStatus(value){
    if (value <= 39){
        return "Free Flow";
    }

    if (value <= 74){
        return "Moderate";
    }

    return "Heavy";
}

function StatusSummary(){
    const freeCount = locations.filter(
        (location) => getStatus(location.congestion) === "Free Flow"
    ).length;

    const moderateCount = locations.filter(
        (location) => getStatus(location.congestion) === "Moderate"
    ).length;

    const heavyCount = locations.filter(
        (location) => getStatus(location.congestion) === "Heavy"
    ).length;

    return (
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-sm text-slate-500 dark:text-slate-400">
                Current Status
            </h2>

            {/* Free Flow */ }
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">

                    </span>
                    <span>Free Flow</span>
                </div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {freeCount}
                </span>
            </div>

            {/*Moderate*/}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400"></span>
                    <span>Moderate</span>
                </div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {moderateCount}
                </span>
            </div>

            {/*Heavy*/}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400"></span>
                    <span>Heavy</span>
                </div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {heavyCount}
                </span>
            </div>
        </div>
    );
}

export default StatusSummary;