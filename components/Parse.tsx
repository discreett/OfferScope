'use client'
import Dropzone from "@/components/Dropzone";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function myParse() {
    return (
        <main className="min-h-screen flex flex-col">
            <div className="flex-1">
                <Navbar/>
                <section>
                    <div className="text-center">
                        <h1 className="text-5xl tracking-widest mt-10 mb-6">
                            Compare your <span className="font-semibold tracking-wider bg-gradient-to-r from-[#B8B8FF] to-[#7B68EE] text-transparent bg-clip-text inline-block">Offers</span>
                        </h1>
                        
                        <div className="mb-8">
                            <a 
                                className="bg-[#7B68EE] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B6B8D6] hover:text-[#7B68EE] transition-colors shadow-md" 
                                href="/history"
                            >
                                View History
                            </a>
                        </div>
                        
                        <Dropzone />
                    </div>
                </section>
            </div>
            <Footer/>
        </main>
    )
}

export default myParse;