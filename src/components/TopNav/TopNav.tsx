"use client";
import Link from "next/link";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-[#034833] font-[Plus Jakarta Sans] shadow-sm">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Brand */}
        <div className="text-[26px] sm:text-[32px] font-bold">RouteX</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-[16px] lg:text-[18px] font-medium">
          {["HOME", "ABOUT US", "SERVICES", "PROJECTS", "BLOG", "PAGE", "CONTACT"].map((item, i) => (
            <Link key={i} href={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-[#83cd20] transition">
              {item}
            </Link>
          ))}
        </nav>

        {/* Appointment Button */}
        <Link
          href="/get-appointment"
          className="hidden md:flex items-center justify-center bg-[#83cd20] text-white hover:bg-[#9ade1c] transition rounded-full px-5 py-3 text-[14px] lg:text-[16px] font-semibold"
        >
          Get An Appointment
          <FaArrowRight className="ml-2" />
        </Link>

        {/* Mobile Menu Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[24px]">
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-[#034833] text-white flex flex-col gap-4 px-6 py-4">
          {["HOME", "ABOUT US", "SERVICES", "PROJECTS", "BLOG", "PAGE", "CONTACT"].map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              className="hover:text-[#83cd20] transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
