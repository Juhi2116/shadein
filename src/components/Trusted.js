import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TrustedCompanies() {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);
  
  const companies = [
    { name: "Logoipsum", logo: "🔷" },
    { name: "Offmax", logo: "📶" },
    { name: "Offmax", logo: "🌊" },
    { name: "Offmax", logo: "🔷" },
    { name: "Logoipsum", logo: "⚫" },
    { name: "Logoipsum", logo: "🟡" },
    { name: "Logoipsum", logo: "🤖" },
    { name: "Offmax", logo: "🔹" },
    { name: "Offmax", logo: "⚡" },
    { name: "Logoipsum", logo: "🔲" },
    { name: "Logoipsum", logo: "⚫" },
    { name: "Logoipsum", logo: "🔵" },
  ];

  // Double the logos to create a seamless loop
  const allCompanies = [...companies, ...companies];

  useEffect(() => {
    const topSlider = topSliderRef.current;
    const bottomSlider = bottomSliderRef.current;
    
    const logoWidth = topSlider.scrollWidth / 2;
    
    // Create the infinite loop animation for top slider (moving right)
    const topAnimation = gsap.timeline({ repeat: -1 });
    topAnimation.set(topSlider, { x: 0 });
    topAnimation.to(topSlider, {
      x: -logoWidth,
      duration: 20,
      ease: "linear"
    });
    topAnimation.call(() => {
      gsap.set(topSlider, { x: 0 });
    });
    
    // Create the infinite loop animation for bottom slider (moving left)
    const bottomAnimation = gsap.timeline({ repeat: -1 });
    bottomAnimation.set(bottomSlider, { x: -logoWidth });
    bottomAnimation.to(bottomSlider, {
      x: 0,
      duration: 15, // Slightly faster
      ease: "linear"
    });
    bottomAnimation.call(() => {
      gsap.set(bottomSlider, { x: -logoWidth });
    });

    return () => {
      topAnimation.kill();
      bottomAnimation.kill();
    };
  }, []);

  return (
    <div className="bg-black text-white py-16 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
  <h2 className="text-[40px] font-bold w-full md:w-1/2">
    Trusted by 200+ companies around the world
  </h2>
  <p className="text-gray-400 text-[16px] font-normal w-full md:w-1/2">
    Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget.
    Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
  </p>
</div>


      
      {/* Top logo slider container - moving right */}
      <div className="overflow-hidden relative mb-6">
        <div 
          ref={topSliderRef} 
          className="flex gap-8 items-center"
          style={{ width: "fit-content" }}
        >
          {allCompanies.map((company, index) => (
            <div 
              key={`top-${index}`} 
              className="flex items-center justify-center border border-gray-700 rounded-lg p-5 w-52 h-20 flex-shrink-0"
            >
              <span className="text-3xl mr-3">{company.logo}</span>
              <span className="text-white font-semibold">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom logo slider container - moving left */}
      <div className="overflow-hidden relative">
        <div 
          ref={bottomSliderRef} 
          className="flex gap-8 items-center"
          style={{ width: "fit-content" }}
        >
          {allCompanies.map((company, index) => (
            <div 
              key={`bottom-${index}`} 
              className="flex items-center justify-center border border-gray-700 rounded-lg p-5 w-52 h-20 flex-shrink-0"
            >
              <span className="text-3xl mr-3">{company.logo}</span>
              <span className="text-white font-semibold">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}