'use client'

function myNav() {
    return(
         <header className="bg-[white]/75 backdrop-blur-md shadow-lg sticky top-0 z-50 font-mono">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
                <div className="flex items-center justify-between w-full max-w-4xl">
                    <a href="/home" className="text-3xl font-bold bg-gradient-to-r from-[#B8B8FF] to-[#7B68EE] text-transparent bg-clip-text">OfferScope</a>
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
    )
}

export default myNav;