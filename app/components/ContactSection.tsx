import { Phone, MapPin, Mail } from "lucide-react";
import ContactCard from "@/components/ContactCard";

export default function ContactSection() {
  return (
    <section className="bg-[#BE2D37] text-white py-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold">Vores kontakter.</h2>
        <p className="text-lg mt-2 opacity-80">GET IN TOUCH WITH US</p>

        {/* Contact Grid */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
          {/* Phone Number */}
          <ContactCard
            icon={<Phone className="w-12 h-12" />}
            title="Phone Number"
            details={["(+45) 2624 0246"]}
          />

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-20"></div>

          {/* Location */}
          <ContactCard
            icon={<MapPin className="w-12 h-12" />}
            title="Location"
            details={["Jyllandsgade 19A", "7000 Fredericia"]}
          />

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-[#BE2D37] h-20"></div>

          {/* Send Message */}
          <ContactCard
            icon={<Mail className="w-12 h-12" />}
            title="Send Message"
            details={["kk@stopblodning.dk"]}
          />
        </div>
      </div>
    </section>
  );
}
