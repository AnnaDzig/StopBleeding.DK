"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

interface VideoTextSectionProps {
  title: string;
  text: string;
  videoSrc: string; // Path to the local video
  reverse?: boolean; // If true, layout switches (video first)
}

export default function VideoTextSection({
  title,
  text,
  videoSrc,
  reverse = false,
}: VideoTextSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-6 items-center">
      {/* If reverse = false → Title + Text + Video */}
      {/* If reverse = true → Video + Title + Text */}

      {/* Conditional rendering for Layout 1 */}
      {!reverse && (
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <AnimatedHeading text={title} />
          <p className="mt-4 text-gray-700 leading-relaxed">{text}</p>
        </motion.div>
      )}

      {/* Video Section */}
      <motion.div
        className="w-full lg:w-1/2 bg-[#BE2D37] p-6 rounded-lg flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <video controls className="w-full h-auto rounded-md shadow-lg">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Conditional rendering for Layout 2 */}
      {reverse && (
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <AnimatedHeading text={title} />
          <p className="mt-4 text-gray-700 leading-relaxed">{text}</p>
        </motion.div>
      )}
    </section>
  );
}
