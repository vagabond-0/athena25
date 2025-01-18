
import athenalogo from "../assets/ISTE original logo black 1 (2).png"
import istelogo from "../assets/ISTE original logo black 1(2).png"
import ig from "../assets/ig.png"
import x from "../assets/x new(1).jpg"
import linkedin from "../assets/linked.png"
const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-gradient-to-r from-red-600 to-red-700 p-4 relative overflow-hidden">
    
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-8 bg-yellow-400 transform rotate-45 -translate-y-4 mx-2"></div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-white text-center mb-6 mt-4 font-carnival">Contact Us</h2>

      <div className="container p-2 h-full w-full grid grid-cols-4 items-center">
        
        <div className="p-2">
          <div className=" p-2 rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <img className="md:w-44 md:h-full" src={athenalogo} alt="Athena Logo" />
          </div>
        </div>

        {/* Center Content */}
        <div className="col-span-2 text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/iste_tkmce_/" className="transform hover:scale-110 transition-transform duration-300">
              <button className="p-3 rounded-full hover:bg-yellow-400 transition-colors duration-300">
                <img className="w-10 h-10" src={ig} alt="Instagram" />
              </button>
            </a>
            <a href="#" className="transform hover:scale-110 transition-transform duration-300">
              <button className="p-3 rounded-full  hover:bg-yellow-400 transition-colors duration-300">
                <img className="w-10 h-10" src={x} alt="X" />
              </button>
            </a>
            <a href="https://www.linkedin.com/company/istetkmce" className="transform hover:scale-110 transition-transform duration-300">
              <button className="p-3 rounded-full  hover:bg-yellow-400 transition-colors duration-300">
                <img className="w-10 h-10" src={linkedin} alt="LinkedIn" />
              </button>
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              ["Terms Of Use", "/details"],
              ["Privacy Policy", "/details"],
              ["Copyrights", "#"],
              ["About Athena", "#"],
              ["Get Help", "#"],
              ["Address", "#"]
            ].map(([text, link], index) => (
              <a 
                key={index} 
                href={link}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Right Logo */}
        <div className="p-2">
          <div className=" p-2 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 float-right">
            <img className="md:w-48 md:h-full" src={istelogo} alt="ISTE Logo" />
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-8 bg-yellow-400 transform rotate-45 translate-y-4 mx-2"></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;