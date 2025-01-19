import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import bgcarnival from "../assets/bgcarnival.jpg";

const All = () => {
  const navigate = useNavigate();

  const AllContent = [
    {
      name: "Events",
      path: "/events",
      description: "Step right up to a spectacular showcase of talent! From technical triumphs to creative conquests, our events promise excitement at every turn. Join the grandest carnival of innovation where every participant is a star!"
    },
    {
      name: "Workshops",
      path: "/workshops",
      description: "Enter the arena of excellence where brilliant minds compete! Challenge yourself in coding battles, design showdowns, and innovation face-offs. Glory awaits the bold who dare to compete!"
    },
    {
      name: "Talk Session",
      path: "/talkshows",
      description: "Gather 'round for mind-bending sessions with industry titans and thought leaders! Experience captivating discussions that will inspire, enlighten, and transform your perspective on technology."
    }
  ];

  const boxVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className='md:min-h-screen flex flex-col md:flex-row gap-10 justify-center items-center  p-10 font-poppins'
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${bgcarnival})`, // Set the background image
      backgroundSize: "cover", // Ensure the image covers the container
      backgroundPosition: "center", // Center the image
      backgroundRepeat: "no-repeat" // Prevent repeating
    }}
    >
      
      {AllContent.map((all, index) => (
        <motion.div
          key={index}
          className='relative w-64 h-80 group perspective-1000 cursor-pointer'
          variants={boxVariants}
          whileHover="hover"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4 }}
          viewport={{
            once: false,
            amount: 0.3
          }}
          onClick={() => handleCardClick(all.path)}
        >
          <motion.div
            className='w-full h-full flex flex-col justify-center items-center
                     border-4 border-yellow-300 rounded-lg
                     bg-gradient-to-b from-[#1a0208] to-[#B81033]
                     shadow-lg shadow-black/30
                     overflow-hidden
                     relative
                     hover:shadow-xl hover:shadow-black/40
                     transition-shadow duration-300'
          >
            <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200'></div>
            <div className='absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200'></div>

            <h1 className='text-4xl  text-yellow-300 text-center mb-4 z-10 group-hover:opacity-0 transition-opacity duration-300'  style={{fontFamily:"Retro Signed"}}>
              {all.name}
            </h1>

            <motion.div
              className='absolute inset-0 bg-black/90 p-6 flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              initial="hidden"
              whileHover="visible"
              variants={descriptionVariants}
            >
              <p className='text-yellow-300 text-lg text-center'>
                {all.description}
              </p>
            </motion.div>

            <div className='absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-300'></div>
            <div className='absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-yellow-300'></div>
            <div className='absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-yellow-300'></div>
            <div className='absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-yellow-300'></div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default All;