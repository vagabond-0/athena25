import React, { useState, useCallback, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import workshopDetails from "../content/workshops.js";

const CustomCarousel = ({ event }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayOption = {
    delay: 4000,
    rootNode: (emblaRoot) => emblaRoot.parentElement
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  }, [Autoplay(autoplayOption)]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-[400px] mx-auto">
      <div className='overflow-hidden rounded-2xl' ref={emblaRef}>
        <div className='flex flex-row'>
          {event.map((src, index) => (
            <CustomCard key={index} src={src} />
          ))}
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {event.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-yellow-300 scale-110' 
                : 'bg-yellow-300/50 hover:bg-yellow-300/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const CustomCard = ({ src }) => {
  return (
    <div className="flex-[0_0_100%] min-w-0 pl-4 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-96 rounded-2xl overflow-hidden shadow-xl"
      >
        <img 
          src={src} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          alt="Workshop"
        />
      </motion.div>
    </div>
  );
};

export default function WorkshopPage() {
  const location = useLocation();
  const eventid = location.pathname.split("/");
  let event = workshopDetails.filter((e) => e.id == eventid[2])[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 md:p-8 lg:p-12 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 font-poppins"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-center p-10 text-4xl md:text-5xl lg:text-5xl mb-8 md:mb-12  text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300"
          style={{ fontFamily: "Retro Signed" }}
        >
          {event.name}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <CustomCarousel event={event.posters} />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-yellow-300 border-b-2 border-yellow-300 pb-2">
              🎭 Workshop Details
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-lg leading-relaxed whitespace-pre-line">{event.details}</p>
                {event.rulebook && (
                  <a 
                    href={event.rulebook} 
                    target="_blank"
                    className="block mt-6 bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 rounded-lg text-white font-bold text-center transform hover:scale-105 transition-transform"
                  >
                    📚 Download Rulebook
                  </a>
                )}
              </div>

              <div className="space-y-4 text-lg">
                <p className="text-yellow-300 font-bold">💰 Registration Fee: {event.price}</p>
                <p className="text-yellow-300 font-bold">⏰ Deadline: {event.deadline}</p>
                <p className="font-bold">📅 Date: {event.date}</p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-yellow-300 mb-3">🎪 Workshop Coordinators</h3>
                  {event.coordinators.map((coordinator, index) => (
                    <p key={index} className="mb-2">
                      {coordinator.name}: {coordinator.phone}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="mt-8 md:mt-12 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
           {event.isopen?<Link to={event.link}>
            <button className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold text-base sm:text-lg md:text-xl px-6 py-3 md:px-12 md:py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              🎟️ Register Now!
            </button>
          </Link>:<button className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold text-base sm:text-lg md:text-xl px-6 py-3 md:px-12 md:py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              Closed
            </button>}
        </motion.div>
      </div>  
    </motion.div>
  );
}