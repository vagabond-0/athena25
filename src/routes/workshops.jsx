import eventsDetails from "../content/events.js"
import Card from "../components/card.jsx"
import CustomH from "../components/customh.jsx"
import EventCard from "../components/EventCard.jsx"
import workshopDetails from "../content/workshops.js"
import { useEffect } from "react";
export default function Workshops() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="w-screen min-h-screen  p-10 ">
      <div className="sm:text-6xl text-5xl p-4">
        <h1  style={{fontFamily:" Retro Signed"}}>Workshop</h1>
      </div>
      <div className="flex flex-col  justify-center gap-10 rounded-lg items-center pl-4 pr-4 ">
        {
          workshopDetails
            .filter((e) => e.isopen) 
            .map((e) => (
              <EventCard key={e.id} event={e} w />
            ))}
       

      </div>
    </div>
  )

}
