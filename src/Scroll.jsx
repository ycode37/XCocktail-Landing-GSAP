import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const scrollRef = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 30%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef },
  );
  return (
    <div ref={scrollRef} className="h-[200vh]">
      <div className="mt-10 w-64 h-64 bg-gradient-to-br from-indigo-500 via-blue-600 to-blue-800 rounded-3xl shadow-2xl flex items-center justify-center text-white font-medium text-lg backdrop-blur-sm border border-white/20"></div>
      <div className="mt-10 w-64 h-64 bg-gradient-to-br from-green-500 via-red-600 to-yellow-800 rounded-3xl shadow-2xl flex items-center justify-center text-white font-medium text-lg backdrop-blur-sm border border-white/20"></div>
    </div>
  );
};

export default Scroll;
