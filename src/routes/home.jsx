import React, { useState } from "react";
import Hero from "../components/hero.jsx";
import { motion } from 'framer-motion';

import Aboutathena from "../components/aboutathena.jsx";
import All from "../components/All.jsx";
import DelegatePass from "../components/DelegatePass.jsx";

export default function Home() {
  const [toggle, setToggle] = useState();
  const text = "ISTE TKMCE is glad to present ATHENA, 22nd Annual ISTE State Students' Convention. ATHENA is a manifesto of opportunities for young people to demonstrate and enrich their talents as well as to bring their ideas into life. The fiesta exhibits a new countenance of vigor to transform inventiveness to existence and enhance abounding opportunities to enlive and refurbish the flair of innovation in young minds. With the theme Revolutionizing Tomorrow with Technology, ISTE TKMCE is poised to give every student a truly one of a kind experience and a plethora of memories and valuable insights to carry on with you.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="relative">
      <Hero />
      <Aboutathena />
      <All />
      <DelegatePass />
      <motion.div 
        className="relative bg-white z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        
        <div>
          <div className="md:h-fit h-fit w-full md:flex justify-between font-primary p-10 bg-[#B81033] text-[#FEEED6]">
            {/* Rest of your existing content */}
          </div>
          {/* Rest of your existing components */}
        </div>
      </motion.div>
    </div>
  );
}
