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
        duration: 0.8,
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
    <div className='min-h-screen w-full bg-gradient-to-b from-[#080616] to-[#B81033] text-white flex flex-col justify-center items-center p-4 md:p-8'>
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
          className='text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400'
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
            ATHENA is a manifesto of opportunities for young people to demonstrate and enrich their talents as well as to bring their ideas into life.
          </motion.p>

          <motion.p
            variants={textVariants}
            className='mb-4'
          >
            The fiesta exhibits a new countenance of vigor to transform inventiveness to existence and enhance abounding opportunities to enlive and refurbish the flair of innovation in young minds.
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
            <motion.p variants={textVariants}>
              ISTE TKMCE is poised to give every student a truly one of a kind experience and a plethora of memories and valuable insights to carry on with you.
            </motion.p>
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