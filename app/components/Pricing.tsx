"use client";

import React, { useState, useCallback, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import PricingBtn from "./PricingBtns";
import { ChartSpline, FileCheck, FileHeart, Infinity, SparkleIcon, Sparkles, TimerIcon, TrendingUp } from "lucide-react";
import BookACall from "./BookACall";
import Link from "next/link";

// Card data for infinite cycling
const CARD_VARIANTS = [
    { id: "card-1", color: "#FFFEF7" }, // White
    { id: "card-2", color: "#6755CF" }, // Purple
    { id: "card-3", color: "#FFFEF7" }, // White
    { id: "card-4", color: "#6755CF" }, // Purple
];

const SWIPE_CONFIDENCE_THRESHOLD = 5000;
const SWIPE_VELOCITY_THRESHOLD = 500;

const ProcessSection = () => {
    // State for mobile infinite carousel
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

    // Track if we're currently animating
    const isAnimating = useRef(false);

    // Paginate function for infinite loop
    const paginate = useCallback((newDirection: number) => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        setCurrentIndex(([prevIndex]) => {
            const nextIndex = (prevIndex + newDirection + CARD_VARIANTS.length) % CARD_VARIANTS.length;
            return [nextIndex, newDirection];
        });

        // Reset animation lock after transition
        setTimeout(() => {
            isAnimating.current = false;
        }, 300);
    }, []);

    // Calculate swipe power for gesture detection
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    // Handle drag end
    const handleDragEnd = useCallback(
        (_event: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -SWIPE_CONFIDENCE_THRESHOLD || velocity.x < -SWIPE_VELOCITY_THRESHOLD) {
                paginate(1); // Swipe left
            } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD || velocity.x > SWIPE_VELOCITY_THRESHOLD) {
                paginate(-1); // Swipe right
            }
        },
        [paginate]
    );

    // Get visible cards (current + next 2 for stacking effect)
    const getVisibleCards = () => {
        const cards = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % CARD_VARIANTS.length;
            cards.push({ ...CARD_VARIANTS[index], stackIndex: i });
        }
        return cards;
    };

    const visibleCards = getVisibleCards();

    return (
        <section id="pricing" className="w-full bg-white text-black overflow-hidden py-16 lg:py-20 px-8 lg:px-12">
            {/* Title */}
            <h2 className="quantaFont font-black uppercase text-center mb-12 lg:mb-16 text-[clamp(48px,10vw,128px)] leading-none">
                Find What Fits
            </h2>

            {/* ================= DESKTOP LAYOUT ================= */}
            <div className="hidden lg:block max-w-[1280px] mx-auto">
                <div className="relative h-[750px]">
                    {/* Left Column */}
                    <div className="absolute left-0 top-0 flex flex-col gap-8">
                        <div className="py-8 flex flex-col justify-between bg-[#FFF] w-[clamp(280px,24vw,354px)] h-[clamp(450px,36vw,532px)] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]">
                            <div className="mx-4 ">
                                {/* <FileHeart size={25} /> */}
                                <h2 className="quantaFont text-[30px] lg:text-[26px] xl:[36px] leading-normal">Landing Page</h2>
                                <p className="mt-2 text-[18px] leading-tight">Ideal for designing or redesigning a website to increase your conversion rates</p>
                            </div>

                            <div className="mx-4 pt-6 pl-3 border-t border-gray-300">
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <TimerIcon />
                                    <p className="text-[16px]">04–07 day turnaround</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <Sparkles />
                                    <p className="text-[16px]">Custom layout tailored for conversions</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <TrendingUp />
                                    <p className="text-[16px]">SEO-friendly structure</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <FileHeart />
                                    <p className="text-[16px]">50/50 secure payment process</p>
                                </div>
                            </div>

                            <PricingBtn path="#" name="Get Started" bg="black" />
                        </div>

                        <div className="px-4 flex flex-col justify-around w-[clamp(280px,24vw,354px)] h-[clamp(140px,12vw,186px)] rounded-[32px] border-2 border-dashed border-[#123123]">
                            <div className="mt-1">
                                <h2 className="quantaFont text-[30px] lg:text-[24px] xl:[32px] leading-normal">No-Code Dev</h2>
                                <p className="mt-1 text-[16px] leading-tight">We will build your website in framer for an additional fee.</p>
                            </div>
                            <Link href={"#"} className="bg-black w-full rounded-full text-white text-center text-[18px] py-2">Add</Link>
                        </div>
                    </div>

                    {/* Center Column (Tallest) */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                        <div className="py-8 flex flex-col justify-between bg-[#FFF] w-[clamp(280px,24vw,354px)] h-[clamp(520px,42vw,620px)] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]">
                            <div className="mx-4 ">
                                {/* <FileHeart size={25} /> */}
                                <h2 className="quantaFont text-[30px] lg:text-[26px] xl:[36px] leading-normal">Partnership</h2>
                                <p className="mt-2 text-[18px] leading-tight">Tailored for businesses with ongoing design</p>
                            </div>

                            <div className="mx-4 pt-6 pl-3 border-t border-gray-300">
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <TimerIcon />
                                    <p className="text-[16px]">5-7 Days turnaround time</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <Infinity />
                                    <p className="text-[16px]">Unlimited Requests</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <ChartSpline />
                                    <p className="text-[16px]">Monthly CRO & Growth Strategy</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <TrendingUp />
                                    <p className="text-[16px]">SEO-friendly structure</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <FileHeart />
                                    <p className="text-[16px]">50/50 secure payment process</p>
                                </div>
                            </div>

                            <PricingBtn path="#" name="Get Started" bg="black" />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="absolute right-0 top-0 flex flex-col gap-8">
                        <div className="py-8 flex flex-col justify-between text-white bg-[#6755CF] w-[clamp(280px,24vw,354px)] h-[clamp(450px,36vw,532px)] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]">
                            <div className="mx-4 ">
                                {/* <FileHeart size={25} /> */}
                                <h2 className="quantaFont text-[30px] lg:text-[26px] xl:[36px] leading-normal">Custom</h2>
                                <p className="mt-2 text-[18px] leading-tight">Tailored digital experiences built for unique business needs</p>
                            </div>

                            <div className="mx-4 pt-6 pl-3 border-t border-gray-300">
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <TimerIcon />
                                    <p className="text-[16px]">Fully Custom Timeline & Scope</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <Infinity />
                                    <p className="text-[16px]">Unlimited Requests</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <FileCheck />
                                    <p className="text-[16px]">End-to-End Web Dev</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <TrendingUp />
                                    <p className="text-[16px]">Advanced SEO & Marketing</p>
                                </div>
                                <div className="flex items-center gap-8 lg:mb-2 xl:mb-4">
                                    <FileHeart />
                                    <p className="text-[16px]">50/50 secure payment process</p>
                                </div>
                            </div>

                            <PricingBtn path="#" name="Get Started" bg="#FFF" />
                        </div>
                        <div className="bg-[#6755CF] p-4 text-white w-[clamp(280px,24vw,354px)] h-[clamp(140px,12vw,186px)] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]">
                            <h2 className="quantaFont text-[30px] lg:text-[26px] xl:[36px] leading-normal mb-3 text-center">Can't Decide?</h2>
                            <PricingBtn path="#" name="Book a Call" bg="#FFF" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MOBILE CAROUSEL (INFINITE) ================= */}
            <div className="lg:hidden relative flex flex-col items-center gap-8">
                {/* Card Stack Container */}
                <div className="relative w-full h-[65vh] min-h-[500px] flex items-start justify-center pt-8">
                    {visibleCards.map((card) => {
                        const isTopCard = card.stackIndex === 0;
                        const zIndex = 10 - card.stackIndex;
                        const scale = 1 - card.stackIndex * 0.05;
                        const yOffset = card.stackIndex * 16;

                        return (
                            <motion.div
                                key={`${card.id}-${card.stackIndex}`}
                                className="absolute w-[75vw] max-w-[340px] h-[56vh] min-h-[450px] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]"
                                style={{
                                    backgroundColor: card.color,
                                    zIndex,
                                }}
                                drag={isTopCard ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.7}
                                onDragEnd={isTopCard ? handleDragEnd : undefined}
                                animate={{
                                    scale,
                                    y: yOffset,
                                    x: 0,
                                    opacity: 1,
                                }}
                                initial={{
                                    scale,
                                    y: yOffset,
                                    x: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    x: direction > 0 ? 400 : -400,
                                    opacity: 0,
                                    transition: { duration: 0.3 },
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                }}
                                whileTap={isTopCard ? { cursor: "grabbing" } : {}}
                            />
                        );
                    })}
                </div>

                {/* Bottom Dashed Box */}
                <div className="px-4 flex flex-col justify-around w-[75vw] max-w-[340px] h-[20vh] min-h-[140px] max-h-[186px] rounded-[32px] border-2 border-dashed border-[#123123]">
                    <div className="mt-1">
                        <h2 className="quantaFont text-[30px] lg:text-[24px] xl:[32px] leading-normal">No-Code Dev</h2>
                        <p className="mt-1 text-[16px] leading-tight">We will build your website in framer for an additional fee.</p>
                    </div>
                    <Link href={"#"} className="bg-black w-full rounded-full text-white text-center text-[18px] py-2">Add</Link>
                </div>

                {/* Swipe Indicator (Optional) */}
                <p className="text-sm opacity-60 text-center">
                    Swipe to explore
                </p>
            </div>
        </section>
    );
};

export default ProcessSection;
