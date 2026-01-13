"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";


const faqs = [
    {
        question: "What exactly do I get at the end?",
        answer:
            "Complete visual identity (logo, color palette, fonts), a fully built custom website, all the copywriting, SEO optimization, and a free LinkedIn profile refresh. Plus all the source files. you own everything.",
    },
    {
        question: "How long does a typical project take?",
        answer:
            "Project timelines vary depending on scope. A landing page may take 1–2 weeks, while full websites or branding projects can take 4–8 weeks. We’ll provide a detailed timeline after the initial discovery call.",
    },
    {
        question: "Can you help with just one part of the project?",
        answer:
            "Absolutely. we’re happy to collaborate in the way that best complements your team’s workflow. We can jump in as creative partners, support your internal team, or handle everything from concept to execution.",
    },
    {
        question: "Do you offer payment plans?",
        answer:
            "Yes, we do. Not everyone has the full budget sitting around, and we get that. Ask us about payment options and we'll figure something out that works.",
    },
    {
        question: "What About ongoing Support After Launch?",
        answer:
            "Yes, We provide ongoing maintenance, performance monitoring, and retainer-based support to ensure your website stays optimized, secure, and aligned with your business goals.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    function useIsMobile(breakpoint = 568) {
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const check = () => setIsMobile(window.innerWidth < breakpoint);
            check();
            window.addEventListener("resize", check);
            return () => window.removeEventListener("resize", check);
        }, [breakpoint]);

        return isMobile;
    }

    return (
        <section className="w-full flex justify-center items-center py-16 px-4 bg-[#FFFEF7] text-[#121213]">
            <div className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-2 place-items-center gap-12 items-start">

                {/* ================= LEFT COLUMN ================= */}
                <div className="flex flex-col justify-between self-start xl:h-158.75">
                    {/* Heading */}
                    <div className="mb-10 xl:mb-0 mx-auto">
                        <h2 className="quantaFont text-[44px] sm:text-[54px] md:text-[64px] font-black leading-normal">
                            GOT QUESTIONS?
                            <br />
                            BET YOU DO.
                        </h2>
                        <p className="mt-4 text-[20px] max-w-md font-medium leading-normal">
                            What We Do, How We Do It, And What You Actually Get
                            At The End.
                        </p>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-[#361E98] text-white rounded-[30px] p-8 sm:w-131.25 sm:h-56.25">
                        <h3 className="text-[20px] font-bold mb-2 leading-normal">
                            Didn’t find what you were looking for?
                        </h3>
                        <p className="text-[16px] leading-normal font-normal mb-4 max-w-105.75">
                            Jump on a <span className="font-bold">free call</span> with our team.
                            We’ll talk about what you need, figure out if we’re a
                            good fit, and map out how we’d actually execute your brand.
                        </p>

                        <button className="flex items-center gap-2 py-1.75 pr-6.25 pl-7.75 rounded-[83px] w-45 h-10.5 bg-white text-[#361E98] text-[16px] font-bold leading-normal -tracking-[0.8] border-2 border-transparent
                            transition-all duration-300 ease-out hover:bg-transparent hover:border-white hover:text-white">
                            Claim Yours!
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="currentColor" className="transition-colors duration-300">
                                    <path d="M7.51891 1.83109L1.16674 1.83109C0.907464 1.83109 0.693996 1.74207 0.526333 1.56404C0.358671 1.386 0.275056 1.16714 0.275488 0.907431C0.286291 0.658961 0.375307 0.445494 0.542538 0.267028C0.709769 0.0885617 0.923236 -0.00045478 1.18294 -2.25222e-05L9.73893 -2.2733e-05C9.86857 -2.27119e-05 9.98481 0.0241759 10.0877 0.0725735C10.1905 0.120971 10.2847 0.188814 10.3703 0.276102C10.4558 0.363391 10.5232 0.458025 10.5725 0.560006C10.6218 0.661986 10.6462 0.778011 10.6457 0.908079L10.6457 9.46407C10.6457 9.70174 10.5565 9.9098 10.378 10.0883C10.1996 10.2667 9.98632 10.3612 9.73828 10.3715C9.47901 10.3715 9.26014 10.2823 9.08168 10.1038C8.90321 9.92536 8.81419 9.70671 8.81463 9.44787L8.81527 3.12745L1.57185 10.3709C1.3882 10.5545 1.17192 10.6464 0.923021 10.6464C0.674119 10.6464 0.458274 10.5545 0.275488 10.3709C0.0927003 10.1872 0.000874152 9.97095 1.03101e-05 9.72205C-0.000853869 9.47314 0.0909716 9.2573 0.275488 9.07451L7.51891 1.83109Z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* ================= RIGHT COLUMN ================= */}
                <div className="grid gap-8 text-white">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        const isMobile = useIsMobile();
                        const isTopCard = index === 0

                        return (
                            <motion.div key={index} layout initial={false}
                                animate={{ height: isOpen ? isMobile ? isTopCard ? 400 : 300 : 200 : 100, }}
                                transition={{ type: "spring", stiffness: 160, damping: 15, }}
                                onClick={() => setActiveIndex(isOpen ? null : index)}
                                className="relative cursor-pointer w-150 md:w-220 lg:w-170 max-w-[90vw] bg-[#361E98] rounded-3xl shadow-[4px_6px_4px_0_rgba(0,0,0,0.25)]
                                    px-8 pt-8.5 pb-10.5 flex items-start justify-between overflow-hidden shrink-0 border-2 border-[#121213]">
                                {/* STAR */}
                                <motion.span
                                    animate={{ rotate: isOpen ? 90 : -90 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute top-7.5 right-10 z-10" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" >
                                        <path d="M17.5 0C21.6501 14.109 35 17.5 35 17.5C35 17.5 22.3021 20.891 17.5 35C12.6979 20.891 0 17.5 0 17.5C0 17.5 13.3499 14.109 17.5 0Z" fill="#F9D94D" />
                                    </svg>
                                </motion.span>

                                {/* LEFT CONTENT */}
                                <div className="flex-1 sm:flex-1 max-[650px]:flex-[1.4]">
                                    <h3 className={`text-[18px] font-medium leading-normal ${isTopCard ? '' : 'mr-10'}`}> {faq.question} </h3>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-4 text-[16px] leading-5.5 font-medium whitespace-pre-line capitalize">
                                                {faq.answer}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* BUNNY */}
                                {isTopCard && (
                                    <div className="relative -top-3 w-55 max-[650px]:w-36 h-full flex justify-end shrink-0">
                                        {/* BUNNY */}
                                        <AnimatePresence>
                                            {isTopCard && isOpen && (
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
                                                        className="w-25 h-27 max-[650px]:w-20 max-[650px]:h-22 sm:w-30 sm:h-32 md:w-49.25 md:h-50 object-contain"
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>)}
                            </motion.div>);
                    })}
                </div>
            </div>
        </section>
    );
}
