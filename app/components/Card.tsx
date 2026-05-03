"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  text: string;
  icon: ReactNode;
  background?: string; // Optional: Set custom background color
}

export default function Card({ title, text, icon, background }: CardProps) {
  return (
    <motion.div
      className={`p-8 rounded-lg shadow-md w-full lg:w-1/2 ${
        background ? background : "bg-white"
      }`}
      initial={{ opacity: 0, y: 50 }} // Start hidden & below
      whileInView={{ opacity: 1, y: 0 }} // Animate to normal position
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the card is visible
      transition={{ duration: 0.8, ease: "easeOut" }}>
      {/* Icon */}
      <div className="mb-4">{icon}</div>

      {/* Title */}
      <h3
        className={`text-2xl font-bold ${
          background ? "text-white" : "text-gray-900"
        }`}>
        {title}
      </h3>

      {/* Text */}
      <p
        className={`mt-4 ${
          background ? "text-white" : "text-secondary"
        } leading-relaxed`}>
        {text}
      </p>
    </motion.div>
  );
}
