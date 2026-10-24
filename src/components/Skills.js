import { motion } from 'framer-motion';
import { useState } from 'react';
import skillsData from '../data/skills.json';

function Skills() {
  const { categories } = skillsData;
  const categoryNames = Object.keys(categories);
  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);
  const selectedCategory = categories[activeCategory] ? activeCategory : categoryNames[0];
  const activeIndex = categoryNames.indexOf(selectedCategory);
  const activeSkills = categories[selectedCategory];
  const totalSkills = activeSkills.core.length + activeSkills.supporting.length;

  return (
    <section id="skills" className="section-fade py-20">
      <div className="container mx-auto max-w-7xl px-8 md:px-10">
        <p className="section-kicker">04 / Toolkit</p>
        <div className="mb-12 overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="font-spaceGrotesk text-5xl font-medium md:text-6xl"
          >
            Capability sheet.
          </motion.h2>
        </div>

        <div className="capability-sheet">
          <div className="capability-sheet__tabs" role="tablist" aria-label="Technical categories">
            {categoryNames.map((category) => (
              <button
                type="button"
                key={category}
                role="tab"
                aria-selected={selectedCategory === category}
                className={`capability-sheet__tab ${selectedCategory === category ? 'capability-sheet__tab--active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="capability-sheet__content" role="tabpanel" aria-label={selectedCategory}>
            <div className="capability-sheet__meta">
              <span>[ {String(activeIndex + 1).padStart(2, '0')} ]</span>
              <h3>{selectedCategory}</h3>
              <span>{String(totalSkills).padStart(2, '0')} capabilities</span>
            </div>

            <ul className="capability-sheet__list">
              {activeSkills.core.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: index * 0.035, ease: 'easeOut' }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{skill}</strong>
                </motion.li>
              ))}
            </ul>

            {activeSkills.supporting.length > 0 && (
              <div className="capability-sheet__supporting">
                <p>Also worked with</p>
                <ul>
                  {activeSkills.supporting.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
