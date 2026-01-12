"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const faqs = [
    {
        question: "What exactly do I get at the end?",
        answer: "Complete Visual Identity (Logo, Color Palette, Fonts), A Fully Built Custom Website, All The Copywriting, SEO Optimization, And A Free LinkedIn Profile Refresh. Plus All The Source Files — You Own Everything.",
    },
    {
        question: "What exactly do I get at the end?",
        answer: "Complete Visual Identity (Logo, Color Palette, Fonts), A Fully Built Custom Website, All The Copywriting, SEO Optimization, And A Free LinkedIn Profile Refresh. Plus All The Source Files — You Own Everything.",
    },
    {
        question: "What exactly do I get at the end?",
        answer: "Complete Visual Identity (Logo, Color Palette, Fonts), A Fully Built Custom Website, All The Copywriting, SEO Optimization, And A Free LinkedIn Profile Refresh. Plus All The Source Files — You Own Everything.",
    },
    {
        question: "What exactly do I get at the end?",
        answer: "Complete Visual Identity (Logo, Color Palette, Fonts), A Fully Built Custom Website, All The Copywriting, SEO Optimization, And A Free LinkedIn Profile Refresh. Plus All The Source Files — You Own Everything.",
    },
    {
        question: "What exactly do I get at the end?",
        answer: "Complete Visual Identity (Logo, Color Palette, Fonts), A Fully Built Custom Website, All The Copywriting, SEO Optimization, And A Free LinkedIn Profile Refresh. Plus All The Source Files — You Own Everything.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="w-full flex justify-center py-10">
            <div className="grid gap-8">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <motion.div
                            key={index}
                            layout
                            initial={false}
                            animate={{
                                height: isOpen ? 200 : 100,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 160,
                                damping: 15,
                            }}
                            onClick={() =>
                                setActiveIndex(isOpen ? null : index)
                            }
                            className="cursor-pointer bg-[#361E98] rounded-3xl shadow-[4px_6px_4px_0_rgba(0,0,0,0.25)] px-8 py-10.5 flex items-center justify-between overflow-hidden shrink-0 border-2 border-[#121213]"
                            style={{
                                width: "680px",
                                maxWidth: "90vw",
                            }}
                        >
                            {/* LEFT CONTENT */}
                            <div className="flex-1">
                                <h3 className="text-[20px] font-medium leading-normal">
                                    {faq.question}
                                </h3>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 text-[16px] leading-5.5 font-medium whitespace-pre-line capitalize"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* RIGHT ICON / BUNNY */}
                            {/* RIGHT ICON / BUNNY */}
                            <div className="relative -top-3 w-55 h-full flex justify-end">
                                {/* STAR (ALWAYS VISIBLE) */}
                                <motion.span
                                    animate={{ rotate: isOpen ? 90 : -90 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 z-10"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35"
                                        height="35"
                                        viewBox="0 0 35 35"
                                        fill="none"
                                    >
                                        <path
                                            d="M17.5 0C21.6501 14.109 35 17.5 35 17.5C35 17.5 22.3021 20.891 17.5 35C12.6979 20.891 0 17.5 0 17.5C0 17.5 13.3499 14.109 17.5 0Z"
                                            fill="#F9D94D"
                                        />
                                    </svg>
                                </motion.span>


                                {/* BUNNY (ONLY WHEN OPEN) */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, x: 10 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, x: 10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src="/head-bunny.png"
                                                alt="Hi Bunny"
                                                width={200}
                                                height={197}
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
