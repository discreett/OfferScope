'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function myContact() {
    return (
        <main className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar/>
            <div className="grid grid-cols-2 gap-8 py-25">
                <div className="px-10 ml-20">
                    <div className="flex flex-col">
                        <h1 className="text-5xl tracking-widest font-bold">Contact Us</h1>
                        <p className="text-lg text-gray-600 mt-4">Email or complete the form to learn how <br /> OfferScope can solve your problem.</p>
                        <p className="text-lg text-gray-600 mt-7">placeholder_email</p>
                    </div>

                    <div className = "grid gap-4 mt-10 grid-cols-3">
                        <div>
                            <h1 className="font-bold">Customer Support</h1>
                            <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
                        </div>
                        <div>
                            <h1 className="font-bold">Feedback and Suggestions</h1>
                            <p>We value your feedback and suggestions to improve our services and offerings.</p>
                        </div>
                        <div>
                            <h1 className="font-bold">Media Inquiries</h1>
                            <p>For media inquiries, please reach out to our communications team.</p>
                        </div>
                    </div>
                </div>



                <div className="bg-white p-10 rounded-lg shadow-md shadow-[#7B68EE] w-full max-w-md ml-20">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                    <h1 className="text-lg text-gray-600 mb-4">You can reach us anytime.</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE]" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE]" placeholder="Your Email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#7B68EE] focus:border-[#7B68EE]" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-[#7B68EE] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#B6B8D6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B68EE]">Send Message</button>
                    </form>
                </div>
            </div>

            <Footer/>
        </main>
    )
}

export default myContact;