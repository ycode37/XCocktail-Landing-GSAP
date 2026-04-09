import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Text = () => {
  useGSAP(() => {
    gsap.set("#text", {
      opacity: 0,
      y: 50,
    });

    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);
  return (
    <div id="text">
      <h1 className="text-6xl font-bold text-center text-white mt-20">
        Text Animation
      </h1>
    </div>
  );
};

export default Text;
