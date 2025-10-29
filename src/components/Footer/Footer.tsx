import { FaSuitcase, FaPlaneDeparture } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#034833] text-white font-[Plus Jakarta Sans] w-[1920px] h-[669px] mx-auto pt-12 px-[5%] overflow-hidden">

      {/* === TOP SECTION === */}
      <div className="relative flex justify-center items-start  pb-[3rem]">
        {/* === LEFT SECTION === */}
        <div className="absolute left-[15%] top-[10px] gap-[8px] flex items-center text-left ml-[35px]">
          <FaSuitcase className="text-[#83cd20] text-[2.2rem] mr-4" />
          <h3 className="text-[30px] font-semibold leading-[36px] max-w-[330px]">
            Need Any Support For Tour And Visa?
          </h3>
        </div>

        {/* === DIVIDER === */}
        <div className="absolute left-[50%] top-[-10px] w-px h-[120px] bg-white/40"></div>

        {/* === RIGHT SECTION === */}
        <div className="absolute right-[15%] top-[10px] flex items-center text-left">
          <FaPlaneDeparture className="text-[#83cd20] text-[2.2rem] mr-4" />
          <h3 className="text-[30px] font-semibold leading-[36px] max-w-[390px]">
            Are You Ready To Get Started Travelling?
          </h3>
        </div>
      </div>

      {/* === HORIZONTAL LINE BELOW TOP SECTION === */}
      <div className="w-[2000px] border-t border-white/40 mx-auto mt-[83px] ml-[-80px]"></div>


      {/* === MIDDLE SECTION === */}
      <div className="relative flex justify-center pt-[3rem] pb-[2rem] px-[5%] mt-[2rem]">
        {/* Company */}
        <div className="absolute left-[250px] max-w-[300px]">
    <h2 className="text-[32px] font-bold leading-[40px] mb-4 ml-[50px]">RouteX</h2>
    <p className="text-[16px] leading-[28px] mb-6 mt-[35px]">
      Corporate business typically refers to large-scale monsola it enterprises or organizations.
    </p>
    <div className="flex gap-5 text-white text-[18px]">
      <i className="fa-brands fa-facebook-f hover:text-[#83cd20]" />
      <i className="fa-brands fa-instagram hover:text-[#83cd20]" />
      <i className="fa-brands fa-twitter hover:text-[#83cd20]" />
      <i className="fa-brands fa-linkedin-in hover:text-[#83cd20]" />
    </div>
  </div>
        

        {/* Services */}
       <div className="absolute left-[37.8%] top-[55px] max-w-[200px]">
  <h4 className="text-[22px] font-bold leading-[30px] mb-6">Services</h4>
  <ul className="flex flex-col gap-4 list-none mt-[40px]">
    {["Mistakes To Avoid", "Your Startup", "Know About Routes", "Know About Fonts"].map((item, i) => (
      <li
        key={i}
        className="flex items-center gap-3 text-[16px] leading-[24px] text-white cursor-default select-none"
      >
        <span className="text-[#83cd20] text-[18px]">✓</span>
        {item}
      </li>
    ))}
  </ul>
</div>


        {/* Useful Links */}
   <div className="absolute left-[54%] top-[55px] max-w-[200px]">
  <h4 className="text-[22px] font-bold leading-[30px] mb-6">Useful Link</h4>
  <ul className="flex flex-col gap-4 list-none mt-[34px]">
    {["Latest News", "Careers", "General Inquiries", "Case Studies"].map((item, i) => (
      <li
        key={i}
        className="flex items-center gap-3.5 text-[16px] leading-[24px] text-white cursor-default select-none"
      >
        <span className="text-[#83cd20] text-[18px]">›</span> {/* simple right arrow */}
        {item}
      </li>
    ))}
  </ul>
</div>


        {/* Subscribe */}
        <div className="absolute left-[69.5%] top-[55px] max-w-[300px]">
    <h4 className="text-[22px] font-bold leading-[30px] mb-6">
      Subscribe  Our Newsletter
    </h4>
    <p className="text-[16px] leading-[28px] mb-6 mt-[35px]">
      Corporate business typically refers to large-scale mansola it.
    </p>
    <div className="flex items-center bg-[#111214] rounded-full overflow-hidden p-1 w-full h-[58px] mt-2 mt-[33px]">
      <input
        type="email"
        placeholder="Enter Email"
        className="flex-1 bg-transparent outline-none text-white px-4 text-[15px]"
      />
      <button className="bg-[#83cd20] w-[53px] h-[53px] rounded-full flex items-center justify-center hover:bg-[#9ef23b] transition">
        <i className="fa-solid fa-arrow-up text-[14px]" />
      </button>
    </div>
  </div>
</div>

      {/* === HORIZONTAL LINE BELOW MIDDLE SECTION === */}
      <div className="w-[2000px] border-t border-white/40 mx-auto mt-[290px] mb-[1rem] ml-[-80px]"></div>
      

      {/* === BOTTOM SECTION === */}
      <div className="flex justify-between items-center pt-4 text-[#bbb] text-[16px] px-[5%] ml-[160px] translate-y-[5px]">
        <p>© Yoursitename 2024 | All Rights Reserved</p>
        <ul className="flex gap-10 list-none mr-[175px]">
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
