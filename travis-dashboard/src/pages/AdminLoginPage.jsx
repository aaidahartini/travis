import { useState } from "react";
import { Link } from "react-router-dom";

function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const [isDark] = useState(
        () => localStorage.getItem("travis-theme") === "dark"
    );

    {/*Preventing page refresh*/}
    function handleSubmit(event) {
        event.preventDefault();
        
        setError("");
        if (!email.trim() || password){
            setError("Please enter email and password.");
            return;
        }

        setError("Login authentication is not connected yet");
    }

    return(
        <div className={isDark ? "dark" : ""}>
            <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-white">
                <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">

                {/*Login Header*/}
                <h2 className="mb-2 text-left text-2xl font-bold">
                    TRAVIS Admin Console
                </h2>
                <p className="mb-6 text-left text-sm text-slate-500 dark:text-slate-400">
                    Restricted Access. Please login with your admin credentials.
                </p>
                {/*Login Form*/}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/*Email Username*/}
                    <div>
                        <label htmlFor="email" className="mb-2 blovk text-sem font-medium">
                            Username (Email Address)
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="block w-full rounded-md border border-slate-300 bg-slate-50 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800"
                            //placeholder="Enter your email"
                            autoComplete="username"
                            required
                        />
                    </div>
                    {/*Password*/}
                    <div>
                        <label htmlFor="password" className="mb-2 bloack text-sm font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <input 
                                id="password"
                                type={showPassword? "text" : "password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                //placeholder="Enter your password"
                                autoComplete="current-password"
                                required
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-16 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"/>
                                
                                <button 
                                    type="button" 
                                    onClick={()=> setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                        </div>
                    </div>

                    {/*Error Message*/}
                    {error && (
                        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400">
                            {error}
                        </div>
                    )}

                    {/*Login Button*/}
                    <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                        Continue
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        to="/"
                        className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                            Commuter Dashboard
                    </Link>
                </div>
            </div>

        </div>
        </div>
        
    );
}

export default AdminLoginPage;