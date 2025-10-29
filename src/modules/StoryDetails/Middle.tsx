import Button from "@/components/Button/Button";

export default function Middle() {
  return (
    <section className="absolute top-[658px] left-[315px] w-[1290px] h-[640px] flex justify-between gap-[60px] rounded-[20px] z-10">
      {/* LEFT */}
      <div className="relative w-[702px] h-[640px]">
        <h2 className="text-[50px] font-bold leading-[60px] text-[#034833] mb-6">Visa Got Approved for Egypt</h2>

        <div className="absolute left-[-10px] top-[-10px] text-[260px] font-bold text-[#83cd20] opacity-20 rotate-[-10deg] z-0 select-none">“</div>

        <p className="absolute top-[200px] w-[630px] text-[16px] leading-[30px] text-[#727272] z-10">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
.Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamco
rper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamc
orper posuere viverra .Aliquam eros justo, posu Aliquam eros justo, posuere loborti
viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobo
rtis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros
justo, posuere loborti viverra laoreet matti ullamcorper posuere
        </p>

        <div className="absolute top-[420px] flex flex-col gap-[17px] z-10">
          <p><span className="font-semibold text-[18px] text-[#034833]">Visa Applied:</span> Visa Special</p>
          <p><span className="font-semibold text-[18px] text-[#034833]">Visa Type:</span> 10 years +</p>
          <p><span className="font-semibold text-[18px] text-[#034833]">Approval:</span> adbs@gmail.com</p>
        </div>

        <div className="absolute top-[580px] flex gap-[28px] z-20">
          <Button text="Apply For Visa" href="/apply" variant="primary" />
          <Button text="Read More Stories" href="/story-details" variant="secondary" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative w-[528px] h-[592px]">
        <div className="absolute left-[120px] top-[65px] w-[331.35px] h-[475.45px] bg-[#f1f5eb] rounded-[21.37px] rotate-[5deg] z-10"></div>
        <div className="absolute left-[20px] top-[90px] w-[418.11px] h-[481.66px] bg-[#d9d9d9] border-[3px] border-[#83cd20] rounded-[21.37px] -rotate-[5deg] z-20"></div>
      </div>
    </section>
  );
}
