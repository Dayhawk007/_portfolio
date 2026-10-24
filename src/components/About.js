function About() {
  return (
    <section id="about" className="section-fade min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-8 md:px-10 max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-2xl">
          <p className="section-kicker">01 / Profile · Indore, India</p>
          <div className="overflow-hidden mb-8">
            <h1 className="hero-heading text-5xl md:text-7xl font-bold">Hello, I'm Aayush Chandwani</h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            I build AI-native, scalable full-stack systems—from agentic workflows and RAG pipelines to high-performance cloud products.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 text-lg relative overflow-hidden group
              border-2 border-white/60 rounded-none bg-black
              transition-transform duration-150 hover:translate-x-1 hover:translate-y-1
              before:absolute before:inset-0 before:bg-white before:translate-x-[-100%]
              before:transition-transform before:duration-150 hover:before:translate-x-0
              after:absolute after:inset-0 after:-z-10 after:translate-x-1 after:translate-y-1 after:border-2 after:border-white"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-150">
              Get in touch
            </span>
          </a>
        </div>

        <div className="flex-1 relative hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 border border-white/30 bg-black/80">
              <div className="absolute inset-4 border border-white/15 grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span key={index} className="border-b border-r border-white/10" />
                ))}
              </div>
              <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white bg-black" />
              <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-white/60 bg-white/5" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/70" />
              <div className="absolute top-1/2 left-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-white/30" />
              <span className="absolute -bottom-7 left-0 text-xs tracking-[0.18em] text-gray-500 font-spaceGrotesk">SYSTEM / 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
