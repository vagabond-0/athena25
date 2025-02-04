import React from 'react';
import { motion } from 'framer-motion';

const AboutAthena = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: {
        duration: 2
      }
    }
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-[#080616] via-[#B81033] to-[#080616] text-white flex flex-col justify-center items-center p-4 md:p-8 font-poppins'>
      <motion.div
        className='max-w-4xl mx-auto text-center'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false,
          amount: 0.3
        }}
      >
        <motion.h1
          variants={textVariants}
          className='text-4xl md:text-5xl  mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400'
          style={{fontFamily:"Retro Signed"}}
        >
          Athena is HERE!
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className='space-y-6 text-lg md:text-xl leading-relaxed'
        >
          <motion.p
            variants={textVariants}
            className='mb-4'
          >
            ISTE TKMCE is glad to present ATHENA, 22nd Annual ISTE State Students' Convention.
          </motion.p>

          <motion.p
            variants={textVariants}
            className='mb-4'
          >
           ISTE TKMCE proudly presents ATHENA '25, a vibrant platform where innovation sparks, creativity thrives, and dreams take flight. It’s where collaboration fuels groundbreaking ideas and talent meets boundless passion.
          </motion.p>

          <motion.p
            variants={textVariants}
            className='mb-4'
          >
            ATHENA '25 isn’t just an event; it’s a tribute to the dreamers and innovators who dare to push boundaries and redefine the future.
          </motion.p>

          <motion.div
            variants={textVariants}
            className='mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm'
          >
            <motion.h2 
              variants={textVariants}
              className='text-2xl md:text-3xl font-semibold mb-4 text-yellow-300'
            >
              Revolutionizing Tomorrow with Technology
            </motion.h2>
           
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className='absolute inset-0 -z-10'
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false,
          amount: 0.3
        }}
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-200/20 via-transparent to-transparent'></div>
      </motion.div>
    </div>
  );
};

export default AboutAthena;