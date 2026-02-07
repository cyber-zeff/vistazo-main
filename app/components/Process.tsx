"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DesktopCard = ({
    className,
}: {
    className?: string;
}) => (
    <div
        className={`rounded-4xl shadow-[0px_6px_8px_0px_rgba(0,0,0,0.25)] ${className}`}
    />
);
const MOBILE_CARDS = [
    { id: 1, color: "#361E98" },
    { id: 2, color: "#3A259F" },
    { id: 3, color: "#6A5ACD" },
];

const SWIPE_THRESHOLD = 120;

const ProcessSection = () => {
    const [cards, setCards] = useState(MOBILE_CARDS);

    return (
        <section className="w-full bg-[#FFFEF7] overflow-hidden py-[clamp(3rem,8vh,8rem)]">
            {/* Heading */}
            <h2 className="quantaFont text-[#121213] font-black uppercase text-center mb-[clamp(2rem,6vh,6rem)] text-[clamp(42px,8vw,128px)]">
                Find What Fits
            </h2>

            {/* ================= DESKTOP ================= */}
            <div className="hidden md:grid max-w-7xl mx-auto px-6 md:px-12 grid-cols-3 gap-x-8 lg:gap-x-12">

                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-8 items-center">
                    <DesktopCard
                        className="bg-[#3A259F] w-[clamp(260px,28svw,350px)] h-[clamp(420px,60svh,530px)] rounded-3xl "/>

                    <div
                        className="w-[clamp(260px,28svw,350px)] h-[clamp(150px,22svh,186px)] rounded-[30px] border-2 border-dashed border-[#3A259F]"/>
                </div>

                {/* CENTER BIG CARD */}
                <div className="flex justify-center">
                    <DesktopCard
                        className="bg-[#361E98] w-[clamp(260px,28svw,350px)] h-[clamp(500px,70svh,620px)] rounded-3xl"/>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-8 items-center">
                    <DesktopCard
                        className="bg-[#6A5ACD] w-[clamp(260px,28svw,350px)] h-[clamp(420px,60svh,531px)] rounded-3xl"/>
                    <DesktopCard
                        className="bg-[#6A5ACD] w-[clamp(260px,28svw,350px)] h-[clamp(150px,22svh,186px)] rounded-3xl"/>
                </div>

            </div>


            {/* ================= MOBILE (DRAG STACK) ================= */}
            <div className="md:hidden relative flex flex-col items-center gap-10">
                {/* CARD STACK */}
                <div className="relative h-[70vh] w-full flex justify-center overflow-hidden">
                    <AnimatePresence initial={false}>
                        {cards.map((card, index) => {
                            const isTop = index === 0;

                            return (
                                <motion.div
                                    key={card.id}
                                    layout
                                    drag={isTop ? "x" : false}
                                    dragElastic={0.25}
                                    onDragEnd={(_, info) => {
                                        if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
                                            setCards((prev) => {
                                                const [top, ...rest] = prev;
                                                return [...rest, top]; // infinite loop
                                            });
                                        }
                                    }}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1 - index * 0.05,
                                        y: index * 14,
                                        x: 0,
                                    }}
                                    exit={{
                                        x: isTop ? (Math.random() > 0.5 ? 600 : -600) : 0,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 28,
                                    }}
                                    className="absolute w-[70vw] h-[66vh] rounded-[40px]
                       shadow-[0px_6px_8px_0px_rgba(0,0,0,0.25)]"
                                    style={{
                                        backgroundColor: card.color,
                                        zIndex: 10 - index,
                                    }}
                                />
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* DASHED BOX (UNCHANGED + FIXED) */}
                <div className="w-[70vw] h-[22vh] rounded-[28px] border-2 border-dashed border-[#3A259F]" />
            </div>


        </section>
    );
};

export default ProcessSection;
