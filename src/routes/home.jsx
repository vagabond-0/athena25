import React, { useState } from "react";
import Hero from "../components/hero.jsx";
import { motion } from 'framer-motion';

import Aboutathena from "../components/aboutathena.jsx";
import All from "../components/All.jsx";
import DelegatePass from "../components/DelegatePass.jsx";

export default function Home() {
  const [toggle, setToggle] = useState();
  const text = "ISTE TKMCE is glad to present ATHENA..."; // Your existing text
  
  return (
    <div className="relative">
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <Aboutathena />
      </div>
      
      <div id="events">
        <All />
      </div>
      
      <div id="delegate-pass">
        <DelegatePass />
      </div>

      <motion.div 
        className="relative bg-white z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Rest of your existing content */}
      </motion.div>
    </div>
  );
}