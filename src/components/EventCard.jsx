import React from 'react';

const EventCard = ({ event }) => {
  const isEven = event.id % 2 === 0;

  return (
    <div className="w-full h-96 flex bg-gradient-to-r from-pink-500 via-yellow-400 to-red-500 text-white shadow-lg rounded-lg overflow-hidden">
      {isEven ? (
        <>
         
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={event.posters[0]}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </div>
        
          <div className="flex flex-col w-1/2 p-6 space-y-4">
            <h1 className="text-3xl font-bold tracking-wide uppercase drop-shadow-lg">
              {event.name}
            </h1>
            <p className="text-sm break-words line-clamp-3 leading-relaxed flex-grow">
              {event.details}
            </p>
            <div className="mt-auto">
              <button className="px-6 py-2 bg-red-600 rounded-full font-semibold uppercase hover:bg-red-700 shadow-md transition-all duration-300">
                Register Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
         
          <div className="flex flex-col w-1/2 p-6 space-y-4">
            <h1 className="text-3xl font-bold tracking-wide uppercase drop-shadow-lg">
              {event.name}
            </h1>
            <p className="text-sm break-words line-clamp-3 leading-relaxed flex-grow">
              {event.details}
            </p>
            <div className="mt-auto">
              <button className="px-6 py-2 bg-red-600 rounded-full font-semibold uppercase hover:bg-red-700 shadow-md transition-all duration-300">
                Register Now
              </button>
            </div>
          </div>
          
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={event.posters[0]}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EventCard;
