import Link from "next/link";

export default function Header() {
  return (
    <section className="absolute left-[60px] top-[90px] w-[1800px] h-[462px] bg-[#034833]/80 rounded-[50px] text-white">
      <h1 className="absolute left-[260px] top-[155px] w-[497px] h-[90px] font-[Plus Jakarta Sans] font-bold text-[80px] leading-[90px]">
        Visa Details
      </h1>
      <div className="absolute left-[255px] top-[240px] flex items-center gap-[13px] text-[18px] font-semibold">
        <Link href="/" className="relative top-[-1.5px]">Home</Link>
        <span className="relative left-[8px] top-[-2px] font-[Font Awesome 6 Free] font-black text-[30px]">›</span>
        <span className="relative left-[8px] top-[-1.5px]">Visa Details</span>
      </div>
    </section>
  );
}
