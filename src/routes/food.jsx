import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import bgcarnival1 from "../assets/bgcarnival1.jpg";

const FoodAccom = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showMessage, setShowMessage] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      ref={ref}
      className="h-fit p-10 text-center font-poppins"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgcarnival1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="mt-12 pt-12 pb-12 border-t border-b border-white/20"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2
          className="text-4xl text-white mb-4"
          style={{ fontFamily: "Retro Signed" }}
        >
          Food And Accommodation
        </h2>
        <p className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto mb-6">
          Need accommodation during the event? Reserve your room now for a
          comfortable stay.
        </p>
        <button
          onClick={() =>
            (window.location.href =
              "https://makemypass.com/event/iste-athena-2025-food-and-accomodation")
          }
          className="bg-transparent text-white border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Book Room
        </button>
      </motion.div>
    </div>
  );
};

export default FoodAccom;
