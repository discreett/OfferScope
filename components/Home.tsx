'use client'

import Dropzone from './Dropzone'
import Navbar from './Navbar'

function myHome() {
    return (
        <main className="min-h-screen">
            <div>
                <Navbar/>

                <section className="h-screen font-mono flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-6xl tracking-wide mb-6 text-gray-800">
                            Prepare your <span className="font-semibold tracking-wider bg-gradient-to-r from-[#B8B8FF] to-[#7B68EE] text-transparent bg-clip-text inline-block">future</span> in real time.
                        </p>
                        <p className="text-gray-600 text-2xl text-pretty mb-8">Turn your offer letters into structured insights and see what's right for you.</p>

                        <a href="/parse"className="bg-[#7B68EE] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#B6B8D6] transition-colors mt-8">
                            Parse your offers today
                        </a>
                    </div>
                </section>

                <footer className="bg-[#B7BBF5] py-8 px-6 mt-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="font-semibold mb-4 text-lg">⚠️ This tool provides informational summaries and comparisons only.</p>
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