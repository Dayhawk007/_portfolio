import { Bug, Coffee, Gamepad2, Monitor } from 'lucide-react';

const heroRoles = [
  { text: 'An engineer.' },
  { text: 'A nerd.' },
  { text: 'A tinkerer.' },
  { text: 'A caffeine addict.' },
  { text: 'Maybe a sentient being?' },
  { text: 'Absolutely not.', className: 'hero-role--human' }
];

function About() {
  return (
    <section id="about" className="section-fade min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-8 md:px-10 max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 min-w-0 max-w-2xl">
          <p className="section-kicker">01 / Profile · Indore, India</p>
          <div className="overflow-hidden mb-8">
            <h1 className="hero-heading text-5xl md:text-7xl font-bold">Ayush here.</h1>
          </div>
          <div className="hero-role-stage" aria-label={heroRoles.map(({ text }) => text).join(' ')}>
            {heroRoles.map(({ text, className = '' }, index) => (
              <span className={`hero-role ${className}`} key={text} style={{ '--hero-role-delay': `${index * 1.3}s` }}>
                {text}
              </span>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            I craft niche solutions, automate the tedious, and turn nuanced problems into systems that quietly work.
          </p>
          <a 
            href="#contact" 
            className="neo-button inline-block px-8 py-4 text-lg relative overflow-hidden group
              border-2 border-white/60 rounded-none bg-black
              transition-transform duration-150 hover:translate-x-1 hover:translate-y-1
              before:absolute before:inset-0 before:bg-white before:translate-x-[-100%]
              before:transition-transform before:duration-150 hover:before:translate-x-0"
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
            <div className="system-visual relative w-80 h-80 lg:w-96 lg:h-96 border border-white/30 bg-black/80" aria-hidden="true">
              <div className="system-grid absolute inset-4 border border-white/15 grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span key={index} className="border-b border-r border-white/10" />
                ))}
              </div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/70" />
              <div className="absolute top-1/2 left-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-white/30" />
              <span className="system-lock-frame system-lock-frame--one" />
              <span className="system-lock-frame system-lock-frame--two" />
              <div className="system-icon-tile">
                <span className="system-icon system-icon--coffee">
                  <Coffee className="system-icon-mark" strokeWidth={2.2} />
                </span>
                <span className="system-icon system-icon--controller">
                  <Gamepad2 className="system-icon-mark" strokeWidth={2.2} />
                </span>
                <span className="system-icon system-icon--bug">
                  <Bug className="system-icon-mark" strokeWidth={2.2} />
                </span>
                <span className="system-icon system-icon--workstation">
                  <Monitor className="system-icon-mark" strokeWidth={2.2} />
                </span>
              </div>
              <span className="absolute -bottom-7 left-0 text-xs tracking-[0.18em] text-gray-500 font-spaceGrotesk">SYSTEM / 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
