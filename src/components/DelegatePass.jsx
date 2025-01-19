import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import bgcarnival1 from "../assets/bgcarnival1.jpg";
const DelegatePass = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div
      ref={ref}
      className="h-fit  p-10 text-center font-poppins "
      style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${bgcarnival1})`, // Set the background image
            backgroundSize: "cover", // Ensure the image covers the container
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat" // Prevent repeating
          }}
    >
      {/* Delegate Pass Section */}
      <motion.div 
        className="mb-6"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 className="text-5xl text-white "  style={{fontFamily:"Retro Signed"}}>Delegate Pass</h1>
      </motion.div>
      
      <motion.div
        className="mb-8 max-w-lg mx-auto"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className="text-white/90 text-lg leading-relaxed">
          Secure your spot at our event with a Delegate Pass - your affordable ticket to join and participate. Register now with a small fee and get full access to all event activities and networking opportunities.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-12"
      >
         <button 
          className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold text-xl hover:bg-white hover:text-[#B81033] transition-colors duration-200"
          onClick={() => console.log('Book room clicked')}
        >
          Buy Now
        </button>
      </motion.div>

      {/* Room Booking Section */}
      <motion.div 
        className="mt-12 pt-12 border-t border-white/20"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-4xl text-white  mb-4"  style={{fontFamily:"Retro Signed"}}>Book Your Room</h2>
        <p className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto mb-6">
          Need accommodation during the event? Reserve your room now for a comfortable stay. Special rates available for event delegates.
        </p>
        <button 
          className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold text-xl hover:bg-white hover:text-[#B81033] transition-colors duration-200"
          onClick={() => console.log('Book room clicked')}
        >
          Book Room
        </button>
      </motion.div>
    </div>
  );
};

export default DelegatePass;