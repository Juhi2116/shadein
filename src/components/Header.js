import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "../logo.svg";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const headerRef = useRef(null); // Ref for the header element
  const mobileMenuRef = useRef(null); // Ref for the mobile menu dropdown
  const navItemRefs = useRef([]); // Refs for nav items to animate

  // Clear and set the refs array
  const setNavItemRef = (el, index) => {
    navItemRefs.current[index] = el;
  };

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

  // GSAP Animation for Mobile Menu Dropdown on Hamburger Click
  useLayoutEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      // Animate the mobile menu dropdown to bounce in from the top
      gsap.from(mobileMenuRef.current, {
        y: -100, // Start from above the viewport
        opacity: 0, // Start invisible
        duration: 0.8, // Animation duration
        ease: "bounce.out", // Bounce easing
      });
    }
  }, [isOpen]); // Trigger animation when `isOpen` changes

  // Set up hover animations for nav items
  useEffect(() => {
    navItemRefs.current.forEach((item) => {
      if (!item) return;

      // Create hover animation
      item.addEventListener("mouseenter", () => {
        gsap.fromTo(
          item,
          { y: 0, color: "white" },
          {
            y: [0, -10, 0], // Bounce up and back down
            color: "#FB923C", // orange-400
            duration: 0.5,
            ease: "back.out(1.7)", // Nice bouncy effect
          }
        );
      });

      // Reset on mouse leave
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          color: "white",
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      ref={headerRef}
      className="absolute top-0 left-0 w-full bg-black bg-opacity-20 px-6 md:px-12 py-4 flex justify-between items-center z-20"
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
        <span className="text-white font-bold text-xl ml-2">Shadient.co</span>
      </div>

      {/* Middle: Navbar (Desktop) */}
      <nav className="hidden md:flex space-x-8 text-white text-base font-medium ml-auto mr-8">
        {/* Company Link */}
        <a
          href="#"
          className="flex items-center"
          ref={(el) => setNavItemRef(el, 0)}
        >
          Company <FaChevronDown className="ml-1 text-base" />
        </a>

        {/* Services Link */}
        <a href="#" ref={(el) => setNavItemRef(el, 1)}>
          Services
        </a>

        {/* Resources Link */}
        <a href="#" ref={(el) => setNavItemRef(el, 2)}>
          Resources
        </a>
      </nav>

      {/* Right: Contact Button (Desktop) */}
      <div className="hidden text-base md:block">
        <a
          href="#"
          className="border-2 border-orange-400 text-orange-400 px-4 py-2 rounded-full hover:bg-orange-400 hover:text-black transition-all duration-300"
        >
          CONTACT
        </a>
      </div>

      {/* Mobile Menu Button with Animation */}
      <button
        className="md:hidden w-8 h-8 flex items-center justify-center focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 h-6 relative flex justify-center items-center">
          {/* Top bar */}
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "translate-y-[-6px]"
            }`}
          ></span>

          {/* Middle bar */}
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition-all duration-200 ease-in-out ${
              isOpen ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          ></span>

          {/* Bottom bar */}
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-[6px]"
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white p-6 flex flex-col items-center space-y-4 md:hidden"
        >
          <a href="#" className="flex items-center">
            Company <FaChevronDown className="ml-1" />
          </a>
          <a
            href="#"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Resources
          </a>
          <a
            href="#"
            className="border-2 border-orange-400 text-orange-400 px-4 py-2 rounded-full hover:bg-orange-400 hover:text-black transition-all duration-300"
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;