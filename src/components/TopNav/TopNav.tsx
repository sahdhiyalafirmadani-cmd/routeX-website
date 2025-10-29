import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function TopNav() {
  return (
    <div className="relative w-[1800px] h-[60px] flex items-center justify-between bg-white text-[#034833] font-[Plus Jakarta Sans] mt-7">
      {/* Brand */}
      <div className="absolute left-[110px] top-[50%] -translate-y-1/2 font-bold text-[32px] leading-[40px]">
        RouteX
      </div>

      {/* Navigation Links */}
      <nav className="absolute left-[600.5px] top-[50%] -translate-y-1/2 flex gap-[32px] text-[18px] font-medium">
        {["HOME", "ABOUT US", "SERVICES", "PROJECTS", "BLOG", "PAGE", "CONTACT"].map((item, i) => (
          <Link key={i} href={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-[#83cd20] transition">
            {item}
          </Link>
        ))}
      </nav>

      {/* Appointment Button */}
      <Link
        href="/get-appointment"
        className="absolute left-[1637px] top-[50%] -translate-y-1/2 w-[223px] h-[60px] rounded-[150px] bg-[#83cd20] flex items-center justify-center text-white hover:bg-[#9ade1c] transition"
      >
        <span className="absolute left-[20px] top-[50%] -translate-y-1/2 font-semibold text-[16px] leading-[30px]">Get An Appointment</span>
        <FaArrowRight className="absolute left-[180px] top-[22px] text-[16px]" />
      </Link>
    </div>
  );
}

