import React from "react";
import { motion } from "framer-motion";
type Props = {};

function BackgroundSquares({}: Props) {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative flex justify-center items-center h-screen"
      >
        <div className="rounded-full border border-[#333333] h-[200px] w-[200px] animate-ping absolute" />
        <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute " />
        <div className="rounded-full border border-[#333333] h-[500px] w-[500px]  absolute" />
        <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] animate-pulse absolute" />
        <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute" />
      </motion.div>
    </div>
  );
}

export default BackgroundSquares;
