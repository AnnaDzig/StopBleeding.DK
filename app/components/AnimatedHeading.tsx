"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
}

export default function AnimatedHeading({ text }: AnimatedHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Red Line */}
      <motion.div
        className="w-16 h-1 bg-red-500"
        initial={{ x: "-100%", width: 0 }}
        animate={{ x: 0, width: "4rem" }}
        transition={{ duration: 1, ease: "easeOut" }}
        // initial={{ x: "-100%", opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-800 font-poppins"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        {text}
      </motion.h2>
    </div>
  );
}
