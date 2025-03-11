import React, { useState, useRef, useLayoutEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../logo.svg";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const headerRef = useRef(null); // Ref for the header element
  const mobileMenuRef = useRef(null); // Ref for the mobile menu dropdown

  // GSAP Animation for Header on Component Mount
  useLayoutEffect(() => {
    // Ensure the header is visible before animating
    gsap.set(headerRef.current, { y: 0, opacity: 1 });

    // Animate the header to bounce in from the top
    gsap.from(headerRef.current, {
      y: -100, // Start from above the viewport
      opacity: 0, // Start invisible
      duration: 1, // Animation duration
      ease: "bounce.out", // Bounce easing
    });
  }, []);

  // GSAP Animation for Mobile Menu Dropdown
  useLayoutEffect(() => {
    if (isOpen) {
      // Animate the mobile menu dropdown to bounce in from the top
      gsap.from(mobileMenuRef.current, {
        y: -100, // Start from above the viewport
        opacity: 0, // Start invisible
        duration: 0.5, // Animation duration
        ease: "bounce.out", // Bounce easing
      });
    }
  }, [isOpen]); // Trigger animation when `isOpen` changes

  return (
    <header
      ref={headerRef} // Attach the ref to the header
      className="absolute top-0 left-0 w-full bg-black bg-opacity-20 px-6 md:px-12 py-4 flex justify-between items-center z-20"
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
        <span className="text-white font-bold text-xl ml-2">Shadient.co</span>
      </div>

      {/* Middle: Navbar (Desktop) */}
      <nav className="hidden md:flex space-x-8 text-white text-base font-medium ml-auto mr-8">
        <a href="#" className="hover:text-gray-300 flex items-center">
          Company <FaChevronDown className="ml-1 text-base" />
        </a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Resources</a>
      </nav>

      {/* Right: Contact Button (Desktop) */}
      <div className="hidden text-base md:block">
        <a
          href="#"
          className="border-2 border-orange-400 text-orange-400 px-4 py-2 rounded-full hover:bg-orange-400 hover:text-black transition"
        >
          CONTACT
        </a>
      </div>

      {/* Mobile Menu Button (Visible only on small screens) */}
      <div className="md:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            position: "relative",
          }}
        >
          {/* Hamburger Icon (Visible when menu is closed) */}
          {!isOpen && (
            <>
              <div
                style={{
                  width: "30px",
                  height: "4px",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  transition: "transform 0.4s ease",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-8px",
                  marginLeft: "-15px",
                }}
              ></div>
              <div
                style={{
                  width: "30px",
                  height: "4px",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  transition: "opacity 0.4s ease",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-15px",
                }}
              ></div>
              <div
                style={{
                  width: "30px",
                  height: "4px",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  transition: "transform 0.4s ease",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "8px",
                  marginLeft: "-15px",
                }}
              ></div>
            </>
          )}

          {/* Cross Icon (Visible when menu is open) */}
          {isOpen && (
            <>
              <div
                style={{
                  width: "30px",
                  height: "4px",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  transition: "transform 0.4s ease",
                  transform: "rotate(45deg)",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "0",
                  marginLeft: "-15px",
                }}
              ></div>
              <div
                style={{
                  width: "30px",
                  height: "4px",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  transition: "transform 0.4s ease",
                  transform: "rotate(-45deg)",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "0",
                  marginLeft: "-15px",
                }}
              ></div>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div
          ref={mobileMenuRef} // Attach the ref to the mobile menu dropdown
          className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white p-6 flex flex-col items-center space-y-4 md:hidden"
        >
          <a href="#" className="hover:text-gray-300 flex items-center">
            Company <FaChevronDown className="ml-1" />
          </a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Resources</a>
          <a href="#" className="border-2 border-orange-400 text-orange-400 px-4 py-2 rounded-full hover:bg-orange-400 hover:text-black">
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;