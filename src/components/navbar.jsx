import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleBlur = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId, route = "/") => {
    closeNavbar();

    // If navigating to a different route
    if (location.pathname !== route) {
      navigate(`${route}#${sectionId}`);
      return;
    }

    // Scroll to the section if already on the target route
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle initial scroll when coming from another page
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="relative z-[100]">
      <button
        onClick={toggleBlur}
        className="fixed top-4 left-4 z-50 p-3 rounded-full shadow-lg bg-transparent focus:outline-none hover:scale-110 transition-transform"
      >
        🎪
      </button>

      <div
        className={`fixed inset-0 flex items-center justify-center transition-all duration-500 ${
          isOpen
            ? "backdrop-blur-md bg-black/50 pointer-events-auto"
            : "backdrop-blur-none bg-transparent pointer-events-none"
        }`}
        onClick={closeNavbar}
      >
        {isOpen && (
          <div
            className="text-center space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => scrollToSection("", "/")}
                className="block w-full text-white text-xl md:text-2xl bg-gradient-to-r from-purple-400 to-blue-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Home
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <button
                onClick={() => scrollToSection("", "/aboutathena")}
                className="block w-full text-white text-xl md:text-2xl bg-gradient-to-r from-green-400 to-teal-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                About
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={() => scrollToSection("", "/events")}
                className="block w-full text-white text-xl md:text-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Events
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => scrollToSection("", "/workshops")}
                className="block w-full text-white text-xl md:text-2xl bg-gradient-to-r from-pink-400 to-red-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Workshops
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={() => scrollToSection("", "/talkshows")}
                className="block w-full text-white text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-indigo-500 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Talkshows
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
