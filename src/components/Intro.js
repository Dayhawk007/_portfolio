import { useEffect, useState } from 'react';

function Intro({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIsExiting(true), 5000);
    const completeTimer = window.setTimeout(onComplete, 5600);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <section
      className={`intro-overlay ${isExiting ? 'intro-overlay--exit' : ''}`}
      aria-labelledby="intro-title"
      aria-live="polite"
    >
      <div className="intro-content">
        <p className="section-kicker intro-kicker">A short prelude. No dramatic monologue.</p>
        <div className="intro-title-wrap">
          <h1 id="intro-title" className="intro-title">
            <span className="intro-line-mask"><span className="intro-line intro-line--one">Useful</span></span>
            <span className="intro-line-mask"><span className="intro-line intro-line--two">things,</span></span>
            <span className="intro-line-mask"><span className="intro-line intro-line--three">only.</span></span>
          </h1>
        </div>
        <div className="intro-copy">
          <p className="intro-subtitle">Software, systems, and the occasional well-mannered machine.</p>
          <p className="intro-aside">A little structure. A little mischief. None of the noise.</p>
        </div>
        <div className="intro-footer">
          <span className="intro-status">Monochrome by design</span>
          <span className="intro-loading">Loading the work</span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
