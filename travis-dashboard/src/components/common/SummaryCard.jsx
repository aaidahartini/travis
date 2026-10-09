function SummaryCard({title, value}){
    return (
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
                {title}
            </p>

            <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {value}
            </p>
        </div>
    );
}

export default SummaryCard;