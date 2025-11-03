import { FaSuitcase, FaPlaneDeparture } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#034833] text-white font-[Plus Jakarta Sans] w-full mx-auto pt-12 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* === TOP SECTION === */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pb-8 border-b border-white/40">
        <div className="flex items-center gap-4 text-center lg:text-left">
          <FaSuitcase className="text-[#83cd20] text-[2rem]" />
          <h3 className="text-[22px] sm:text-[28px] font-semibold">Need Any Support For Tour And Visa?</h3>
        </div>

        <div className="hidden lg:block w-px h-[80px] bg-white/40"></div>

        <div className="flex items-center gap-4 text-center lg:text-left">
          <FaPlaneDeparture className="text-[#83cd20] text-[2rem]" />
          <h3 className="text-[22px] sm:text-[28px] font-semibold">Are You Ready To Get Started Travelling?</h3>
        </div>
      </div>

      {/* === MIDDLE SECTION === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 pb-10 border-b border-white/40">
        {/* Company */}
        <div>
          <h2 className="text-[28px] font-bold mb-4">RouteX</h2>
          <p className="text-[16px] leading-[28px] mb-6">
            Corporate business typically refers to large-scale enterprises or organizations.
          </p>
          <div className="flex gap-5 text-white text-[18px]">
            <i className="fa-brands fa-facebook-f hover:text-[#83cd20]" />
            <i className="fa-brands fa-instagram hover:text-[#83cd20]" />
            <i className="fa-brands fa-twitter hover:text-[#83cd20]" />
            <i className="fa-brands fa-linkedin-in hover:text-[#83cd20]" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[20px] font-bold mb-4">Services</h4>
          <ul className="space-y-3">
            {["Mistakes To Avoid", "Your Startup", "Know About Routes", "Know About Fonts"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[#83cd20]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-[20px] font-bold mb-4">Useful Links</h4>
          <ul className="space-y-3">
            {["Latest News", "Careers", "General Inquiries", "Case Studies"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[#83cd20]">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-[20px] font-bold mb-4">Subscribe Our Newsletter</h4>
          <p className="text-[16px] leading-[28px] mb-4">Corporate business typically refers to large-scale enterprises.</p>
          <div className="flex items-center bg-[#111214] rounded-full overflow-hidden h-[50px]">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 bg-transparent outline-none text-white px-4 text-[15px]"
            />
            <button className="bg-[#83cd20] w-[50px] h-[50px] flex items-center justify-center hover:bg-[#9ef23b] transition">
              <i className="fa-solid fa-arrow-up text-[14px]" />
            </button>
          </div>
        </div>
      </div>

      {/* === BOTTOM SECTION === */}
      <div className="flex flex-col md:flex-row justify-between items-center text-[#bbb] text-[14px] sm:text-[16px] pt-4">
        <p>© Yoursitename 2024 | All Rights Reserved</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          {["Terms & Condition", "Privacy Policy", "Contact Us"].map((item, i) => (
            <li key={i} className="hover:text-[#83cd20] cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
