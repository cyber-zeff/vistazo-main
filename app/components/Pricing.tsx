"use client";

import React, { useState, useCallback, useRef } from "react";
import { motion, PanInfo } from "framer-motion";

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
        <section id="pricing" className="w-full bg-[#361E98] overflow-hidden py-16 lg:py-20 px-8 lg:px-12">
            {/* Title */}
            <h2 className="quantaFont text-[#F9D94D] font-black uppercase text-center mb-12 lg:mb-16 text-[clamp(48px,10vw,128px)] leading-none">
                Find What Fits
            </h2>

            {/* ================= DESKTOP LAYOUT ================= */}
            <div className="hidden lg:block max-w-[1280px] mx-auto">
                <div className="relative h-[750px]">
                    {/* Left Column */}
                    <div className="absolute left-0 top-0 flex flex-col gap-8">
                        <div className="bg-[#FFFEF7] w-[clamp(280px,24vw,354px)] h-[clamp(450px,36vw,532px)] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]" />
                        <div className="w-[clamp(280px,24vw,354px)] h-[clamp(140px,12vw,186px)] rounded-[32px] border-2 border-dashed border-[#FFFEF7]" />
                    </div>

                    {/* Center Column (Tallest) */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                        <div className="bg-[#FFFEF7] w-[clamp(280px,24vw,354px)] h-[clamp(520px,42vw,620px)] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]" />
                    </div>

                    {/* Right Column */}
                    <div className="absolute right-0 top-0 flex flex-col gap-8">
                        <div className="bg-[#6755CF] w-[clamp(280px,24vw,354px)] h-[clamp(450px,36vw,532px)] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]" />
                        <div className="bg-[#6755CF] w-[clamp(280px,24vw,354px)] h-[clamp(140px,12vw,186px)] rounded-[32px] shadow-[4px_6px_8px_0px_rgba(0,0,0,0.25)]" />
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
                <div className="w-[75vw] max-w-[340px] h-[20vh] min-h-[140px] max-h-[186px] rounded-[32px] border-2 border-dashed border-[#FFFEF7]" />

                {/* Swipe Indicator (Optional) */}
                <p className="text-[#FFFEF7] text-sm opacity-60 text-center">
                    Swipe to explore
                </p>
            </div>
        </section>
    );
};

export default ProcessSection;
