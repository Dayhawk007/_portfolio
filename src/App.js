import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Intro from './components/Intro';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.section-fade').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isIntroVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isIntroVisible]);

  return (
    <div className="app-shell bg-black text-white min-h-screen">
      {isIntroVisible && <Intro onComplete={() => setIsIntroVisible(false)} />}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className={`relative z-10 container mx-auto px-4 py-8 ${isMenuOpen ? 'blur-sm' : ''}`}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
