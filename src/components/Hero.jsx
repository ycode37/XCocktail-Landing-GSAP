import { useGSAP } from "@gsap/react";
import React from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars , words",
    });
    const paraSplit = new SplitText(".subtitle", { type: "lines" }, []);

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });
    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to(".right-leaf", {
        x: 100,
        y: 100,
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        ".left-leaf",
        {
          x: -100,
          y: 100,
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });
  return (
    <section id="hero" className="noisy">
      <h1 className="title">Saké</h1>
      <img src="/images/hero-left-leaf.png" alt="" className="left-leaf" />
      <img src="/images/hero-right-leaf.png" alt="" className="right-leaf" />
      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>The Perfect Blend</p>
            <p className="subtitle">
              Sip The Spirit <br /> of Summer
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Every Cocktail Tells a Story about its Origin , Ingredients and
              the People Behind It
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
