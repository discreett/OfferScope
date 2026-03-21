'use client';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { change } from '../app/change-password/actions';
import { useState } from 'react'

function MyChange() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <main className="min-h-screen">
            <Navbar/>
            <section className="flex items-center justify-center py-25">
                <div className="bg-white p-10 rounded-lg shadow-md shadow-[#7B68EE] w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Password</h2>
                    <form className="space-y-4">
                        <div>
                           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE]" 
                                placeholder="Your Password" 
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                value={confirmPassword}
                                className={`mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE] ${
                                    confirmPassword && password !== confirmPassword 
                                        ? 'border-red-500' 
                                        : 'border-gray-300'
                                }`}
                                placeholder="Confirm Your Password" 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {confirmPassword && password !== confirmPassword && (
                                <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                            )}
                        </div>
                        <button 
                            type="submit" 
                            disabled={!password || !confirmPassword || password !== confirmPassword}
                            className="w-full bg-[#7B68EE] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#B6B8D6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B68EE] disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:cursor-not-allowed"
                            formAction={change}
                        >
                            Change Password
                        </button>                    
                        </form>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default MyChange;