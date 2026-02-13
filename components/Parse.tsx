'use client'
import Dropzone from "@/components/Dropzone";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
function myParse() {
    return (
        <main>
            <div>
                <Navbar/>
                <section>
                    <h1 className = "text-5xl text-center tracking-widest mb-15 mt-10">Compare your <span className="font-semibold tracking-wider bg-gradient-to-r from-[#B8B8FF] to-[#7B68EE] text-transparent bg-clip-text inline-block">Offers</span></h1>
                    <Dropzone />
                </section>
            </div>
            <Footer/>
        </main>
    )
}

export default myParse;