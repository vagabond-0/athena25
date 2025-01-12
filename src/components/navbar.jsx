import { Link } from "react-router-dom"
export default function NavBar() {
  return(
  <div className="z-50 grid place-items-center grid-cols-3 py-10 md:mx-[30vw] font-primary text-2xl relative" >
      <Link to="/" >Home</Link>
      <Link to="/events">Events</Link>
      <Link to="/workshops">Workshops</Link>
    </div>
  )
}
