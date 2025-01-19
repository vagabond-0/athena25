import React, { useState, useRef } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import eventsDetails from "../content/events.js";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CustomCarousel = ({ event, showGuidelines, guidelines, onSwiperInit }) => {
  const slides = event;
  
  return (
    <Swiper
      onSwiper={onSwiperInit}
      spaceBetween={20}
      centeredSlides={true}
      pagination={{
        clickable: false,
        bulletClass: 'swiper-pagination-bullet !bg-yellow-300',
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className="w-full max-w-full h-64 sm:h-72 md:h-96 lg:h-[500px]"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="h-full w-full rounded-lg flex items-center justify-center overflow-hidden shadow-lg"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function EventPage() {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const swiperRef = useRef(null);
  const location = useLocation();
  const eventid = location.pathname.split("/");
  let event = eventsDetails.filter((e) => e.id == eventid[2])[0];

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
  };

  const toggleGuidelines = () => {
    const newShowGuidelines = !showGuidelines;
    setShowGuidelines(newShowGuidelines);
    if (swiperRef.current) {
      setTimeout(() => {
        newShowGuidelines ? swiperRef.current.slideNext() : swiperRef.current.slidePrev();
      }, 0);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-4 md:p-8 lg:p-12 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
    >
      <div className="max-w-full md:max-w-screen-lg mx-auto space-y-6 md:space-y-12">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300"
          style={{ fontFamily: "Retro Signed" }}
        >
          {event.name}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4">
            <CustomCarousel 
              event={event.posters} 
              guidelines={event.guidelines || []}
              showGuidelines={showGuidelines}
              onSwiperInit={handleSwiperInit}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleGuidelines}
              className="w-full px-4 py-2 md:w-auto md:px-8 md:py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full text-black font-bold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              {showGuidelines ? '🎪 Close Guidelines' : '🎪 See Guidelines'}
            </motion.button>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 md:p-6 lg:p-8 text-white shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-yellow-300 border-b-2 border-yellow-300 pb-2">
              🎭 Event Details
            </h2>
            <div className="space-y-4 text-sm sm:text-base md:text-lg">
              <p>{event.details}</p>
              {event.rulebook && (
                <a 
                  href={event.rulebook} 
                  target="_blank"
                  className="block mt-4 bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-lg text-white font-bold text-center transform hover:scale-105 transition-transform"
                >
                  📚 Download Rulebook
                </a>
              )}
              <div className="space-y-2">
                <p className="text-yellow-300 font-bold">💰 Registration Fee: {event.price}</p>
                <p className="text-yellow-300 font-bold">⏰ Deadline: {event.deadline}</p>
                <p className="font-bold">📅 Date: {event.date}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-2">🎪 Event Coordinators</h3>
                {event.coordinators.map((coordinator, index) => (
                  <p key={index}>{coordinator.name}: {coordinator.phone}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={event.link}>
            <button className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold text-base sm:text-lg md:text-xl px-6 py-3 md:px-12 md:py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              🎟️ Register Now!
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
