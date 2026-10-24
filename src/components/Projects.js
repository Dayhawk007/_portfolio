import { motion } from 'framer-motion';
import { useState } from 'react';
import projectsData from '../data/projects.json';

function Projects() {
  const { projects } = projectsData;
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="section-fade py-20">
      <div className="container mx-auto max-w-7xl px-8 md:px-10">
        <p className="section-kicker">03 / Selected builds</p>
        <div className="mb-16 overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="font-spaceGrotesk text-5xl font-medium md:text-6xl"
          >
            Work, with receipts.
          </motion.h2>
        </div>

        <div className="project-cassettes" aria-label="Selected projects">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.42, delay: index * 0.07, ease: 'easeOut' }}
              className={`project-cassette ${activeProject === index ? 'project-cassette--active' : ''}`}
              style={{ '--cassette-index': index, zIndex: activeProject === index ? projects.length + 1 : projects.length - index }}
            >
              <div className="project-cassette__shell">
                <button
                  type="button"
                  className="project-cassette__toggle"
                  onClick={() => setActiveProject(index)}
                  aria-expanded={activeProject === index}
                >
                  <span className="project-cassette__number">[ {String(index + 1).padStart(2, '0')} ]</span>
                  <span className="project-cassette__title">{project.title}</span>
                  <span className="project-cassette__type">{project.type}</span>
                  <span className="project-cassette__control" aria-hidden="true">{activeProject === index ? '−' : '+'}</span>
                </button>

                <div className="project-cassette__details">
                  <p className="project-cassette__description">{project.description}</p>
                  <div className="project-cassette__footer">
                    <ul className="project-cassette__stack" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <p className="project-cassette__highlight">
                      <span>Capability →</span>
                      {project.highlight}
                    </p>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cassette__link">
                    {project.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
