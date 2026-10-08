function getStatus(value){
    if (value <= 39){
        return "Free Flow";
    }
    if (value <= 74){
        return "Moderate";
    }

    return "Heavy";
}

function getColor(value){
    if (value <=39){
        return "#008000";
    }

    if (value <= 74){
        return "#FFFF00";
    }

    return "#FF0000";
}

function LocationCard({name, congestion, vehicleCount}){
    const status = getStatus(congestion);
    const color = getColor(congestion);

    const radius = 40;
    const circumference = 2 * Math.PI *radius;
    const offset = circumference *(1 - congestion/ 100);

    return(
        <div className="bg-white p-6 rounded-lg shadow">
            {/*Location Name*/}
            <h2 className="text-lg font-semibold text-center mb-4">
                {name}
            </h2>

            {/*Progress Ring*/}
            <div className="relative w-32 h-32 mx-auto">
                <svg width="128" height="128" viewBox="0 0 100 100">
                    {/*Background Ring*/}
                    <circle cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="10"/>
                    {/*Progress Ring*/}
                    <circle cx="50" cy="50" r={radius} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 -50 50)"/>
                </svg>

                {/*Percentage in the middle*/}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                        {congestion}%
                    </span>
                </div>
            </div>
            {/*Vehicle Count */}
            <p className="text-center mt-4 text-gray-600">
                Vehicles:{""}
                <span className="font-semibold text-gray-900">
                    {vehicleCount}
                </span>
            </p>
            {/*Status*/}
            <p className="text-center font-semibold mt-2" style={{color: color}}>
                {status}
            </p>
        </div>
    );
}

export default LocationCard;