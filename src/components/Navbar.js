function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo with enhanced hover effect */}
          <a href="#" className="text-3xl font-medium tracking-wider font-spaceGrotesk relative group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-300">AYUSH</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* Hamburger button with smoother animations */}
          <button 
            className="lg:hidden p-3 relative w-12 h-12 focus:outline-none group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute w-6 h-[2px] bg-white transform transition-all duration-500 ease-in-out top-4 left-1/2 -translate-x-1/2 group-hover:bg-gray-300"
                 style={{
                   transform: isMenuOpen ? 'translateY(8px) rotate(45deg)' : '',
                 }}
            ></div>
            <div className="absolute w-6 h-[2px] bg-white transform transition-all duration-500 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:bg-gray-300"
                 style={{
                   opacity: isMenuOpen ? 0 : 1
                 }}
            ></div>
            <div className="absolute w-6 h-[2px] bg-white transform transition-all duration-500 ease-in-out bottom-4 left-1/2 -translate-x-1/2 group-hover:bg-gray-300"
                 style={{
                   transform: isMenuOpen ? 'translateY(-8px) rotate(-45deg)' : '',
                 }}
            ></div>
          </button>

          {/* Desktop menu with enhanced hover effects */}
          <div className="hidden lg:flex space-x-12">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-lg relative group overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu with enhanced animations */}
        <div 
          className={`lg:hidden fixed inset-0 backdrop-blur-lg bg-black/95 transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
          style={{ top: '80px' }}
        >
          <div className="flex flex-col items-center space-y-10 pt-10">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-2xl relative group"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-300">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
        <div className="absolute inset-0 animate-slide-line bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </nav>
  );
}

export default Navbar; 