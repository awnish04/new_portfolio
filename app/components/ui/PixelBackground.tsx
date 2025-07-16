"use client";

import { motion } from "framer-motion";

const gridSize = 10; // 10x10 pixel squares
const pixelCount = gridSize * gridSize;

export default function PixelBackground() {
  const pixels = Array.from({ length: pixelCount });

  return (
    <div className="absolute inset-0 z-0 grid grid-cols-10 grid-rows-10 w-full h-full">
      {pixels.map((_, i) => (
        <motion.div
          key={i}
          className="w-full h-full bg-white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            delay: (i % gridSize) * 0.05 + Math.floor(i / gridSize) * 0.05,
            duration: 0.7,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { useMemo } from "react";

// const gridSize = 12; // 12x12 = 144 squares
// const pixelCount = gridSize * gridSize;

// export default function PixelBackground() {
//   const pixels = useMemo(() => Array.from({ length: pixelCount }), []);

//   return (
//     <div
//       className="absolute inset-0 z-0 pointer-events-none grid"
//       style={{
//         gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
//         gridTemplateRows: `repeat(${gridSize}, 1fr)`,
//       }}
//     >
//       {pixels.map((_, i) => (
//         <motion.div
//           key={i}
//           className="bg-white"
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{
//             scale: 0,
//             opacity: 0,
//             transition: { duration: 1.5, ease: "easeInOut" },
//           }}
//           transition={{
//             delay: Math.random() * 1,
//             duration: 0.5,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </div>
//   );
// }
