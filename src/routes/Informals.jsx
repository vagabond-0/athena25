import {React,useEffect} from 'react'
import talkshowDetails from '../content/talkshow'
import EventCard from '../components/EventCard'

const Informals = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <div className="w-screen min-h-screen  p-10 ">
      <div className="text-6xl">
        <h1 style={{fontFamily:" Retro Signed"}}>Informals</h1>
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

export default Informals