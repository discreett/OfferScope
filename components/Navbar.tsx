'use client'

function myNav() {
    return(
         <header className="bg-[white]/75 backdrop-blur-md shadow-xs sticky top-0 z-50 font-mono">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
                <div className="flex items-center justify-between w-full max-w-4xl">
                    <a href="/home" className="text-3xl font-bold bg-gradient-to-r from-[#B8B8FF] to-[#7B68EE] text-transparent bg-clip-text">OfferScope</a>
                    <nav className="flex gap-20">
                        <a href="/home" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Home</a>
                        <a href="/about" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">About</a>
                        <a href="/contact" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Contact</a>
                    </nav>

                    <nav className="flex gap-8 items-center">
                        <a href="/login" className="text-gray-700 hover:text-[#B8B8FF] transition-colors font-medium">Log In</a>
                        <a href="/signup" className="px-4 py-2 font-medium bg-[#7B68EE] text-white rounded-lg font-semibold hover:bg-[#B6B8D6] transition-colors">Sign up</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default myNav;