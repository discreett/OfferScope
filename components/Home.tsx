'use client'

import Navbar from './Navbar'
import Footer from './Footer'
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
            </div>
            <Footer/>
        </main>
    )
}

export default myHome