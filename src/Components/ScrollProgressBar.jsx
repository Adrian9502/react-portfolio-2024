import React, { useEffect, useState } from "react";
const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / windowHeight) * 100;

    // Update the scroll width
    setScrollWidth(scrollPercent);
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-40 bottom-0 left-0 rounded-br-lg rounded-tr-lg h-14 bg-[#000319] mb-2 transition-all duration-200 ease-out`} // Increased duration for smoother transition
      style={{
        width: `${scrollWidth}%`,
      }}
    >
      <div
        className={`fixed z-50 bottom-0 left-0 h-2 rounded-full bg-slate-600 shadow-sm shadow-custom-cyan mb-1 transition-all duration-200 ease-out`} // Increased duration for smoother transition
        style={{
          width: `${scrollWidth}%`,
        }}
      ></div>
      <img
        src="https://c0.piktochart.com/v2/uploads/610d4fbe-cf12-4782-b39b-6290f14a4bd7/9a869b60479bd37225ef310b5635d7bc7e43af22_original.gif?1600761787"
        alt=""
        className="h-14 pointer-events-none"
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          zIndex: 1001,
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
