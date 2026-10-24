import { motion } from 'framer-motion';
import experienceData from '../data/experiences.json';

function Experience() {
  return (
    <section id="experience" className="section-fade py-20">
      <div className="container mx-auto max-w-7xl px-8 md:px-10">
        <p className="section-kicker">02 / Career log</p>
        <div className="mb-16 overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="font-spaceGrotesk text-5xl font-medium md:text-6xl"
          >
            Career, on record.
          </motion.h2>
        </div>
        <div className="experience-log" aria-label="Career experience">
          {experienceData.experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              className="experience-log__entry"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: 'easeOut' }}
            >
              <div className="experience-log__index" aria-hidden="true">
                <span>[ {String(index + 1).padStart(2, '0')} ]</span>
                <span>LOG</span>
              </div>

              <div className="experience-log__record">
                <div className="experience-log__topline">
                  <p className="experience-log__company">{experience.company}</p>
                  <p className="experience-log__period">{experience.period}</p>
                </div>

                <h3>{experience.title}</h3>
                <p className="experience-log__description">{experience.description}</p>

                <div className="experience-log__footer">
                  <ul className="experience-log__stack" aria-label={`${experience.company} technologies`}>
                    {experience.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="experience-log__impact">
                    <span>Impact →</span>
                    {experience.impact}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
