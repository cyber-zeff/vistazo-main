"use client";

import Image from "next/image";
import BookACall from "./BookACall";
import Typewriter from "./Typewriter";

export default function Showcase() {
  return (
    <section className="relative bg-main text-white md:min-h-[89vh] sm:min-h-screen h-full w-full flex flex-col items-center overflow-hidden mt-10">

      {/* Showcase Container */}
      <div className="relative w-full max-w-360 px-6 md:px-16 py-12 md:pt-12 md:pb-20 flex justify-center">

        {/* DESKTOP / LAPTOP VERSION */}
        <div className="hidden lg:block relative z-10 w-full">

          <h1 className="font-extrabold text-[clamp(86px,8vw,128px)] leading-normal tracking-tight quantaFont">
            DESIGNED FOR
          </h1>

          {/* Typewriter Line */}
          <div className="font-extrabold text-[clamp(86px,8vw,128px)] leading-normal tracking-tight quantaFont">
            <span className="text-[#F9D94D]">
              <Typewriter />
            </span>
          </div>

          {/* GIF */}
          <div className="absolute right-10 min-[1160px]:right-20 top-0 z-0 pointer-events-none">
            <div className="relative rounded-[100px] overflow-hidden w-[clamp(250px,20vw,350px)] h-[clamp(250px,20vw,350px)] max-w-full">
              <Image
                src="/head-frame.gif"
                alt="hero animation"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 300px, 350px"
              />
            </div>
          </div>

          {/* Bunny + Heading */}
          <div className="flex items-center gap-12 flex-wrap">
            <div className="shrink-0">
              <div className="w-[clamp(170px,15vw,228px)] h-[clamp(170px,15vw,221px)] relative -top-10 left-10">
                <Image
                  src="/head-bunny.png"
                  alt="bunny mascot"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 200px, 228px"
                />
              </div>
            </div>

            <h1 className="font-extrabold text-[clamp(86px,8vw,128px)] leading-normal tracking-tight quantaFont">
              BUILT TO SCALE.
            </h1>
          </div>

          {/* Text + CTA */}
          <div className="mt-2 max-w-md">
            <p className="text-gray-200 text-lg mb-6">
              We create custom websites that make your work stand out and get you{" "}
              <span className="font-semibold italic text-white">paid.</span>
            </p>
            <BookACall path="#" />
          </div>
        </div>

        {/* MOBILE / TABLET VERSION */}
        <div className="block lg:hidden px-8">

          <h1 className="font-extrabold text-[clamp(48px,13vw,118px)] leading-[1.1] tracking-tight quantaFont">
            DESIGNED
          </h1>
          <div className="flex items-center gap-10">
            <h1 className="font-extrabold text-[clamp(48px,13vw,118px)] leading-[1.1] tracking-tight quantaFont">FOR</h1>
            <div className="mt-2 flex justify-center">
              <div className="rounded-full overflow-hidden w-[clamp(230px,13vw,327px)] h-[clamp(96px,13vw,104px)] max-w-full bg-gray-400">
                {/* IMAGE TO COME */}
              </div>
            </div>
          </div>

          <div className="mt-4 font-extrabold text-[clamp(48px,13vw,118px)] leading-[1.1] tracking-tight text-[#F9D94D] quantaFont">
            <Typewriter />
          </div>

          {/* Bunny + Text Line */}
          <div className="mt-2 flex items-center">
            <div className="relative">
              <Image
                src="/head-bunny.png"
                alt="bunny mascot"
                width={339}
                height={333}
                className="max-sm:w-[200px] max-sm:h-[140px]"
                priority
                sizes="100px"
              />
            </div>

            <h1 className="font-extrabold text-[clamp(48px,13vw,118px)] leading-[1.1] tracking-tight quantaFont text-right">
              BUILT TO SCALE.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
