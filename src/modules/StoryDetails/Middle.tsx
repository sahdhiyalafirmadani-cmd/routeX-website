import Button from "@/components/Button/Button";

export default function Middle() {
  return (
    <section className="relative w-full max-w-[1290px] mx-auto px-4 sm:px-6 md:px-0 py-10 md:py-0 z-10">
      {/* Main responsive container: stacks on mobile, row on md+ */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-[60px] rounded-[20px]">
        {/* LEFT */}
        <div className="relative flex-1 min-h-[auto] md:min-h-[640px]">
          <h2 className="text-[26px] sm:text-[36px] md:text-[50px] font-bold leading-[1.05] text-[#034833] mb-4">
            Visa Got Approved for Egypt
          </h2>

          {/* Decorative big quote - responsive size and position */}
          <div className="pointer-events-none select-none absolute -top-6 -left-2 md:-top-10 md:-left-8 text-[#83cd20] opacity-20 rotate-[-10deg] z-0">
            <span className="text-[120px] sm:text-[160px] md:text-[260px] leading-none font-bold">“</span>
          </div>

          {/* Text content - flow layout (no absolute) */}
          <p className="relative z-10 text-[14px] sm:text-[15px] md:text-[16px] leading-[28px] text-[#727272] mb-6 md:mt-[2.5rem] max-w-none">
            Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra.
            Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper
            viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
            posuere viverra. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
            posuere viverra.
          </p>

          {/* Info list */}
          <div className="relative z-10 flex flex-col gap-3 mb-6">
            <p><span className="font-semibold text-[16px] md:text-[18px] text-[#034833]">Visa Applied:</span> Visa Special</p>
            <p><span className="font-semibold text-[16px] md:text-[18px] text-[#034833]">Visa Type:</span> 10 years +</p>
            <p><span className="font-semibold text-[16px] md:text-[18px] text-[#034833]">Approval:</span> adbs@gmail.com</p>
          </div>

          {/* Buttons */}
          <div className="relative z-20 flex flex-wrap gap-4">
            <Button text="Apply For Visa" href="/apply" variant="primary" />
            <Button text="Read More Stories" href="/story-details" variant="secondary" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full md:w-[528px] h-auto md:h-[592px] flex items-start justify-center">
          {/* Back rotated card (lighter) */}
          <div className="absolute md:left-[120px] left-0 top-[28px] md:top-[65px] w-[72%] sm:w-[60%] md:w-[331.35px] h-[68%] md:h-[475.45px] bg-[#f1f5eb] rounded-[21px] rotate-[5deg] z-10" />

          {/* Front rotated card (bordered) */}
          <div className="relative left-0 md:left-[20px] top-[46px] md:top-[90px] w-[86%] sm:w-[80%] md:w-[418.11px] h-[72%] md:h-[481.66px] bg-[#d9d9d9] border-[3px] border-[#83cd20] rounded-[21px] -rotate-[5deg] z-20" />
        </div>
      </div>
    </section>
  );
}
