import React from 'react';

const EventCard = ({ event }) => {
  const isEven = event.id % 2 === 0;

  return (
    <div className="w-full md:h-96 flex flex-col md:flex-row bg-gradient-to-r from-pink-500 via-yellow-400 to-red-500 text-white shadow-lg rounded-lg overflow-hidden">
      
      <div 
        className={`w-full md:w-1/2 h-64 md:h-full flex justify-center items-center order-1 
                    ${isEven ? 'md:order-1' : 'md:order-2'}`}
      >
        <img
          src={event.posters[0]}
          alt={event.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        className={`flex flex-col w-full md:w-1/2 p-6 space-y-4 order-2 
                    ${isEven ? 'md:order-2' : 'md:order-1'}`}
      >
        <h1 className="text-2xl md:text-3xl  tracking-wide uppercase drop-shadow-lg" style={{fontFamily:" Retro Signed"}}>
          {event.name}
        </h1>
        
        <p className="text-sm md:text-base break-words line-clamp-3 leading-relaxed flex-grow">
          {event.details}
        </p>
        
        <div className="mt-4 md:mt-auto">
          <button className="w-full md:w-auto px-6 py-2 bg-red-600 rounded-full font-semibold uppercase 
                           hover:bg-red-700 shadow-md transition-all duration-300 
                           active:transform active:scale-95">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;