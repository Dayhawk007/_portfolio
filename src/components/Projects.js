import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

function Projects() {
  const { projects } = projectsData;

  return (
    <section id="projects" className="section-fade py-20">
      <div className="container mx-auto px-8 md:px-10 max-w-7xl">
        <p className="section-kicker">03 / Selected work</p>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-medium font-spaceGrotesk"
          >
            Projects
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className={`group ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring block"
              >
                <div className="relative border border-white/30 bg-black transition-all duration-150 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:bg-white group-hover:text-black group-hover:shadow-[-5px_-5px_0_0_rgba(255,255,255,0.45)]">
                  <div className="absolute top-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:bg-black" />
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-medium transition-colors">
                      {project.title}
                      </h3>
                      <span className="text-xs tracking-[0.16em] text-gray-500 group-hover:text-black">0{index + 1}</span>
                    </div>
                    <p className="text-gray-400 transition-colors group-hover:text-black/70">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm border border-white/20 rounded-none
                                   bg-white/5 transition-colors group-hover:border-black/30 group-hover:bg-black/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
