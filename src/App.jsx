
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Home from "./routes/home.jsx"
import Footer from "./components/footer.jsx"
import EventPage from "./routes/event.jsx"
import NavBar from "./components/navbar.jsx"
import Events from "./routes/events.jsx"
import Workshops from "./routes/workshops.jsx";
import Schedule from "./routes/schedule.jsx"
import Details from "./routes/details.jsx"
import WorkshopPage from "./routes/workshop.jsx"
import DelegatePass from "./routes/delegatepass.jsx"
import TallkShowPage from "./routes/talkshow.jsx"
import Accommodation from "./routes/accommodation.jsx"

export default function App() {
  return(
    <div className="bg-black text-white min-h-screen" style={{
      background: "linear-gradient(90deg, #003f5b 0%, #2b4b7d 14.28%,  #5f5195 28.57%,  #98509d 42.85%,  #cc4c91 57.14%,  #f25375 71.42%,  #ff6f4e 85.71%,  #ff9913 100% )"   
    }}>
      <BrowserRouter>
        <NavBar/>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/event/:eventid" element={<EventPage/>}/>
          <Route path="/workshop/:eventid" element={<WorkshopPage/>}/>
          <Route path="/talkshow/:eventid" element={<TallkShowPage/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/workshops" element={<Workshops/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/delegatepass" element={<DelegatePass/>}/>
          <Route path="/accommodation" element={<Accommodation/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
