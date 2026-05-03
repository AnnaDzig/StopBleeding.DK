"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  icon: IconDefinition;
  delay: number;
}

export const TeamMemberCard = ({
  name,
  role,
  image,
  icon,
  delay,
}: TeamMemberProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}>
      <img src={image} alt={name} className="w-full h-[75%] object-cover" />
      <div className="p-4 text-center">
        <FontAwesomeIcon icon={icon} className="text-primary text-3xl mb-2" />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
};
