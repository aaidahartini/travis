import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
} from "recharts";

const hourlyData = [
    {hour: "12 AM", congestion: 20},
    {hour: "1 AM", congestion: 10},
    {hour: "2 AM", congestion: 5},
    {hour: "3 AM", congestion: 5},
    {hour: "4 AM", congestion: 10},
    {hour: "5 AM", congestion: 15},
    {hour: "6 AM", congestion: 20},
    {hour: "7 AM", congestion: 35},
    {hour: "8 AM", congestion: 75},
    {hour: "9 AM", congestion: 50},
    {hour: "10 AM", congestion: 25},
    {hour: "11 AM", congestion: 20},
    {hour: "12 PM", congestion: 90},
    {hour: "1 PM", congestion: 70},
    {hour: "2 PM", congestion: 80},
    {hour: "3 PM", congestion: 40},
    {hour: "4 PM", congestion: 90},
    {hour: "5 PM", congestion: 100},
    {hour: "6 PM", congestion: 90},
    {hour: "7 PM", congestion: 70},
    {hour: "8 PM", congestion: 60},
    {hour: "9 PM", congestion: 30},
    {hour: "10 PM", congestion: 30},
    {hour: "11 PM", congestion: 20}

];

function getColor(value){
    if (value <=39){
        return "#228B22";
    }

    if (value <= 74){
        return "#FFFF00";
    }

    return "#FF0000";
}

function DailyPatternChart(){
    return(
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-sm text-slate-500 dark:text-slate-400">
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

