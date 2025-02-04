import athenalogo from "../assets/ISTE original logo black 1 (2).png";
import istelogo from "../assets/ISTE original logo black 1(2).png";
import ig from "../assets/ig.png";
import x from "../assets/x new(1).jpg";
import linkedin from "../assets/linked.png";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full p-4 relative overflow-hidden bg-red-900">
      
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-8 bg-yellow-400 transform rotate-45 -translate-y-4 mx-2"></div>
        ))}
      </div>

      
      <h2 className="text-3xl font-bold text-white text-center mb-6 mt-4 font-carnival">
        Contact Us
      </h2>

      
      <div className="container p-2 w-full grid grid-cols-1 md:grid-cols-4 items-center gap-6 md:gap-40">
       
        <div className="p-2 flex justify-center md:justify-start">
          <div className="p-2 pl-5 rounded-lg transform -rotate-0 hover:rotate-2 transition-transform duration-300">
            <img
              className="w-32 md:w-44 h-auto"
              src={athenalogo}
              alt="Athena Logo"
            />
          </div>
        </div>

        
        <div className="col-span-2 text-center">
          
          <div className="flex justify-center gap-4 flex-wrap mb-6">
            <a
              href="https://www.instagram.com/iste_tkmce_/"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <button className="p-3 rounded-full hover:bg-yellow-400 transition-colors duration-300">
                <img className="w-8 md:w-10 h-8 md:h-10" src={ig} alt="Instagram" />
              </button>
            </a>
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <button className="p-3 rounded-full hover:bg-yellow-400 transition-colors duration-300">
                <img className="w-8 md:w-10 h-8 md:h-10" src={x} alt="X" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/company/istetkmce"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <button className="p-3 rounded-full hover:bg-yellow-400 transition-colors duration-300">
                <img
                  className="w-8 md:w-10 h-8 md:h-10"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </button>
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              ["Terms Of Use", "/details"],
              ["Privacy Policy", "/details"],
              ["Copyrights", "#"],
              ["About Athena", "#"],
              ["Get Help", "#"],
              ["Address", "#"],
            ].map(([text, link], index) => (
              <a
                key={index}
                href={link}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm md:text-base font-medium"
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Right Logo */}
        <div className="p-2 flex justify-center md:justify-end">
          <div className="p-2 pl-5 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <img
                      src={istelogo}
                      alt="ISTE Logo"
                      className="w-36 md:w-48 h-auto"
                      style={{
                        animation: "spin-slow 50s linear infinite",
                        zIndex: 1,
                        height: 'auto',
                        
                      }}
                    />
                    <style jsx>{`
                      @keyframes spin-slow {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                    `}</style>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-8 bg-yellow-400 transform rotate-45 translate-y-4 mx-2"></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;