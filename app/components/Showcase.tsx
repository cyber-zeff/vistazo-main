"use client";

import Image from "next/image";
// import BookACall from "./BookACall";
import Typewriter from "./Typewriter";

export default function Showcase() {
  return (
    <section className="relative bg-main text-white lg:-mt-12 h-auto w-full flex flex-col items-center overflow-hidden mt-3 md:mt-0">
      {/* DESKTOP / LAPTOP VERSION */}
      <section
        className="hidden sm:block min-[1680px]:absolute min-[1680px]:-top-10 w-full h-full overflow-hidden z-0"
        aria-hidden="true"
      >
        <img
          src="/hero.gif"
          className="bg-main"
          alt=""
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          style={{ pointerEvents: "none", userSelect: "none" }}
        />
      </section>


      {/* MOBILE / TABLET VERSION */}
      <section className="sm:hidden relative w-full bg-main -top-10 -mb-20 overflow-hidden z-0" aria-hidden="true">
        <img
          src="/hero-mobile.gif"
          className="bg-main"
          alt=""
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          style={{ pointerEvents: "none", userSelect: "none" }}
        />

      </section>

      <div className="max-sm:hidden absolute bottom-0 right-0 z-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="1014" height="211" viewBox="0 0 1014 211" fill="none">
          <path d="M1013.2 0.5C614.199 0.5 360.988 53.9068 0.199219 210.5M1013.2 18.8807C715.199 18.8807 518.94 69.912 263.199 210.5M1013.2 37.2615C808.699 37.2615 664.508 87.6972 509.699 210.5M1013.2 55.6422C896.699 55.6422 787.833 116.429 732.199 210.5M1013.2 74.023C958.199 87.567 916.46 190.281 910.699 210.04" stroke="white" />
        </svg>
      </div>
    </section>
  );
}
