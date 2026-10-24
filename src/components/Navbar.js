import { useEffect, useState } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' }
];

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const activeIndex = Math.max(sections.findIndex(({ id }) => id === activeSection), 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="command-strip fixed left-0 right-0 top-0 z-50" aria-label="Main navigation">
      <div className="command-strip__inner">
        <a href="#about" className="command-strip__brand" aria-label="Ayush home" onClick={closeMenu}>
          Ayush
        </a>

        <div
          className="command-strip__directory hidden lg:grid"
          style={{ '--active-index': activeIndex }}
        >
          <span className="command-strip__indicator" aria-hidden="true" />
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`command-strip__link ${activeSection === section.id ? 'command-strip__link--active' : ''}`}
            >
              <span className="command-strip__number">{String(index + 1).padStart(2, '0')}</span>
              <span>{section.label}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          className="command-strip__index-button neo-button lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-command-index"
        >
          <span>[</span> INDEX <span>]</span>
        </button>
      </div>

      <div
        id="mobile-command-index"
        className={`command-strip__mobile lg:hidden ${isMenuOpen ? 'command-strip__mobile--open' : ''}`}
      >
        <div className="command-strip__mobile-label">Directory / select a section</div>
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`command-strip__mobile-link ${activeSection === section.id ? 'command-strip__mobile-link--active' : ''}`}
            onClick={closeMenu}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{section.label}</span>
            <span aria-hidden="true">↘</span>
          </a>
        ))}
      </div>
      <span className="command-strip__progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
    </nav>
  );
}

export default Navbar;
