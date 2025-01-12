import { motion } from 'framer-motion';
import experienceData from '../data/experiences.json';

function Experience() {
  return (
    <section id="experience" className="section-fade py-20">
      <div className="container mx-auto px-8 md:px-10 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-medium mb-16 font-spaceGrotesk"
        >
          Experience
        </motion.h2>
        {experienceData.experiences.map((experience, index) => (
          <div key={index} className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-[2px] bg-white origin-top"
              />
              <div className="pl-8 pb-8">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute w-4 h-4 bg-white rounded-full -left-[6px] -top-[2px] transform -translate-x-1/2"
                />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-3">{experience.title}</h3>
                  <p className="text-gray-300 mb-4">
                    <strong>{experience.company}</strong> • {experience.period}
                  </p>
                  <p className="text-gray-400">{experience.description}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience; 