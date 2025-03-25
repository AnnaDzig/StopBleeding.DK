import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-[#34495E] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section - Logo & Description */}
          <div className="flex-1">
            <Image
              src="/logo_white.png"
              alt="Stop Blødning Danmark"
              width={180}
              height={50}
            />
            <p className="mt-4 text-gray-300 max-w-xs">
              Dedikeret til at øge bevidstheden om hjælp ved akutte
              blødningssituationer
            </p>
            <div className="mt-4 w-12 h-[2px] bg-[#BE2D37]"></div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Hjem", href: "/" },
                { name: "Om Os", href: "/about" },
                { name: "Kursus og Produkt", href: "/courses" },
                { name: "Kontakter", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-bg-[#BE2D37] transition">
                    <span className="text-bg-[#BE2D37] mr-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-white" />
                Jyllandsgade 19A, 7000 Fredericia
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-white" />
                +45 2624 0246
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-white" />
                kk@stopblodning.dk
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright & Social Media */}
        <div className="flex justify-between">
          <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              Copyright © 2024. All rights reserved.
            </p>

            {/* Social Media Icons */}

            {/* {[
              { href: "#", icon: "/svg/linkedin.svg", alt: "LinkedIn" },
              { href: "#", icon: "/svg/facebook.svg", alt: "Facebook" },
              { href: "#", icon: "/svg/youtube.svg", alt: "YouTube" },
            ].map((social) => (
              <Link key={social.alt} href={social.href}>
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </Link>
            ))} */}
          </div>
          <div className="flex items-end gap-5">
            <FontAwesomeIcon icon={faLinkedin} className="text-white w-5 h-5" />
            <FontAwesomeIcon icon={faFacebook} className="text-white w-5 h-5" />
            <FontAwesomeIcon icon={faYoutube} className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
