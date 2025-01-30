import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import owl from "../assets/owl3.png";
import logo from "../assets/logo.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], ['0%', '20%']);

  return (
    <section className="h-screen relative overflow-hidden text-white font-primary bg-[#080616]">
      {/* Rotating Logo */}
      <div className="absolute z-0 flex justify-center w-screen ">
        <img
          src={logo}
          alt="ISTE Logo"
          className="md:w-3/6 w-[2000px]"
          style={{
            animation: "spin-slow 50s linear infinite",
            zIndex: 1,
            height: 'auto',
            opacity: 0.1,
          }}
        />
        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>

      {/* Title with Strobing Outline */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center mb-20"
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
            ease: 'easeOut',
          }}
          className="text-6xl md:text-7xl z-10 hover:scale-110 duration-1000 font- bg-clip-text text-transparent bg-gradient-to-r from-[#cd7722] to-[#fda50f] strobe-outline"
          style={{ fontFamily: "Flareserif 821 Bold" }}
        >
          Athena 25
        </motion.h1>
        <style jsx>{`
          @keyframes strobe-outline {
            0%, 100% {
              -webkit-text-stroke-color:[#fda50f];
            }
            50% {
              -webkit-text-stroke-color:rgb(197, 49, 207);
            }
          }
          .strobe-outline {
            -webkit-text-stroke-width:2px;
            -webkit-text-stroke-color:[#fda50f];
            color: transparent; /* Ensure only the stroke is visible */
            animation: strobe-outline 1.5s infinite alternate;
          }
        `}</style>
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
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="w-full h-full object-contain hover:scale-110 duration-1000"
        />
      </motion.div>
    </section>
  );
};

export default Hero;