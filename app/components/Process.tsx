"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const andRef = useRef<HTMLSpanElement>(null);
    const resultsRef = useRef<HTMLSpanElement>(null);
    const extraRef = useRef<HTMLSpanElement>(null);

    // 👉 Card refs (ADDED)
    const leftCardRef = useRef<HTMLDivElement>(null);
    const centerCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!headingRef.current) return;

        const ctx = gsap.context(() => {
            // ======================
            // TEXT ANIMATIONS (UNCHANGED)
            // ======================
            gsap.fromTo(
                resultsRef.current,
                { x: () => window.innerWidth + 150 },
                {
                    x: 0,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 75%",
                        end: "top 40%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                }
            );

            gsap.fromTo(
                [andRef.current, extraRef.current],
                { x: () => -(window.innerWidth + 150) },
                {
                    x: 0,
                    ease: "back.out(1.2)",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 75%",
                        end: "top 40%",
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // ======================
            // CARD ANIMATIONS (NEW)
            // ======================

            // ======================
            // CARD ANIMATION (REFINED)
            // ======================

            const cards = [
                rightCardRef.current,
                centerCardRef.current,
                leftCardRef.current,
            ];

            // Initial state
            gsap.set(cards, {
                y: 220,
                scale: 0.92,
                opacity: 0,
            });

            const cardsTl = gsap.timeline({
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 35%",
                    end: "bottom 5%", // 👈 longer scroll = smoother pacing
                    scrub: 1.5,       // 👈 slows everything down
                    invalidateOnRefresh: true,
                },
            });

            // ---- ENTER (slow + smooth) ----
            cardsTl.to(cards, {
                y: 0,
                scale: 1,
                opacity: 1,
                ease: "power3.out",
                stagger: {
                    each: 0.55, // 👈 noticeable delay
                },
                duration: 1.6,
            });

            // ---- HOLD (cards together moment) ----
            cardsTl.to({}, { duration: 0.8 });

            // ---- EXIT (MIRROR of enter) ----
            cardsTl.to(cards, {
                y: -220,
                scale: 0.98,
                opacity: 0,
                ease: "power3.inOut",
                stagger: {
                    each: 0.55, // 👈 SAME stagger as entry
                },
                duration: 1.6,
            });


            // ======================
            // FLOATY / BOUNCY EFFECT
            // ======================

            gsap.to(cards, {
                y: (i) => (i === 1 ? -26 : -16),
                ease: "sine.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 15%",
                    end: "bottom -40%",
                    scrub: 2.5, // 👈 ultra-smooth float
                    invalidateOnRefresh: true,
                },
            });

        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full bg-[#FFFEF6] overflow-visible pb-10">
            {/* Heading */}
            <div className="z-10 text-center">
                <h2 ref={headingRef}>
                    <span className="relative inline-block mx-3">
                        <span
                            ref={andRef}
                            className="absolute -top-5 left-20 -rotate-[5deg] w-18 h-8.25 py-0.75 px-2.5 rounded-[100px] bg-[#F95DAF] text-white text-[20px] leading-normal font-black"
                        >
                            And
                        </span>
                    </span>

                    <span className="quantaFont text-[96px] leading-normal font-black text-black">
                        we keep our
                    </span>

                    <span className="relative inline-block ml-3">
                        <span
                            ref={resultsRef}
                            className="absolute -top-3 right-18 rotate-3 rounded-[100px] bg-[#6755CF] px-2.5 py-1.25 w-27 h-9.5 text-white text-[20px] leading-normal font-black"
                        >
                            Results
                        </span>
                    </span>

                    <br />

                    <span className="quantaFont text-[96px] leading-normal font-black text-black">
                        process simple
                    </span>

                    <span className="flex justify-center">
                        <span
                            ref={extraRef}
                            className="relative bottom-9 -left-20 rounded-[100px] bg-[#F9D94D] -rotate-3 w-45.5 h-10.5 px-2.5 py-1.5 text-[#361E98] text-[20px] leading-normal font-black"
                        >
                            Extraordinary!
                        </span>
                    </span>
                </h2>
            </div>

            {/* Cards (UNCHANGED visually — only refs added) */}
            <div className="relative z-0 mt-24 flex justify-center gap-8 px-4 -space-x-9">
                <div
                    ref={leftCardRef}
                    className="h-100 w-85 rotate-2 rounded-[25px] bg-gray-200"
                />
                <div
                    ref={centerCardRef}
                    className="h-100 w-85 rotate-6 rounded-[25px] bg-gray-300 relative bottom-4"
                />
                <div
                    ref={rightCardRef}
                    className="h-100 w-85 rotate-[8deg] rounded-[25px] bg-gray-400"
                />
            </div>
        </section>
    );
};

export default ProcessSection;
