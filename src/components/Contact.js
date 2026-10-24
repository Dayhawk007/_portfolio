import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="section-fade py-20">
      <div className="container mx-auto max-w-7xl px-8 md:px-10">
        <p className="section-kicker">05 / Contact</p>
        <div className="mb-8 overflow-hidden">
          <motion.h2
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="font-spaceGrotesk text-4xl font-medium md:text-5xl"
          >
            One more thing.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ margin: '-50px' }}
          className="closing-statement"
        >
          <p className="closing-statement__prompt">Have a tricky problem in mind?</p>
          <p className="closing-statement__detail">
            I enjoy turning the nuanced bits into something useful. Let&apos;s talk.
          </p>

          <a className="closing-statement__email focus-ring" href="mailto:ayushchandwani26@gmail.com">
            <span>Email Ayush</span>
            <b aria-hidden="true">↗</b>
          </a>

          <div className="closing-statement__links" aria-label="More ways to connect">
            <a className="focus-ring" href="https://www.linkedin.com/in/ayushchandwani26/" target="_blank" rel="noopener noreferrer">
              <span>01</span> LinkedIn <b aria-hidden="true">↗</b>
            </a>
            <a className="focus-ring" href="https://github.com/Dayhawk007" target="_blank" rel="noopener noreferrer">
              <span>02</span> GitHub <b aria-hidden="true">↗</b>
            </a>
            <span className="closing-statement__status"><i aria-hidden="true" /> Usually online between good ideas.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
