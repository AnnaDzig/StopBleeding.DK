"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <a href="/">
          <Image src="/logo_white.png" alt="Logo" width={250} height={150} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-red-500">
            Hjem
          </a>
          <a href="/about" className="text-white hover:text-red-500">
            Om os
          </a>
          <a href="/courses" className="text-white hover:text-red-500">
            Kursus og Produkt
          </a>
          <a href="/contact" className="text-white hover:text-red-500">
            Kontakter
          </a>
        </nav>

        {/* Mobile Burger Menu */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 p-6 text-center md:hidden">
            <a href="/" className="block text-white py-2 hover:text-red-500">
              Hjem
            </a>
            <a
              href="/about"
              className="block text-white py-2 hover:text-red-500">
              Om os
            </a>
            <a
              href="/courses"
              className="block text-white py-2 hover:text-red-500">
              Kursus og Produkt
            </a>
            <a
              href="/contact"
              className="block text-white py-2 hover:text-red-500">
              Kontakter
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
