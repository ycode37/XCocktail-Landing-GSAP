import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Stagger = () => {
  const GsapStagger = useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 650,

      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: "1.5",
        from: "center",
      },
    });
  });
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {/* Card 1 - Full Strength */}
        <div className="h-32 rounded-xl bg-indigo-600 shadow-lg flex items-center justify-center text-white font-bold transition-transform hover:scale-105 stagger-box">
          01
        </div>

        {/* Card 2 - 90% Opacity */}
        <div className="h-32 rounded-xl bg-indigo-600/90 shadow-md flex items-center justify-center text-white/90 font-bold transition-transform hover:scale-105 stagger-box">
          02
        </div>

        {/* Card 3 - 80% Opacity */}
        <div className="h-32 rounded-xl bg-indigo-600/80 shadow-md flex items-center justify-center text-white/80 font-bold transition-transform hover:scale-105 stagger-box">
          03
        </div>

        {/* Card 4 - 70% Opacity */}
        <div className="h-32 rounded-xl bg-indigo-600/70 shadow-sm flex items-center justify-center text-white/70 font-bold transition-transform hover:scale-105 stagger-box">
          04
        </div>

        {/* Card 5 - 60% Opacity */}
        <div className="h-32 rounded-xl bg-indigo-600/60 flex items-center justify-center text-white/60 font-bold transition-transform hover:scale-105 stagger-box">
          05
        </div>

        {/* Card 6 - 50% Opacity */}
        <div className="h-32 rounded-xl bg-indigo-600/50 flex items-center justify-center text-white/50 font-bold transition-transform hover:scale-105 stagger-box">
          06
        </div>

        {/* Card 7 - 40% Opacity */}
        <div className="h-32 rounded-xl bg-indigo-600/40 flex items-center justify-center text-white/40 font-bold transition-transform hover:scale-105 stagger-box">
          07
        </div>

        {/* Card 8 - 30% Opacity */}
        <div className="h-32 rounded-xl bg-indigo-600/30 flex items-center justify-center text-white/30 font-bold transition-transform hover:scale-105 stagger-box">
          08
        </div>
      </div>
    </div>
  );
};

export default Stagger;
