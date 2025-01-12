import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="section-fade py-20">
      <div className="container mx-auto px-8 md:px-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          viewport={{ margin: "-50px" }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            viewport={{ margin: "-50px" }}
            className="text-5xl md:text-6xl font-medium mb-16 font-spaceGrotesk"
          >
            Let's Connect
          </motion.h2>
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  href: "mailto:ayushchandwani26@gmail.com",
                  text: "ayushchandwani26@gmail.com",
                  icon: "M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"
                },
                {
                  href: "https://www.linkedin.com/in/ayushchandwani26/",
                  text: "LinkedIn",
                  icon: "M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"
                },
                {
                  href: "https://github.com/Dayhawk007",
                  text: "GitHub",
                  icon: "M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.092,0.682-0.217,0.682-0.482 c0-0.237-0.008-0.866-0.013-1.7c-2.782,0.605-3.369-1.343-3.369-1.343c-0.454-1.158-1.11-1.466-1.11-1.466 c-0.908-0.62,0.069-0.608,0.069-0.608c1.003,0.07,1.531,1.032,1.531,1.032c0.892,1.53,2.341,1.088,2.91,0.832 c0.092-0.647,0.35-1.088,0.636-1.338c-2.22-0.253-4.555-1.11-4.555-4.943c0-1.091,0.39-1.984,1.029-2.683 C6.55,8.54,6.21,7.524,6.809,6.144c0,0,0.84-0.269,2.75,1.025C10.445,6.95,11.25,6.859,12,6.859c0.75,0,1.555,0.091,2.441,0.274 c1.909-1.294,2.747-1.025,2.747-1.025c0.601,1.38,0.261,2.396,0.129,2.649c0.641,0.699,1.028,1.592,1.028,2.683 c0,3.842-2.339,4.687-4.566,4.935c0.359,0.309,0.678,0.919,0.678,1.852c0,1.336-0.012,2.415-0.012,2.743 c0,0.267,0.18,0.577,0.688,0.479C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: 60,
                    scale: 0.9,
                    filter: "blur(5px)"
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    opacity: { duration: 0.4 },
                    filter: { duration: 0.4 }
                  }}
                  viewport={{ margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    y: -8,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={item.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="flex items-center space-x-4 p-4 border border-white/20 rounded-lg backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 20,
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 8
                      }
                    }}
                  >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                  </motion.div>
                  <span className="text-base md:text-xl break-all md:break-normal">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact; 