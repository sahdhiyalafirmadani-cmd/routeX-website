import React from "react";

export default function Middle() {
  return (
    <section className="flex justify-between w-[1290px] h-[600px] mx-[315px] my-[682px] gap-[30px] opacity-100 rounded-[20px]">
      {/* Left Section */}
      <div className="w-[850px]">
        {/* Heading 1 */}
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[50px] leading-[60px] mb-4 -mt-[84px] tracking-[0.05em]">
          Wonders of Ancient Civilizations: A Journey Through Egypt
        </h1>

        {/* Paragraph 1 */}
        <p className="font-['Plus_Jakarta_Sans'] text-[#727272] text-[16px] leading-[30px] mb-10">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra.
          Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper
          viverra laoreet. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra. Aliquam eros justo, posu.
        </p>

        {/* Heading 2 */}
        <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[30px] leading-[36px] mb-4 -mt-[10px]">
          Why To Choose Egypt?
        </h2>

        {/* Paragraph 2 */}
        <p className="font-['Plus_Jakarta_Sans'] text-[#727272] text-[16px] leading-[30px] mb-8  mt-[20px]">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra.
          Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper
          viverra laoreet. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra. Aliquam eros justo, posu.
        </p>

        {/* Services */}
        <ul className="space-y-3 mb-12">
  <li className="text-[16px] leading-[28px] font-['Plus_Jakarta_Sans' -mt-[10px] ">
    <strong className="font-semibold text-[18px] text-[#034833] mr-5">
      Flight Booking:
    </strong>
 <span className="[word-spacing:0.2em]">
      Aliquam eros justo posuere loborti viverra laoreet mattis ullamcorper posuere.
    </span>
  </li>

  <li className="text-[16px] leading-[28px] font-['Plus_Jakarta_Sans' mt-[20px]">
    <strong className="font-semibold text-[18px] text-[#034833] mr-5">
      Car Rental Services:
    </strong>
    Aliquam eros justo posuere loborti viverra laoreet mattis ullamcorper posuere.
  </li>

  <li className="text-[16px] leading-[28px] font-['Plus_Jakarta_Sans' mt-[20px]">
    <strong className="font-semibold text-[18px] text-[#034833] mr-5">
      Travel Planning:
    </strong>
    Aliquam eros justo posuere loborti viverra laoreet mattis ullamcorper posuere.
  </li>
</ul>


        {/* FAQ Section */}
        <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[30px] leading-[36px] mb-6 -mt-[18px] [letter-spacing:0.05em]">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          <details className="border-b border-gray-200 pb-4" open>
            <summary className="cursor-pointer text-[18px] font-semibold text-[#034833] leading-[28px] mt-[95px] ml-[10px]">
              Where Wanderlust Meets Reality?
            </summary>
            <p className="w-[570px] text-[#727272] text-[16px] leading-[30px] mt-2 mt-[50px] ml-[30px]">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using it is that it has a long
              established fact that a reader.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer text-[18px] font-semibold text-[#034833] leading-[28px] mt-[60px] ml-[20px]">
              How far in advance should I book my flight?
            </summary>
            <p className="w-[570px] text-[#727272] text-[16px] leading-[30px] mt-2">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4 mt-[65px] ml-[20px]">
            <summary className="cursor-pointer text-[18px] font-semibold text-[#034833] leading-[28px]">
              What documents travel internationally?
            </summary>
            <p className="w-[570px] text-[#727272] text-[16px] leading-[30px] mt-2">
              Yes! We provide exclusive discounts for group travel packages depending on the
              destination.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4 mt-[65px] ml-[20px]">
            <summary className="cursor-pointer text-[18px] font-semibold text-[#034833] leading-[28px]">
              Is travel insurance necessary?
            </summary>
          </details>
        </div>
      </div>

    {/* Sidebar */}
{/* Sidebar */}
<aside className="flex flex-col justify-between w-[410px] h-screen p-5">
  {/* Continents */}
  <div className="flex flex-col text-[22px] font-bold">
  {/* Asia */}
  <div className="ml-5 mb-4">
    <h4 className="flex justify-start items-center gap-68 -mt-[70px]">
      <span>Asia</span>
      <span className="text-[#034833] text-[16px]">{'>'}</span>
    </h4>
  </div>

  {/* Europe */}
  <div className="ml-5 mb-4">
    <h4 className="flex justify-start items-center gap-62 -mt-[15px]">
      <span>Europe</span>
      <span className="text-[#034833] text-[16px]">{'>'}</span>
    </h4>
  </div>

  {/* North America */}
  <div className="ml-5 mb-4">
    <h4 className="flex justify-start items-center gap-43 text-[#83CD20] mt-[20px]">
      <span>North America</span>
      <span className="text-[#83CD20] text-[16px]">{'>'}</span>
    </h4>
  </div>

  {/* Australia */}
  <div className="ml-5 mb-4">
    <h4 className="flex justify-start items-center gap-56 mt-[22px]">
      <span>Australia</span>
      <span className="text-[#034833] text-[16px]">{'>'}</span>
    </h4>
  </div>

  {/* Latine America */}
  <div className="ml-5 mb-4">
    <h4 className="flex justify-start items-center gap-41 mt-[20px]">
      <span>Latine America</span>
      <span className="text-[#034833] text-[16px]">{'>'}</span>
    </h4>
  </div>

  {/* Africa */}
  <div className="ml-5 mb-4">
    <h4 className="flex justify-start items-center gap-65 mt-[22px]">
      <span>Africa</span>
      <span className="text-[#034833] text-[15px]">{'>'}</span>
    </h4>
  </div>
</div>


  {/* Contact Box */}
 <div className="w-full bg-[#F6FFF0] flex flex-col items-center justify-start rounded-2xl shadow-md p-6">
  {/* Heading */}
  <h4 className="text-[22px] font-bold text-[#034833] mb-2 mt-[68px]">
    GET TOUCH
  </h4>

  {/* Emoji */}
  <div className="w-[96px] h-[96px] flex items-center justify-center text-[40px] bg-[#83CD20] text-white rounded-full mb-0 mt-[20px]">
    📞
  </div>

  {/* For fast service text */}
  <p className="text-[17px] mt-[32px] mb-0 ">
    For fast service
  </p>

  {/* Phone number */}
  <strong className="text-[#034833] text-[22px] mt-[10px] mb-0">
    (+888) 123 456 765
  </strong>
</div>

</aside>

</section>
  );}