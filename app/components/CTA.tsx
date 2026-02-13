"use client"

import { motion } from "framer-motion";
import { useState } from "react";

const Star = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
    >
        <path
            d="M15.908 0.000165228C21.272 13.6937 34.8666 15.9083 34.8666 15.9083C34.8666 15.9083 22.5126 20.3932 18.9585 34.867C12.945 21.2302 -0.000165228 18.9588 -0.000165228 18.9588C-0.000165228 18.9588 13.0034 14.4172 15.908 0.000165228Z"
            fill="#F9D94D"
        />
    </svg>
);

export default function CTASection() {
    const [hover, setHover] = useState(false);
    return (
        <>
            {/* Padding wrapper */}
            <div className="bg-[#FFFEF7] w-full pt-10 md:pt-20 lg:pt-20">

                <div className="w-full m-0 p-0 overflow-hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 175"
                        className="max-md:relative max-md:-left-27 lg:w-full h-32.75 lg:h-auto"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M-144 175V0.339359C-108.583 3.50745 -81.339 27.9418 -76.3442 62.7827C-64.0845 -20.4744 55.7888 -20.4744 68.0486 62.7827C81.2164 -20.4743 200.182 -21.3793 211.987 62.7827C223.793 -20.9269 344.12 -20.4744 355.926 62.7827C368.186 -20.9269 488.513 -20.0219 500.319 62.7827C513.033 -21.832 633.814 -19.5696 644.258 62.7827C649.252 -19.1173 781.385 -21.8322 788.196 62.7827C800.91 -20.4748 919.875 -20.9273 932.589 62.7827C945.303 -20.9273 1064.96 -20.4151 1076.53 62.7827C1088.79 -20.9276 1206.39 -20.9276 1220.47 62.7827C1234.54 -20.9277 1351.69 -20.4752 1364.86 62.7827C1375.76 -19.5701 1497.45 -21.3801 1508.8 62.7827C1513.34 30.2035 1539.22 3.50678 1576 0.339359V175L-144 175Z"
                            fill="#361E98" />
                    </svg>
                </div>
            </div>

            <section className="bg-main relative -top-2">
                <h2 className="capitalize text-center text-[16px] md:text-[20px] leading-normal font-normal text-balance max-w-90.25 mx-auto mb-8 md::mb-22 pt-2">
                    Decided to build with us?
                </h2>

                <h2 className="max-md:px-8 quantaFont leading-normal font-black text-[clamp(36px,8vw,64px)] md:text-[clamp(64px,8vw,96px)] uppercase text-center mb-8 md:mb-16 text-balance max-w-232.75 mx-auto">
                    Let&apos;s Get Cooking <span className="text-[#F9D94D]">Good Looking!</span>
                </h2>

                <div className="flex items-center justify-center shrink-0 gap-2 self-stretch">
                    <motion.a
                        href="#"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        animate={{
                            y: hover ? 6 : 0,
                            boxShadow: hover
                                ? "0px 0px 0px 0px #ffffff"
                                : "0px 10px 0px 0px #ffffff",
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="relative overflow-visible uppercase bg-transparent w-64 h-15 min-[530px]:w-64 min-[530px]:h-18 md:w-87.5 md:h-21.75 px-20 py-5 border border-white rounded-[500px] text-white text-[20px] min-[530px]:text-[24px] md:text-[32px] font-medium leading-normal -tracking-[1.6px] text-center flex items-center justify-center"
                    >
                        {/* Text */}
                        <span className="relative z-10">Lessgooo!!!</span>

                        {/* Top-left star */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: hover ? 1 : 0,
                                scale: hover ? 1 : 0.5,
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-5 -top-4 rotate-[9deg]"
                        >
                            <Star />
                        </motion.span>

                        {/* Bottom-right star */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: hover ? 1 : 0,
                                scale: hover ? 1 : 0.5,
                            }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                            className="absolute right-6 -bottom-2"
                        >
                            <Star />
                        </motion.span>
                    </motion.a>
                </div>

            </section>
        </>
    );
}
