import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

function Skills() {
  const { skills } = skillsData;

  return (
    <section id="skills" className="section-fade py-20">
      <div className="container mx-auto px-8 md:px-10 max-w-7xl">
        <p className="section-kicker">04 / Toolkit</p>
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-medium font-spaceGrotesk"
          >
            Skills
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.48) }}
              >
                <motion.div
                  className="border border-white/50 p-3 md:p-4 cursor-default bg-black"
                  initial={{ backgroundColor: "rgba(255, 255, 255, 0)", color: "rgba(255, 255, 255, 1)" }}
                  whileHover={{
                    x: 3,
                    y: 3,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    color: "rgba(0, 0, 0, 1)",
                    boxShadow: "-3px -3px 0 0 rgba(255, 255, 255, 0.4)",
                  }}
                  transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
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
