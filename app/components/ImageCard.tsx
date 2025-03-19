"use client";

import { motion } from "framer-motion";

interface ImageCardProps {
  title: string;
  text: string;
  imageSrc: string;
  altText: string;
}

export default function ImageCard({
  title,
  text,
  imageSrc,
  altText,
}: ImageCardProps) {
  return (
    <motion.div
      className="w-full lg:w-1/3 bg-blue-900 text-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      {/* Image */}
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-56 object-cover rounded-md"
      />

      {/* Title */}
      <h3 className="text-xl font-bold mt-4">{title}</h3>

      {/* Red Underline */}
      <div className="w-12 h-1 bg-red-500 mt-2 mb-4"></div>

      {/* Text */}
      <p className="text-white leading-relaxed">{text}</p>
    </motion.div>
  );
}
