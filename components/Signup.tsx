'use client';
import Navbar from "./Navbar";
import Footer from "./Footer";

function mySignup() {
    return (
        <main className="min-h-screen">
            <Navbar/>
            <section className="flex items-center justify-center py-25">
                <div className="bg-white p-10 rounded-lg shadow-md shadow-[#7B68EE] w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
                    <h3 className="text-1xl font-bold mb-6 text-gray-800">Have an account? <a href="/login" className="text-[#B8B8FF]">Log In</a></h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE]" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE]" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE]" placeholder="Your Password" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" id="password" name="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE]" placeholder="Your Password" />
                        </div>
                        <button type="submit" className="w-full bg-[#7B68EE] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#B6B8D6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B68EE]">Sign In</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default mySignup;