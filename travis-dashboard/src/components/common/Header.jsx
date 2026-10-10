import { useState, useEffect } from "react";

function Header({ isDark, onToggleTheme}){
    const [now, setNow] = useState(new Date()); 
    useEffect(() =>{
        const interval = setInterval(() =>{
            setNow(new Date());
        }, 1000);
        // React clean up the function and stop interval
        return () =>{
            clearInterval(interval);
        };
    }, []);

    return (
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white p-4 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"> 
            {/* System Name */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">TRAVIS</h1>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
                Real-Time Traffic Flow Visualization &amp; Patterns
            </p>

            {/* Theme Toggle */}
            <div className="flex items-center gap-4">
                <button 
                    type="button" 
                    onClick={onToggleTheme} 
                    aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                    title={`Switch to ${isDark ? "light" : "dark"} mode`}
                    className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                    {isDark ? "☀️" : "🌙" }
                </button>
            </div>

            {/* Time and data*/}
            <div className="flex flex-col items-end">
                <span className="text-xl font-semibold">
                    {now.toLocaleTimeString()}
                </span>
                <span className="text-sm text-gray-500">
                    {now.toLocaleDateString()}
                </span>
            </div>
        </header>
    );
}

export default Header;