'use client'

import Dropzone from './Dropzone'

function myHome() {
    return (
        <main className="min-h-screen">
            <div>
                <header className="bg-white/75 backdrop-blur-md shadow-lg sticky top-0 z-50 font-mono">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
                        <div className="flex items-center justify-between w-full max-w-4xl">
                            <a href="" className="text-3xl font-bold bg-gradient-to-r from-[#B8B8FF] to-[#7B68EE] text-transparent bg-clip-text">OfferScope</a>
                            <nav className="flex gap-20">
                                <a href="#" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Home</a>
                                <a href="#" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">About</a>
                                <a href="#" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Contact</a>
                            </nav>

                            <nav className="flex gap-8">
                                <a href="#" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Log In</a>
                                <a href="#" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Sign up</a>
                            </nav>
                        </div>
                    </div>
                </header>

                <section className="h-screen font-mono flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-6xl tracking-wide mb-6 text-gray-800">
                            Prepare your <span className="font-semibold tracking-wider bg-gradient-to-r from-[#B8B8FF] to-[#7B68EE] text-transparent bg-clip-text inline-block">future</span> in real time.
                        </p>
                        <p className="text-gray-600 text-2xl text-pretty mb-8">Turn your offer letters into structured insights and see what's right for you.</p>

                        <a href=""className="bg-[#7B68EE] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#6B5ACD] transition-colors mt-8">
                            Parse your offers today
                        </a>
                        <div></div>
                    </div>
                </section>
                
                <section className="py-16 px-6">
                    <Dropzone />
                </section>

                <footer className="bg-gray-100 py-8 px-6 mt-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-yellow-600 font-semibold mb-4 text-lg">⚠️ This tool provides informational summaries and comparisons only.</p>
                        <div className="text-gray-700">
                            <p className="mb-2 font-medium">It does not provide:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Legal advice</li>
                                <li>Financial advice</li>
                                <li>Employment advice</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}

export default myHome