'use client'

import Dropzone from './Dropzone'
import styles from '@/styles/home.module.css'

function myHome() {
    return (
        <main className="min-h-screen">
            <div>
                <header className="bg-white/75 backdrop-blur-md shadow-lg sticky top-0 z-50 font-mono">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <a href="" className="text-4xl font-bold bg-gradient-to-r from-[#B8B8FF] to-[#7B68EE] text-transparent bg-clip-text">OfferScope</a>
                        <nav className="flex gap-8">
                            <a href="#" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Home</a>
                            <a href="#" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">About</a>
                            <a href="#" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Contact</a>
                        </nav>
                    </div>
                </header>
                
                <p>Prepare your future in real time.</p>
                <p>Upload offer letters. Parse information in real time. Powered by A.I.</p>
                <Dropzone />

                <footer>
                    <p>This tool provides informational summaries and comparisons only.</p>
                    <ul>
                        <li>It does not provide:</li>

                        <li>Legal advice</li>

                        <li>Financial advice</li>

                        <li>Employment advice</li>
                    </ul>
                </footer>
            </div>
        </main>
    )
}

export default myHome