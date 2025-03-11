import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "./Header"; // Import Header

export default function Hero() {
  const buttonRef = useRef(null);
  const buttonRef2 = useRef(null);
  const gradientRef = useRef(null);
  const h1Ref = useRef(null); // Ref for h1
  const pRef = useRef(null); // Ref for p
  const formContainerRef = useRef(null); // Ref for the form container div

  const handleHover = () => {
    gsap.to(buttonRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.fromTo(
      buttonRef2.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  };

  useEffect(() => {
    // Animate the gradient overlay from the center to its current position
    gsap.fromTo(
      gradientRef.current,
      {
        background: `
          radial-gradient(circle at 50% 50%, rgba(239, 147, 100, 0.8) 0%, rgba(239, 147, 100, 0.5) 10%, rgba(239, 147, 100, 0.2) 20%, rgba(239, 147, 100, 0) 25%), 
          radial-gradient(circle at 50% 50%, rgba(139, 123, 207, 0.8) 0%, rgba(139, 123, 207, 0.5) 10%, rgba(139, 123, 207, 0.2) 20%, rgba(139, 123, 207, 0) 25%)
        `,
      },
      {
        background: `
          radial-gradient(circle at 0% 100%, rgba(239, 147, 100, 0.8) 0%, rgba(239, 147, 100, 0.5) 10%, rgba(239, 147, 100, 0.2) 20%, rgba(239, 147, 100, 0) 25%), 
          radial-gradient(circle at 100% 0%, rgba(139, 123, 207, 0.8) 0%, rgba(139, 123, 207, 0.5) 10%, rgba(139, 123, 207, 0.2) 20%, rgba(139, 123, 207, 0) 25%)
        `,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // Diagonal fade-up animation with rotation for h1
    gsap.fromTo(
      h1Ref.current,
      { x: -100, y: 100, opacity: 0, rotation: -15 }, // Start from bottom-left corner with rotation
      { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    // Diagonal fade-up animation with rotation for p
    gsap.fromTo(
      pRef.current,
      { x: -100, y: 100, opacity: 0, rotation: -15 }, // Start from bottom-left corner with rotation
      { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out", delay: 0.8 }
    );

    // Bounce-in animation for the form container div
    gsap.fromTo(
      formContainerRef.current, // Target the form container div
      { y: 100, opacity: 0 }, // Start from bottom
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out", // Use bounce easing for a playful effect
        delay: 1.5, // Start after h1 and p animations
      }
    );
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#110F0F",
        backgroundImage: "url('../hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🟢 Add Header Inside Hero */}
      <Header />

      {/* Gradient overlay */}
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 0% 100%, rgba(239, 147, 100, 0.8) 0%, rgba(239, 147, 100, 0.5) 10%, rgba(239, 147, 100, 0.2) 20%, rgba(239, 147, 100, 0) 25%), 
            radial-gradient(circle at 100% 0%, rgba(139, 123, 207, 0.8) 0%, rgba(139, 123, 207, 0.5) 10%, rgba(139, 123, 207, 0.2) 20%, rgba(139, 123, 207, 0) 25%)
          `,
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="text-white relative z-10 px-6 md:px-0 max-w-4xl mx-auto mt-16">
        <h1
          ref={h1Ref}
          className="text-5xl md:text-8xl text-center md:text-left font-bold leading-none"
        >
          Attract <br />
          <span className="bg-gradient-to-r from-[#EF9364] via-yellow-500 to-cyan-400 text-transparent bg-clip-text">
            NewLeads
          </span>
          <br /> like never <br /> before
        </h1>

        <p
          ref={pRef}
          className="text-base text-gray-400 mt-4 text-center md:text-left"
        >
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta{" "}
          <br className="hidden md:block" />
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros.
        </p>

        {/* Email Input & Button Container */}
        <div
          ref={formContainerRef} // Ref for the form container div
          className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full md:w-[447px] mx-auto md:mx-0"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full md:flex-1 h-14 px-4 bg-black border-2 border-gray-500 text-white rounded-full outline-none focus:ring-2 focus:ring-yellow-400 text-center md:text-left"
          />
          <button
            className="w-full md:w-auto h-14 px-6 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition font-bold text-base mt-3 md:mt-0 relative overflow-hidden"
            onMouseEnter={handleHover}
          >
            <span ref={buttonRef} className="block transform translate-y-0 opacity-100">
              ATTRACT
            </span>
            <span
              ref={buttonRef2}
              className="block transform translate-y-full opacity-0 absolute top-0 left-0 w-full h-full flex items-center justify-center"
            >
              ATTRACT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}