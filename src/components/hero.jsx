import React from 'react';
import { motion } from 'framer-motion';
import owl from "../assets/iste_owl.png";
import athena from "../assets/athena header-svg.svg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen relative overflow-hidden text-white font-primary bg-[#080616]"
      
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <motion.img
          src={owl}
          alt="Image description"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="w-full h-full object-contain hover:scale-110 duration-1000"
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.img
          src={athena}
          alt="Athena"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 2,
            duration: 1.5,
            ease: 'easeOut'
          }}
          className="z-50 md:w-[1000px] hover:scale-110 duration-1000"
        />
      </motion.div>
    </section>
  );
};

export default Hero;