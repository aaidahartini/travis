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
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">
                Current Status
            </h2>

            {/* Free Flow */ }
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500">

                    </span>
                    <span>Free Flow</span>
                </div>
                <span className="font-bold">
                    {freeCount}
                </span>
            </div>

            {/*Moderate*/}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span>Moderate</span>
                </div>
                <span className="font-bold">
                    {moderateCount}
                </span>
            </div>

            {/*Heavy*/}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span>Heavy</span>
                </div>
                <span className="font-bold">
                    {heavyCount}
                </span>
            </div>
        </div>
    );
}

export default StatusSummary;