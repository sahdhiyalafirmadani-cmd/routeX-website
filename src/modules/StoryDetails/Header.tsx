import Link from "next/link";

export default function Header() {
  return (
    <section className="w-full max-w-[1800px] mx-auto bg-[#034833]/80 text-white rounded-[30px] px-6 sm:px-12 py-16 mt-8 text-center sm:text-left">
      <h1 className="font-[Plus Jakarta Sans] font-bold text-[36px] sm:text-[50px] md:text-[64px] lg:text-[80px] leading-tight mb-4">
        Story Details
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 text-[16px] sm:text-[18px] font-semibold">
        <Link href="/" className="hover:text-[#83cd20]">Home</Link>
        <span className="text-[24px] sm:text-[30px]">›</span>
        <span>Story Details</span>
      </div>
    </section>
  );
}
