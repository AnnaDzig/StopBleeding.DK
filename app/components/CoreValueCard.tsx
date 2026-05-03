"use client";

import { motion } from "framer-motion";

interface CoreValueCardProps {
  title: string;
  text: string;
  imageSrc: string;
  className?: string;
}

export default function CoreValueCard({
  title,
  text,
  imageSrc,
}: CoreValueCardProps) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />

      {/* Overlay for Text */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{text}</p>
      </motion.div>
    </div>
  );
}
