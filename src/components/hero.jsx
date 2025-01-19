import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import owl from "../assets/iste_owl.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], ['0%', '20%']);

  return (
    <section className="h-screen relative overflow-hidden text-white font-primary bg-[#080616] sticky top-0 ">
     
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ marginTop: '-20vh', opacity }}
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: 'easeOut'
          }}
          className="text-6xl  z-10 hover:scale-110 duration-1000"
          style={{fontFamily:"Retro Signed"}}
        >
          Athena 25
        </motion.h1>
      </motion.div>

      {/* Owl Image */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity, y }}
      >
        <motion.img
          src={owl}
          alt="Owl illustration"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="w-full h-full object-contain hover:scale-110 duration-1000"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center"
        style={{ opacity }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="cursor-pointer text-center"
        >
          {/* <ChevronDown size={32} className="mb-2" />
          <p className="text-sm">Scroll Down</p> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
