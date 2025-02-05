import eventsDetails from "../content/events.js";
import EventCard from "../components/EventCard.jsx";
import { useEffect } from "react";

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen min-h-screen p-10">
      <div className="text-6xl">
        <h1 style={{ fontFamily: "Retro Signed" }}>Events</h1>
      </div>
      <div className="flex flex-col justify-center gap-10 rounded-lg items-center pl-4 pr-4">
        {eventsDetails
          .filter((e) => e.isopen) 
          .map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
      </div>
    </div>
  );
}
