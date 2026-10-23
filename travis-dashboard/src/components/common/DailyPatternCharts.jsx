import {getColor} from "../../utils/congestion";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
} from "recharts";


function DailyPatternChart({data, title}){
    return(
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-sm text-slate-500 dark:text-slate-400">
                {title}
            </h2>

            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="hour" tickFormatter={(h) => `${h}:00`} tick={{ fill: "currentColor" }}/>
                        <YAxis
                            domain={[0, 100]}
                            tickFormatter={(value) => `${value}%`}
                            tick={{ fill: "currentColor" }}
                        />

                        <Bar dataKey="congestion">
                            {data.map((entry, index) => (
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

