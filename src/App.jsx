// import React from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import Stagger from "./Stagger";
// import Scroll from "./Scroll";
// import Text from "./Text";

// const App = () => {
//   const timeLine = gsap.timeline({
//     repeat: -1,
//     yoyo: true,
//   });
//   useGSAP(() => {
//     gsap.to("#blue-box", {
//       x: 250,
//       repeat: -1,
//       yoyo: true,
//       rotation: 360,
//       duration: 3,
//       // ease: "elastic",
//     });
//   }, []);

//   useGSAP(() => {
//     gsap.from("#red-box", {
//       x: 250,
//       repeat: -1,
//       yoyo: true,
//       rotation: 360,
//       duration: 3,
//       // ease: "elastic",
//     });
//   });

//   useGSAP(() => {
//     gsap.fromTo(
//       "#violet-box",
//       {
//         x: 0,
//         rotation: 0,
//         borderRadius: "0%",
//       },
//       {
//         x: 450,
//         rotation: 360,
//         borderRadius: "100%",
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         duration: 2,
//       },
//     );
//   });

//   useGSAP(() => {
//     {
//       timeLine.to("#magenta-box", {
//         x: 250,
//         rotation: 360,
//         duration: 3,
//       });

//       timeLine.to("#magenta-box", {
//         y: 250,
//         duration: 3,
//         rotation: 360,
//       });

//       timeLine.to("#magenta-box", {
//         x: 500,
//         borderRadius: "0%",
//         rotation: 360,
//       });
//     }
//   });

//   return (
//     <div>
//       <Text />
//       <div
//         id="blue-box"
//         className="mt-10 w-64 h-64 bg-gradient-to-br from-indigo-500 via-blue-600 to-blue-800 rounded-3xl shadow-2xl flex items-center justify-center text-white font-medium text-lg backdrop-blur-sm border border-white/20"
//       ></div>
//       <div
//         id="red-box"
//         className="mt-10 w-64 h-64 bg-gradient-to-br from-green-500 via-red-600 to-yellow-800 rounded-3xl shadow-2xl flex items-center justify-center text-white font-medium text-lg backdrop-blur-sm border border-white/20"
//       ></div>
//       <div
//         id="violet-box"
//         className="mt-10 w-64 h-64 bg-gradient-to-br from-violet-500 via-white-600 to-indigo-800 rounded-3xl shadow-2xl flex items-center justify-center text-white font-medium text-lg backdrop-blur-sm border border-white/20"
//       ></div>
//       <button
//         className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium rounded-lg shadow-md transition-all duration-200"
//         onClick={() => {
//           timeLine.paused() ? timeLine.play() : timeLine.pause();
//         }}
//       >
//         <span className="text-sm">Play / Pause</span>
//       </button>
//       <div
//         id="magenta-box"
//         className="mt-10 w-64 h-64 bg-gradient-to-br from-red-500 via-white-600 to-indigo-800 rounded-3xl shadow-2xl flex items-center justify-center text-white font-medium text-lg backdrop-blur-sm border border-white/20"
//       ></div>
//       <Stagger />
//       <Scroll />
//     </div>
//   );
// };

// export default App;

import React from "react";

import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh"></div>
    </main>
  );
};

export default App;
