
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
import Talkshows from "./routes/Talkshows.jsx"
import Informals from "./routes/Informals.jsx"
import InformalPage from "./routes/InformalPage.jsx"

export default function App() {
  return(
    <div className="bg-black text-white min-h-screen" style={{
      background: "#080616"   
    }}>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/event/:eventid" element={<EventPage/>}/>
          <Route path="/workshop/:eventid" element={<WorkshopPage/>}/>
          <Route path="/talkshow/:eventid" element={<TallkShowPage/>}/>
          <Route path="/informals/:eventid" element={<InformalPage />}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/workshops" element={<Workshops/>}/>
          <Route path="/talkshows" element={<Talkshows />} />
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/delegatepass" element={<DelegatePass/>}/>
          <Route path="/accommodation" element={<Accommodation/>}/>
          <Route path="/informals" element={<Informals />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
