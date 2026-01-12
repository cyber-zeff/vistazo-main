"use client";

import ProcessBtn from "./ProcessBtns";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const andRef = useRef<HTMLSpanElement>(null);
    const resultsRef = useRef<HTMLSpanElement>(null);
    const extraRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!headingRef.current) return;

        const ctx = gsap.context(() => {
            // TEXT ANIMATIONS (UNCHANGED)
            gsap.fromTo(
                resultsRef.current,
                { x: () => window.innerWidth + 150 },
                {
                    x: 0,
                    ease: "back.out(0.6)",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        end: "top 25%",
                        scrub: 3,
                        invalidateOnRefresh: true,
                    },
                }
            );

            gsap.fromTo(
                [andRef.current, extraRef.current],
                { x: () => -(window.innerWidth + 150) },
                {
                    x: 0,
                    ease: "back.out(0.6)",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        end: "top 25%",
                        scrub: 3,
                        invalidateOnRefresh: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full bg-[#FFFFFF] overflow-hidden pb-10">
            {/* TEXT */}
            <div className="z-10 text-center mb-10">
                <h2 ref={headingRef}>
                    <span className="relative inline-block mx-3">
                        <span
                            ref={andRef}
                            className="absolute -top-5 left-20 -rotate-[5deg] w-18 h-8.25 py-0.75 px-2.5 rounded-[100px] bg-[#F95DAF] text-white text-[20px] font-black"
                        >
                            And
                        </span>
                    </span>

                    <span className="quantaFont text-[96px] font-black text-black">
                        we keep our
                    </span>

                    <span className="relative inline-block ml-3">
                        <span
                            ref={resultsRef}
                            className="absolute -top-3 right-18 rotate-3 rounded-[100px] bg-[#6755CF] px-2.5 py-1.25 w-27 h-9.5 text-white text-[20px] font-black"
                        >
                            Results
                        </span>
                    </span>

                    <br />

                    <span className="quantaFont text-[96px] font-black text-black">
                        process simple
                    </span>

                    <span className="flex justify-center">
                        <span
                            ref={extraRef}
                            className="relative bottom-9 -left-20 rounded-[100px] bg-[#F9D94D] -rotate-3 w-45.5 h-10.5 px-2.5 py-1.5 text-[#361E98] text-[20px] font-black"
                        >
                            Extraordinary!
                        </span>
                    </span>
                </h2>
            </div>

            {/* STATIC CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-0 place-items-center">
                {/* Left Card */}
                <div className="flex flex-col justify-end items-center gap-7.5 p-12.5 h-130 w-100 rounded-[50px] bg-gray-200 border border-[#121213] shadow-[8px_12px_2.5px_0_rgba(0,0,0,0.25)]">
                    <ProcessBtn path="#" name="Get Started" bg="#FFFEF7" />
                </div>

                {/* Center Card (Featured) */}
                <div className="relative lg:-top-10 md:top-0 top-0 flex flex-col justify-end items-center bg-[#361E98] gap-7.5 px-12.5 py-10 h-130 w-100 rounded-[50px] border border-[#121213] shadow-[8px_12px_2.5px_0_rgba(0,0,0,0.25)]">

                    <span className="absolute top-6 right-6 flex justify-center items-center w-31.25 h-8.75 rounded-[25px] border border-[#121213] bg-[#F9D94D]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                            <path d="M6 7.45575C7.74975 4.97475 6.12525 1.5885 5.25 0.75C5.25 3.29625 3.57375 4.72425 2.49975 5.7795C1.42725 6.8355 0.75 8.25 0.75 9.9705C0.75 12.7485 3.1005 15 6 15C8.8995 15 11.25 12.7485 11.25 9.9705C11.25 8.6865 10.326 6.66825 9.50025 5.7795C7.93725 8.29425 7.0575 8.29425 6 7.45575Z"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="text-black text-[16px] leading-normal capitalize font-medium ml-2">
                            Popular
                        </span>
                    </span>

                    <ProcessBtn path="#" name="Let's Talk" bg="#F9D94D" />
                </div>


                {/* Right Card */}
                <div className="flex flex-col justify-end items-center gap-7.5 px-12.5 py-10 h-130 w-100 rounded-[50px] bg-gray-200 border border-[#121213] shadow-[8px_12px_2.5px_0_rgba(0,0,0,0.25)]">
                    <ProcessBtn path="#" name="Get Started" bg="#FFFEF7" />
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
