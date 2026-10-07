import { useState, useEffect } from "react";

function Header(){
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
        <header className="w-full flex justify-between items-center p-3 bg-white shadow"> 
            {/* System Name */}
            <div>
                <h1 className="text-2xl font-bold">TRAVIS</h1>
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