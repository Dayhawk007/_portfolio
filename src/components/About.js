function About() {
  return (
    <section id="about" className="section-fade min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-8 md:px-10 max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Hello, I'm Ayush Chandwani</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            A passionate individual who likes to innovate solutions by using the arsenal of skills at hand.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 text-lg relative overflow-hidden group
              border-2 border-white/30 rounded-lg backdrop-blur-sm
              hover:border-white/60 transition-all duration-300
              before:absolute before:inset-0 before:bg-white/10
              before:translate-x-[-100%] before:transition-transform before:duration-300
              hover:before:translate-x-0 before:hover:opacity-50"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors">
              Get in touch
            </span>
          </a>
        </div>

        <div className="flex-1 relative hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute w-full h-full border-2 border-white/20 rounded-lg transform rotate-3 animate-[spin_20s_linear_infinite]">
                <div className="absolute inset-0 border-2 border-white/10 rounded-lg rotate-45"></div>
              </div>
              
              <div className="absolute w-72 h-72 top-12 left-12">
                <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                <div className="absolute inset-4 border-2 border-white/20 rounded-full animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
                <div className="absolute inset-8 border-2 border-white/10 rounded-full animate-[pulse_2s_ease-in-out_infinite_1s]"></div>
              </div>
              
              <div className="absolute w-20 h-20 top-20 right-20 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent animate-[float_5s_ease-in-out_infinite]"></div>
              <div className="absolute w-16 h-16 bottom-20 left-20 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent animate-[float_4s_ease-in-out_infinite_reverse]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 