import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";


export default function Hero() {
  const buttonRef = useRef(null); // Ref for the button
  const gradientRef = useRef(null);
  const h1Ref = useRef(null); // Ref for h1
  const pRef = useRef(null); // Ref for p
  const formContainerRef = useRef(null); // Ref for the form container div

  // Function to handle hover effect on the button
  const handleHover = () => {
    // Split the button text into characters
    const splitText = new SplitType(buttonRef.current, {
      types: "chars", // Split into characters
      tagName: "span", // Wrap each character in a <span>
    });

    // Animate characters on hover
    gsap.fromTo(
      splitText.chars,
      {
        y: "100%", // Start characters below
        opacity: 0, // Start invisible
      },
      {
        y: "0%", // Move characters to original position
        opacity: 1, // Fade in
        duration: 0.5, // Animation duration
        ease: "elastic.out(1, 0.5)", // Elastic easing
        stagger: 0.1, // Delay between each character
      }
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

    // Split h1 and p text into words
    const splitH1 = new SplitType(h1Ref.current, { types: "words", tagName: "span" });
    const splitP = new SplitType(pRef.current, { types: "words", tagName: "span" });

    // Animate h1 words on page load
    gsap.from(splitH1.words, {
      y: "100%",
      opacity: 0,
      duration: 0.3,
      ease: "circ.out",
      stagger: 0.1,
      delay: 0.5, // Delay before starting the animation
    });

    // Animate p words on page load
    gsap.from(splitP.words, {
      y: "100%",
      opacity: 0,
      duration: 0.3,
      ease: "circ.out",
      stagger: 0.1,
      delay: 1, // Delay before starting the animation
    });

    // Handle the gradient text for "NewLeads"
    const newLeadsSpan = h1Ref.current.querySelector(".gradient-text");
    if (newLeadsSpan) {
      const splitNewLeads = new SplitType(newLeadsSpan, { types: "chars", tagName: "span" });

      // Apply gradient to each character
      splitNewLeads.chars.forEach((char) => {
        char.style.backgroundImage = "linear-gradient(to right, #EF9364, yellow, cyan)";
        char.style.webkitBackgroundClip = "text";
        char.style.backgroundClip = "text";
        char.style.color = "transparent";
      });

      // Animate characters of "NewLeads"
      gsap.from(splitNewLeads.chars, {
        y: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "circ.out",
        stagger: 0.1,
        delay: 0.5, // Match the delay of h1 animation
      });
    }

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
      >  <p
         
      className="text-xl bg-red-500 text-gray-400 mt-4 text-center md:text-left"
    >
     Option-2 for hero section- working on gradient of "NewLeads"
  -section is only for testing purpose
    </p></div>
      

      {/* Content */}
      <div className="text-white relative z-10 px-6 md:px-0 max-w-4xl mx-auto mt-16">
  
        <h1
          ref={h1Ref}
          className="text-5xl md:text-8xl text-center md:text-left font-bold leading-none"
        >
          Attract <br />
          <span className="gradient-text bg-gradient-to-r from-[#EF9364] via-yellow-500 to-cyan-400 text-transparent bg-clip-text">
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
            ref={buttonRef} // Ref for the button
            className="w-full md:w-auto h-14 px-6 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition font-bold text-base mt-3 md:mt-0 relative overflow-hidden"
            onMouseEnter={handleHover} // Trigger hover animation
          >
            ATTRACT
          </button>
        </div>
      </div>
    </div>
  );
}