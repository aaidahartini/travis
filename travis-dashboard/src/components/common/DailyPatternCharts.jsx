import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
} from "recharts";

const hourlyData = [
    {hour: "6 AM", congestion: 20},
    {hour: "7 AM", congestion: 35},
    {hour: "8 AM", congestion: 75},
    {hour: "9 AM", congestion: 50},
    {hour: "10 AM", congestion: 25},
    {hour: "11 AM", congestion: 20},
];

function getColor(value){
    if (value <=39){
        return "#008000";
    }

    if (value <= 74){
        return "#FFFF00";
    }

    return "#FF0000";
}

function DailyPatternChart(){
    return(
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">
                Daily Traffic Pattern
            </h2>

            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={hourlyData}>
                        <XAxis dataKey="hour"/>
                        <YAxis
                            domain={[0, 100]}
                            tickFormatter={(value) => `${value}%`}
                        />

                        <Bar dataKey="congestion">
                            {hourlyData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={getColor(entry.congestion)}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default DailyPatternChart;

