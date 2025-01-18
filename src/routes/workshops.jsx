import eventsDetails from "../content/events.js"
import Card from "../components/card.jsx"
import CustomH from "../components/customh.jsx"
import EventCard from "../components/EventCard.jsx"
import workshopDetails from "../content/workshops.js"
export default function Workshops() {
  return (
    <div className="w-screen min-h-screen bg-[#B81033]  p-10 ">
      <div className="text-6xl">
        <h1  style={{fontFamily:" Retro Signed"}}>Workshop</h1>
      </div>
      <div className="flex flex-col  justify-center gap-10 rounded-lg items-center pl-4 pr-4 ">
        {
        workshopDetails.map((e) => {
            return (
              <EventCard event={e} />
            )

          })
        }

      </div>
    </div>
  )

}
