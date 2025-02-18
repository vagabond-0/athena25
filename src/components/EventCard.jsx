import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import eventsDetails from "../content/events.js";
import workshopDetails from "../content/workshops.js";
import talkshowDetails from "../content/talkshow.js";
import Informalsdata from '../content/informals.js';

const EventCard = ({ event, w, e, t, i }) => {
  const isEven = event.id % 2 === 0;
  let selectedEvent = event;
  let routePath = '';

  
  function searchEvent(e) {
    return e.id == event.id;
  }

  if (e) {
    selectedEvent = eventsDetails.find(searchEvent) || event;
    routePath = `/event/${event.id}`;
  } else if (w) {
    selectedEvent = workshopDetails.find(searchEvent) || event;
    routePath = `/workshop/${event.id}`;
  } else if (t) {
    selectedEvent = talkshowDetails.find(searchEvent) || event;
    routePath = `/talkshow/${event.id}`;
  } else if (i) {
    selectedEvent = Informalsdata.find(searchEvent) || event;
    routePath = `/informals/${event.id}`;
  }

  return (
    <div className="w-full md:w-10/12 md:h-96 flex flex-col md:flex-row justify-center text-white shadow-lg rounded-lg overflow-hidden">
      <div className={`w-full md:w-2/6 h-auto md:h-full flex justify-center items-center order-1 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <img src={selectedEvent.posters[0]} alt={selectedEvent.name} className="w-full h-full object-fill" />
      </div>
      <div className={`flex flex-col w-full md:w-1/2 p-6 h-full justify-between order-2 bg-gradient-to-r from-[#c31432] to-[#240b36] ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl tracking-wide uppercase drop-shadow-lg" style={{fontFamily: "Retro Signed"}}>
            {selectedEvent.name}
          </h1>
          <p className="text-sm md:text-base break-words overflow-hidden line-clamp-3 text-ellipsis">
            {selectedEvent.details}
          </p>
        </div>
        <div className="mt-4">
          {selectedEvent.isopen ? 
            <Link to={routePath}>
              <button className="w-full md:w-auto px-6 py-2 bg-[#070616] rounded-full font-semibold uppercase hover:bg-red-700 shadow-md transition-all duration-300 active:transform active:scale-95">
                Closed
              </button>
            </Link> :
            <button className="w-full md:w-auto px-6 py-2 bg-[#070616] rounded-full font-semibold uppercase hover:bg-red-700 shadow-md transition-all duration-300 active:transform active:scale-95">
              Closed
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default EventCard;