"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CodingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const line1Clip = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);
  const line2Clip = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);
  const line3Clip = useTransform(scrollYProgress, [0.6, 0.8], ["0%", "100%"]);

  const line1ClipPath = useTransform(line1Clip, (v) => {
    const percent = parseFloat(v);
    return `inset(0% ${100 - percent}% 0% 0%)`;
  });
  const line2ClipPath = useTransform(line2Clip, (v) => {
    const percent = parseFloat(v);
    return `inset(0% ${100 - percent}% 0% 0%)`;
  });
  const line3ClipPath = useTransform(line3Clip, (v) => {
    const percent = parseFloat(v);
    return `inset(0% ${100 - percent}% 0% 0%)`;
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen red-gradient flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      

      <div
        className="flex flex-col justify-around items-stretch flex-wrap md:flex-nowrap pt-[200px] pb-[250px] pl-[10px] pr-[80px] z-[2]"
        style={{
          flexGrow: "0",
          alignSelf: "initial",
          width: "calc((1 - var(--container-widget-flex-grow)) * 100%)",
          height: "initial",
        }}
      >
        {/* Line 1 */}
        <div className="relative inline-block mb-10">
          <h1 className="text-6xl lg:text-[100px] font-black leading-none text-[#1f2937]">
            CODING IS LIKE BETTING
          </h1>
          <motion.h1
            className="text-6xl lg:text-[100px] font-black leading-none text-white absolute top-0 left-0"
            style={{ clipPath: line1ClipPath }}
          >
            CODING IS LIKE BETTING
          </motion.h1>
        </div>

        {/* Line 2 */}
        <div className="relative inline-block mb-10">
          <h1 className="text-6xl lg:text-[100px] font-black leading-none text-[#1f2937]">
            YOU KEEP PLAYING UNTIL
          </h1>
          <motion.h1
            className="text-6xl lg:text-[100px] font-black leading-none text-white absolute top-0 left-0"
            style={{ clipPath: line2ClipPath }}
          >
            YOU KEEP PLAYING UNTIL
          </motion.h1>
        </div>

        {/* Line 3 */}
        <div className="relative inline-block mb-10">
          <h1 className="text-6xl lg:text-[100px] font-black leading-none text-[#1f2937]">
            YOU WIN OR LOSE !
          </h1>
          <motion.h1
            className="text-6xl lg:text-[100px] font-black leading-none text-white absolute top-0 left-0"
            style={{ clipPath: line3ClipPath }}
          >
            YOU WIN OR LOSE !
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
