import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  details: string[];
}

export default function ContactCard({
  icon,
  title,
  details,
}: ContactCardProps) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="font-semibold text-lg mt-4">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-200 mt-1">
          {detail}
        </p>
      ))}
    </div>
  );
}
