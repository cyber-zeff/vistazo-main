"use client"

import { motion, type MotionProps } from "framer-motion"
import Image from "next/image"

export default function LinkedInBrand() {
    const hoverStandUp: MotionProps = {
        whileHover: {
            y: -30,
            transition: {
                type: "spring",
                stiffness: 180,
                damping: 10,
                mass: 0.6,
            },
        },
    }

    return (
        <section className="w-full bg-[#FFFEF7] px-[22px] sm:px-[36px] md:px-[45px] lg:px-[45px]">
            <div className="bg-[#361E98] rounded-[21px] sm:rounded-[28px] lg:rounded-[30px] w-full max-w-380 mx-auto overflow-hidden relative px-[16px] py-[10px] sm:px-[24px] sm:py-[16px] lg:px-[32px] lg:py-[17px]">
                {/* Top Row: LinkedIn Icon + Limited Time Badge */}
                <div className="flex items-center justify-between w-full mb-[2px] sm:mb-[4px] lg:mb-0">
                    {/* LinkedIn Verified Icon */}
                    <svg
                        className="w-[14px] h-[12px] sm:w-[20px] sm:h-[17px] lg:w-[28px] lg:h-[24px]"
                        viewBox="0 0 28 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14 0L17.09 4.58L22.27 3.82L21.51 9.01L26.09 12.09L22.27 15.91L23.82 20.82L18.91 20.09L16.36 24.91L14 20.36L11.64 24.91L9.09 20.09L4.18 20.82L5.73 15.91L1.91 12.09L6.49 9.01L5.73 3.82L10.91 4.58L14 0Z"
                            fill="#F9D94D"
                        />
                        <path
                            d="M11.5 12.5L13 14.5L17 10"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {/* Limited Time Badge */}
                    <div className="bg-[#F9D94D] rounded-full px-[6px] py-[2px] sm:px-[9px] sm:py-[4px] lg:px-[13px] lg:py-[6px]">
                        <p className="font-medium text-black text-[7px] sm:text-[11px] lg:text-[16px] capitalize leading-normal">
                            Limited Time
                        </p>
                    </div>
                </div>

                {/* Main Content Row */}
                <div className="flex items-center justify-between">
                    {/* Left Content */}
                    <div className="flex flex-col gap-[10px] sm:gap-[20px] md:gap-[32px] lg:gap-[62px] z-10 min-w-0 flex-1">
                        {/* Text Content */}
                        <div className="flex flex-col gap-[4px] sm:gap-[8px] lg:gap-[12px]">
                            <h2
                                className="text-[#FFFEF7] font-black uppercase leading-[1.01] text-[clamp(16px,5.2vw,32px)] sm:text-[32px] md:text-[46px] lg:text-[64px]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Complimentary<br />
                                LinkedIn Branding
                            </h2>
                            <p className="text-[#FFFEF7] font-medium text-[8px] sm:text-[12px] md:text-[14px] lg:text-[20px] max-w-[55%] sm:max-w-[276px] md:max-w-[350px] lg:max-w-[492px] leading-[1.4]">
                                We&apos;ll refresh your LinkedIn pfp and cover to match your new visual identity. On the house. Because consistency matters.
                            </p>
                        </div>

                        {/* Avatars + CTA Button */}
                        <div className="flex items-center gap-[12px] sm:gap-[30px] lg:gap-[50px]">
                            {/* Overlapping Avatars */}
                            <div className="flex items-center">
                                <div className="size-[20px] sm:size-[30px] lg:size-[50px] rounded-full overflow-hidden border-2 border-[#361E98] relative z-3">
                                    <Image
                                        src="/li/test-1.svg"
                                        alt="User 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="size-[20px] sm:size-[30px] lg:size-[50px] rounded-full overflow-hidden border-2 border-[#361E98] relative z-2 ml-[-7px] sm:ml-[-12px] lg:ml-[-22px]">
                                    <Image
                                        src="/li/test-2.svg"
                                        alt="User 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="size-[20px] sm:size-[30px] lg:size-[50px] rounded-full overflow-hidden border-2 border-[#361E98] relative z-1 ml-[-7px] sm:ml-[-12px] lg:ml-[-22px]">
                                    <Image
                                        src="/li/test-3.svg"
                                        alt="User 3"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Claim Yours Button */}
                            <motion.a
                                href="#"
                                className="bg-[#FFFEF7] rounded-full flex items-center gap-[3px] sm:gap-[5px] lg:gap-[8px] px-[10px] py-[5px] sm:px-[18px] sm:py-[8px] lg:px-[30px] lg:py-[14px] cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="font-bold text-[#361E98] text-[7px] sm:text-[10px] lg:text-[16px] tracking-[-0.3px] sm:tracking-[-0.5px] lg:tracking-[-0.8px] whitespace-nowrap">
                                    Claim Yours!
                                </span>
                                <svg
                                    className="size-[8px] sm:size-[13px] lg:size-[22px]"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 16L16 6M16 6H8M16 6V14"
                                        stroke="#361E98"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Side: Card Mockups */}
                    <div className="relative shrink-0 self-end w-[90px] h-[100px] min-[480px]:w-[130px] min-[480px]:h-[130px] sm:w-[200px] sm:h-[180px] md:w-[340px] md:h-[260px] lg:w-[470px] lg:h-[340px]">
                        {/* Left card - tilted left */}
                        <motion.div
                            className="absolute left-0 -bottom-20 origin-bottom"
                            {...hoverStandUp}
                        >
                            <div
                                className="bg-[#D9D9D9] rounded-[5px] min-[480px]:rounded-[8px] sm:rounded-[15px] lg:rounded-[25px] w-[6.175rem] h-[8.419rem] lg:w-39 lg:h-[13.313rem] 2xl:w-55 2xl:h-75 shadow-md"
                                style={{ transform: "rotate(-5deg)" }}
                            />
                        </motion.div>

                        {/* Center card - straight */}
                        <motion.div
                            className="absolute left-[28%] -bottom-10 z-10 origin-bottom"
                            {...hoverStandUp}
                        >
                            <div
                                className="bg-[#C0C0C0] rounded-[5px] min-[480px]:rounded-[8px] sm:rounded-[15px] lg:rounded-[25px] w-[6.175rem] h-[8.419rem] lg:w-39 lg:h-[13.313rem] 2xl:w-55 2xl:h-75 shadow-lg"
                            />
                        </motion.div>

                        {/* Right card - tilted right */}
                        <motion.div
                            className="absolute right-0 -bottom-20 z-20 origin-bottom"
                            {...hoverStandUp}
                        >
                            <div
                                className="bg-[#919191] rounded-[5px] min-[480px]:rounded-[8px] sm:rounded-[15px] lg:rounded-[25px] w-[6.175rem] h-[8.419rem] lg:w-39 lg:h-[13.313rem] 2xl:w-55 2xl:h-75 shadow-md"
                                style={{ transform: "rotate(5deg)" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
