import React from "react";

export default function Middle() {
  return (
    <section className="container flex flex-col lg:flex-row justify-between gap-8 lg:gap-[30px] py-10 lg:py-[80px]">
      {/* LEFT */}
      <div className="w-full lg:w-[850px]">
        {/* Heading 1 */}
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] sm:text-[36px] lg:text-[50px] leading-[1.2] mb-4 tracking-[0.05em] text-[#034833]">
          Wonders of Ancient Civilizations: A Journey Through Egypt
        </h1>

        {/* Paragraph 1 */}
        <p className="font-['Plus_Jakarta_Sans'] text-[#727272] text-[15px] sm:text-[16px] leading-[28px] mb-10">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra.
          Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper
          viverra laoreet. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra. Aliquam eros justo, posu.
        </p>

        {/* Heading 2 */}
        <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.2] mb-4 text-[#034833]">
          Why To Choose Egypt?
        </h2>

        {/* Paragraph 2 */}
        <p className="font-['Plus_Jakarta_Sans'] text-[#727272] text-[15px] sm:text-[16px] leading-[28px] mb-8">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra.
          Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fermentum ullamcorper
          viverra laoreet. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra. Aliquam eros justo, posu.
        </p>

        {/* Services */}
        <ul className="space-y-4 mb-12">
          <li className="text-[15px] sm:text-[16px] leading-[28px]">
            <strong className="font-semibold text-[17px] sm:text-[18px] text-[#034833] mr-3">
              Flight Booking:
            </strong>
            Aliquam eros justo posuere loborti viverra laoreet mattis ullamcorper posuere.
          </li>

          <li className="text-[15px] sm:text-[16px] leading-[28px]">
            <strong className="font-semibold text-[17px] sm:text-[18px] text-[#034833] mr-3">
              Car Rental Services:
            </strong>
            Aliquam eros justo posuere loborti viverra laoreet mattis ullamcorper posuere.
          </li>

          <li className="text-[15px] sm:text-[16px] leading-[28px]">
            <strong className="font-semibold text-[17px] sm:text-[18px] text-[#034833] mr-3">
              Travel Planning:
            </strong>
            Aliquam eros justo posuere loborti viverra laoreet mattis ullamcorper posuere.
          </li>
        </ul>

        {/* FAQ Section */}
        <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.2] mb-6 text-[#034833]">
          Frequently Asked Questions
        </h3>

        <div className="space-y-6">
          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer text-[17px] sm:text-[18px] font-semibold text-[#034833] leading-[28px]">
              Where Wanderlust Meets Reality?
            </summary>
            <p className="text-[#727272] text-[15px] sm:text-[16px] leading-[28px] mt-2">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using it is that it has a long
              established fact that a reader.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer text-[17px] sm:text-[18px] font-semibold text-[#034833] leading-[28px]">
              How far in advance should I book my flight?
            </summary>
            <p className="text-[#727272] text-[15px] sm:text-[16px] leading-[28px] mt-2">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer text-[17px] sm:text-[18px] font-semibold text-[#034833] leading-[28px]">
              What documents travel internationally?
            </summary>
            <p className="text-[#727272] text-[15px] sm:text-[16px] leading-[28px] mt-2">
              Yes! We provide exclusive discounts for group travel packages depending on the
              destination.
            </p>
          </details>

          <details className="border-b border-gray-200 pb-4">
            <summary className="cursor-pointer text-[17px] sm:text-[18px] font-semibold text-[#034833] leading-[28px]">
              Is travel insurance necessary?
            </summary>
          </details>
        </div>
      </div>

      {/* SIDEBAR */}
      <aside className="w-full lg:w-[410px] flex flex-col justify-between">
        {/* Continents */}
        <div className="flex flex-col space-y-4 text-[18px] sm:text-[20px] font-bold mt-8 lg:mt-0">
          <div className="flex justify-between text-[#034833]">
            <span>Asia</span>
            <span className="text-[16px]">{">"}</span>
          </div>
          <div className="flex justify-between text-[#034833]">
            <span>Europe</span>
            <span className="text-[16px]">{">"}</span>
          </div>
          <div className="flex justify-between text-[#83CD20]">
            <span>North America</span>
            <span className="text-[16px]">{">"}</span>
          </div>
          <div className="flex justify-between text-[#034833]">
            <span>Australia</span>
            <span className="text-[16px]">{">"}</span>
          </div>
          <div className="flex justify-between text-[#034833]">
            <span>Latine America</span>
            <span className="text-[16px]">{">"}</span>
          </div>
          <div className="flex justify-between text-[#034833]">
            <span>Africa</span>
            <span className="text-[16px]">{">"}</span>
          </div>
        </div>

        {/* Contact Box */}
        <div className="w-full bg-[#F6FFF0] flex flex-col items-center rounded-2xl shadow-md p-6 mt-10 lg:mt-16">
          <h4 className="text-[20px] sm:text-[22px] font-bold text-[#034833] mb-3">
            GET TOUCH
          </h4>

          <div className="w-[80px] sm:w-[96px] h-[80px] sm:h-[96px] flex items-center justify-center text-[36px] sm:text-[40px] bg-[#83CD20] text-white rounded-full mb-4">
            📞
          </div>

          <p className="text-[15px] sm:text-[17px] text-center">For fast service</p>
          <strong className="text-[#034833] text-[20px] sm:text-[22px] text-center mt-2">
            (+888) 123 456 765
          </strong>
        </div>
      </aside>
    </section>
  );
}
