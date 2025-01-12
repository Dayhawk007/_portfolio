import experienceData from '../data/experiences.json';
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';

function Skills() {
  const extractSkills = () => {
    const skillsSet = new Set();
    const technicalSkills = [
      // Core Technologies
      'React', 'Node.js', 'TypeScript', 'JavaScript', 'Python',
      // Mobile & Game Development
      'Flutter', 'Unity', 'Android', 'AR',
      // Backend & Databases
      'Django', 'MongoDB', 'MySQL', 'Express.js',
      // Cloud & DevOps
      'AWS', 'GCP', 'GitHub Actions', 'CI/CD',
      // Web Technologies
      'Next.js', 'REST API', 'HTML', 'CSS', 'Tailwind',
      // Tools & Version Control
      'Git'
    ];

    // Extract from experiences
    experienceData.experiences.forEach(experience => {
      const description = experience.description.toLowerCase();
      technicalSkills.forEach(skill => {
        if (description.includes(skill.toLowerCase())) {
          skillsSet.add(skill);
        }
      });
    });

    // Extract from projects
    projectsData.projects.forEach(project => {
      const description = project.description.toLowerCase();
      const technologies = project.technologies.map(tech => tech.toLowerCase());
      
      technicalSkills.forEach(skill => {
        if (description.includes(skill.toLowerCase()) || 
            technologies.includes(skill.toLowerCase())) {
          skillsSet.add(skill);
        }
      });
    });

    return Array.from(skillsSet);
  };

  const skills = extractSkills();

  return (
    <section id="skills" className="section-fade py-20">
      <div className="container mx-auto px-8 md:px-10 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-medium mb-10 font-spaceGrotesk"
        >
          Skills
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  className="border border-white/50 p-3 md:p-4 cursor-pointer backdrop-blur-sm"
                  initial={{ backgroundColor: "rgba(255, 255, 255, 0)", color: "rgba(255, 255, 255, 1)" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    color: "rgba(0, 0, 0, 1)",
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                >
                  <h3 className="text-base md:text-lg font-medium">{skill}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 