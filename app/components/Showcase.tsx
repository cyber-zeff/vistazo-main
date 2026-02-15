"use client";

import Image from "next/image";
import BookACall from "./BookACall";
import Typewriter from "./Typewriter";

export default function Showcase() {
  return (
    <section className="relative bg-main text-white lg:min-h-[85vh] h-full w-full flex flex-col items-center overflow-hidden mt-3 md:mt-8 lg:items-center">

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
          <div className="absolute right-20 min-[1160px]:right-35 xl:right-40 2xl:right-20 top-0 z-0 pointer-events-none">
            <div className="relative rounded-[100px] overflow-hidden w-[clamp(250px,22vw,350px)] h-[clamp(250px,22vw,350px)] max-w-full">
              <Image
                src="/head-frame.gif"
                alt="hero animation"
                fill
                unoptimized
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
            <p className="text-white text-lg mb-6 font-medium leading-normal">
              We help creators and mavericks build
              <br />
              personal brands that scream confidence.
              <br />
              Don&apos;t just be seen, be <span className="text-[#FFE400] italic font-bold">remembered.</span>
            </p>
            <BookACall path="#" />
          </div>
        </div>

        {/* MOBILE / TABLET VERSION */}
        <div className="lg:hidden w-full">
          <div className="w-full max-w-full" style={{ 
            fontSize: 'clamp(48px, 15vw, 158px)',
            lineHeight: '1.1'
          }}>
            <h1 className="font-extrabold tracking-tight quantaFont mb-0 whitespace-nowrap">
              DESIGNED
            </h1>
            <div className="flex items-center gap-[0.4em] mt-0">
              <h1 className="font-extrabold tracking-tight quantaFont mb-0 whitespace-nowrap shrink-0">FOR</h1>
              <div className="flex-1 min-w-0">
                <div className="rounded-full overflow-hidden bg-gray-400 shrink-0 w-full min-[540px]:w-[clamp(300px,52vw,400px)] md:w-[clamp(300px,42vw,400px)]" style={{ 
                  height: 'clamp(70px, 15vw, 144px)'
                }}>
                  {/* IMAGE TO COME  */}
                </div>
              </div>
            </div>

            <div className="mt-[0.3em] font-extrabold tracking-tight text-[#F9D94D] quantaFont whitespace-nowrap">
              <Typewriter />
            </div>

            {/* Bunny + Text Lines */}
            <div className="mt-[0.15em] flex items-start gap-[0.125em]">
              <div className="relative shrink-0" style={{ width: 'clamp(120px, 25vw, 220px)' }}>
                <Image
                  src="/head-bunny.png"
                  alt="bunny mascot"
                  width={339}
                  height={333}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 640px) 120px, 200px"
                />
              </div>

              <div className="max-[410px]:-ml-10 flex-1 min-w-0 text-right">
                <h1 className="font-extrabold tracking-tight quantaFont mb-0 whitespace-nowrap">
                  BUILT TO
                </h1>
                <h1 className="font-extrabold tracking-tight quantaFont mt-0 whitespace-nowrap">
                  SCALE.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden absolute bottom-0 right-0 z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="1014" height="211" viewBox="0 0 1014 211" fill="none">
          <path d="M1013.2 0.5C614.199 0.5 360.988 53.9068 0.199219 210.5M1013.2 18.8807C715.199 18.8807 518.94 69.912 263.199 210.5M1013.2 37.2615C808.699 37.2615 664.508 87.6972 509.699 210.5M1013.2 55.6422C896.699 55.6422 787.833 116.429 732.199 210.5M1013.2 74.023C958.199 87.567 916.46 190.281 910.699 210.04" stroke="white" />
        </svg>
      </div>
    </section>
  );
}
