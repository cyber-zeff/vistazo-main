"use client";

import Image from "next/image";
// import BookACall from "./BookACall";
import Typewriter from "./Typewriter";
// import DesktopHeroFrames from "./HeroFrameAnimation";
import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 884;
const FPS = 30;

export default function Showcase() {
  const imgRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    let rafId: number;

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;

      if (delta >= 1000 / FPS) {
        frameRef.current = (frameRef.current + 1) % TOTAL_FRAMES;

        if (imgRef.current) {
          imgRef.current.src = `/Comp 1/Comp 1_${String(
            frameRef.current
          ).padStart(5, "0")}.png`;
        }

        lastTimeRef.current = time;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative bg-main text-white lg:h-svh lg:-mt-3 h-auto w-full flex flex-col items-center overflow-hidden mt-3 md:mt-0">
      {/* DESKTOP / LAPTOP VERSION */}
      <section
        className="hidden lg:block min-[1680px]:absolute min-[1680px]:-top-10 w-full h-full overflow-hidden z-0"
        aria-hidden="true"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="block mx-auto h-full w-full max-w-[1440px] max-[1600px]:object-cover object-contain"
        >
          <source src="/hero-animation.webm" type="video/webm" />
        </video>
      </section>


      <div className="lg:hidden relative w-full max-w-360 px-6 md:px-20 py-12 md:pt-8 md:pb-0 flex justify-center">
        {/* MOBILE / TABLET VERSION */}
        <div className="">
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
