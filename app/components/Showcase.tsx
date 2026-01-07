"use client";

import Image from "next/image";
import GetStartedBtn from "./BookACall";
import Typewriter from "./Typewriter";

export default function Showcase() {
  return (
    <section className="relative bg-main text-white min-h-screen w-full flex flex-col items-center overflow-hidden">

      {/* Showcase Container */}
      <div className="relative w-full max-w-360 px-6 md:px-16 py-12 md:py-16 flex justify-center">

        {/* DESKTOP / LAPTOP VERSION */}
        <div className="hidden md:block relative z-10 w-full">

          <h1 className="font-extrabold text-[128px] leading-normal tracking-tight quantaFont">
            DESIGNED FOR
          </h1>

          {/* Typewriter Line */}
          <div className="font-extrabold text-[128px] leading-normal tracking-tight quantaFont">
            <span className="text-[#F9D94D]">
              <Typewriter />
            </span>
          </div>

          {/* Right-side GIF */}
          <div className="absolute right-20 top-0 z-0 pointer-events-none">
            <div className="rounded-[100px] overflow-hidden w-87.5 h-87.5 max-w-full">
              <Image
                src="/head-frame.gif"
                alt="hero animation"
                width={350}
                height={350}
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 300px, 350px"
              />
            </div>
          </div>

          {/* Bunny + Heading */}
          <div className="flex items-center gap-12 flex-wrap">
            <div className="shrink-0">
              <Image
                src="/head-bunny.png"
                alt="bunny mascot"
                width={228}
                height={221}
                className="h-auto relative -top-10 left-10 max-w-full"
                priority
                sizes="228px"
              />
            </div>

            <h1 className="font-extrabold text-[128px] leading-normal tracking-tight quantaFont">
              BUILT TO SCALE.
            </h1>
          </div>

          {/* Text + CTA */}
          <div className="mt-16 max-w-md">
            <p className="text-gray-200 text-lg mb-6">
              We create custom websites that make your work stand out and get you{" "}
              <span className="font-semibold italic text-white">paid.</span>
            </p>
            <GetStartedBtn path="#" />
          </div>
        </div>

        {/* MOBILE / TABLET VERSION */}
        <div className="block md:hidden relative z-10 w-full text-center">

          <h1 className="font-extrabold text-[40px] sm:text-[48px] leading-[1.1] tracking-tight">
            DESIGNED FOR
          </h1>

          <div className="font-extrabold text-[40px] sm:text-[48px] leading-[1.1] tracking-tight text-[#F9D94D]">
            <Typewriter />
          </div>

          {/* Bunny + Text Line */}
          <div className="mt-2 flex flex-col items-center">
            <div className="w-25">
              <Image
                src="/head-bunny.png"
                alt="bunny mascot"
                width={100}
                height={100}
                className="w-full h-auto object-contain relative -top-5"
                priority
                sizes="100px"
              />
            </div>

            <h1 className="font-extrabold text-[40px] sm:text-[48px] leading-[1.1] tracking-tight">
              BUILT TO SCALE.
            </h1>
          </div>

          {/* Centered GIF */}
          <div className="mt-2 flex justify-center">
            <div className="rounded-full overflow-hidden w-37.5 h-37.5 max-w-full">
              <Image
                src="/head-frame.gif"
                alt="hero animation"
                width={150}
                height={150}
                className="object-cover"
                priority
                sizes="150px"
              />
            </div>
          </div>

          {/* Description + CTA */}
          <div className="mt-10 max-w-sm mx-auto text-gray-200">
            <p className="text-sm sm:text-base mb-6">
              We create custom websites that make your work stand out and get you{" "}
              <span className="font-semibold italic text-white">paid.</span>
            </p>

            <div className="flex justify-center">
              <GetStartedBtn path="#" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="1014" height="211" viewBox="0 0 1014 211" fill="none">
          <path d="M1013.2 0.5C614.199 0.5 360.988 53.9068 0.199219 210.5M1013.2 18.8807C715.199 18.8807 518.94 69.912 263.199 210.5M1013.2 37.2615C808.699 37.2615 664.508 87.6972 509.699 210.5M1013.2 55.6422C896.699 55.6422 787.833 116.429 732.199 210.5M1013.2 74.023C958.199 87.567 916.46 190.281 910.699 210.04" stroke="white" />
        </svg>
      </div>
    </section>
  );
}
