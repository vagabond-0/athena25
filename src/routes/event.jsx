import React, { useState, useRef } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import eventsDetails from "../content/events.js"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const CustomCarousel = ({ event, showGuidelines, guidelines, onSwiperInit }) => {
  const slides = event;
  
  return (
    <Swiper
      onSwiper={onSwiperInit}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: false,
        bulletClass: 'swiper-pagination-bullet !bg-yellow-300'
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className="w-full max-w-[400px] h-96 md:h-[450px] lg:h-[500px]"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="h-full w-full rounded-2xl flex items-center justify-center overflow-hidden shadow-xl"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full rounded-2xl transform hover:scale-105 transition-transform duration-300"
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
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="p-10 text-center text-4xl md:text-7xl lg:text-7xl mb-8 md:mb-32  text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300"
          style={{ fontFamily: "Retro Signed" }}
        >
          {event.name}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
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
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full text-black font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              {showGuidelines ? '🎪 Close Guidelines' : '🎪 See Guidelines'}
            </motion.button>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-yellow-300 border-b-2 border-yellow-300 pb-2">
              🎭 Event Details
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-lg leading-relaxed">{event.details}</p>
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
                  <h3 className="text-xl font-bold text-yellow-300 mb-3">🎪 Event Coordinators</h3>
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
          <Link to={event.link}>
            <button className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              🎟️ Register Now!
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}