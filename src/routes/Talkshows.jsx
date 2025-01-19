import React from 'react'
import talkshowDetails from '../content/talkshow'
import EventCard from '../components/EventCard'

const Talkshows = () => {
  return (
    <div className="w-screen min-h-screen bg-[#B81033]  p-10 ">
      <div className="text-6xl">
        <h1 style={{fontFamily:" Retro Signed"}}>Talk Show</h1>
      </div>
      <div className="flex flex-col  justify-center gap-10 rounded-lg items-center pl-4 pr-4 ">
        {
          talkshowDetails.map((e) => {
            return (
              <EventCard event={e} t />
            )

          })
        }

      </div>
    </div>
  )
}

export default Talkshows