import React from 'react';

const EventCard = ({imglink}) => {
  return (
    <div className="h-80 w-72 p-5 border-2 border-red-600">
      <div className="h-full w-full">
        <img 
          src={imglink}
          alt="Event"
          className="h-full w-full object-cover"
        />
        
      </div>
    </div>
  );
};

export default EventCard;