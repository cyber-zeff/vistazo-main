"use client"

import { motion, type MotionProps } from "framer-motion"
import Image from "next/image"

export default function LinkedInBrand() {
    const hoverStandUp: MotionProps = {
        whileHover: {
            y: -30,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                // mass: 0.6,
            },
        },
    }

    return (
        <section className="w-full bg-[#FFFEF7] px-[22px] sm:px-[36px] md:px-[45px] lg:px-[80px]">
            <div className="bg-[#361E98] rounded-[21px] sm:rounded-[28px] lg:rounded-[30px] w-full max-w-380 mx-auto overflow-hidden relative px-[16px] py-[10px] sm:px-[24px] sm:py-[16px] lg:px-[32px] lg:py-[17px]">
                {/* Top Row: LinkedIn Icon + Limited Time Badge */}
                <div className="flex items-center justify-between w-full mb-[2px] sm:mb-[4px] lg:mb-0">
                    {/* LinkedIn Verified Icon */}
                    <svg className="w-[14px] h-[12px] sm:w-[20px] sm:h-[17px] lg:w-[28px] lg:h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="none">
                        <path d="M8.52538 0.566291C8.71226 0.387909 8.93996 0.245398 9.19388 0.147884C9.44781 0.0503696 9.72238 0 10 0C10.2776 0 10.5522 0.0503696 10.8061 0.147884C11.06 0.245398 11.2877 0.387909 11.4746 0.566291L12.4916 1.53655C12.6891 1.7249 12.9319 1.87309 13.2028 1.97057C13.4737 2.06805 13.766 2.11242 14.059 2.10051L15.5675 2.03987C15.8447 2.02852 16.1216 2.06757 16.3804 2.15453C16.6392 2.24148 16.8743 2.37442 17.0707 2.54483C17.267 2.71525 17.4202 2.9194 17.5205 3.14422C17.6209 3.36904 17.6661 3.60958 17.6533 3.85044L17.5825 5.16203C17.5688 5.41652 17.6199 5.67052 17.732 5.9059C17.8442 6.14129 18.0148 6.35229 18.2316 6.52386L19.3482 7.40748C19.5536 7.56986 19.7176 7.7677 19.8298 7.98833C19.942 8.20896 20 8.44753 20 8.68875C20 8.92997 19.942 9.16853 19.8298 9.38916C19.7176 9.60979 19.5536 9.80763 19.3482 9.97001L18.2316 10.8536C18.0148 11.0252 17.8442 11.2362 17.732 11.4716C17.6199 11.707 17.5688 11.961 17.5825 12.2155L17.6523 13.5262C17.6653 13.767 17.6204 14.0076 17.5203 14.2325C17.4203 14.4574 17.2673 14.6617 17.0711 14.8323C16.875 15.0029 16.64 15.136 16.3813 15.2232C16.1225 15.3103 15.8457 15.3496 15.5685 15.3385L14.059 15.277C13.766 15.2651 13.4737 15.3094 13.2028 15.4069C12.9319 15.5044 12.6891 15.6526 12.4916 15.8409L11.4746 16.8112C11.2877 16.9896 11.06 17.1321 10.8061 17.2296C10.5522 17.3271 10.2776 17.3775 10 17.3775C9.72238 17.3775 9.44781 17.3271 9.19388 17.2296C8.93996 17.1321 8.71226 16.9896 8.52538 16.8112L7.5084 15.8409C7.31094 15.6526 7.0681 15.5044 6.79719 15.4069C6.52628 15.3094 6.23395 15.2651 5.94105 15.277L4.43253 15.3376C4.15532 15.349 3.87844 15.3099 3.6196 15.223C3.36076 15.136 3.12565 15.0031 2.92933 14.8327C2.733 14.6622 2.57978 14.4581 2.47945 14.2333C2.37913 14.0085 2.33392 13.7679 2.34672 13.527L2.41751 12.2155C2.43121 11.961 2.38015 11.707 2.26796 11.4716C2.15577 11.2362 1.98521 11.0252 1.76844 10.8536L0.651752 9.97001C0.44645 9.80763 0.282432 9.60979 0.170202 9.38916C0.0579711 9.16853 0 8.92997 0 8.68875C0 8.44753 0.0579711 8.20896 0.170202 7.98833C0.282432 7.7677 0.44645 7.56986 0.651752 7.40748L1.76844 6.52386C1.98521 6.35229 2.15577 6.14129 2.26796 5.9059C2.38015 5.67052 2.43121 5.41652 2.41751 5.16203L2.34772 3.85131C2.33466 3.61045 2.3796 3.36988 2.47967 3.14498C2.57975 2.92008 2.73275 2.7158 2.92889 2.54522C3.12502 2.37463 3.35998 2.2415 3.61873 2.15434C3.87748 2.06717 4.15431 2.02789 4.43153 2.03901L5.94105 2.10051C6.23395 2.11242 6.52628 2.06805 6.79719 1.97057C7.0681 1.87309 7.31094 1.7249 7.5084 1.53655L8.52538 0.566291Z" fill="#F9D94D" />
                        <path d="M7.00977 8.68915L9.00385 10.4218L12.992 6.95654" stroke="#361E98" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
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
                                className="text-[#FFFEF7] font-black uppercase leading-[1.01] text-[clamp(16px,5.2vw,32px)] sm:text-[clamp(20px,4.2vw,32px)] md:text-[clamp(32px,4vw,46px)] lg:text-[clamp(40px,4vw,64px)]"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Complimentary<br />
                                LinkedIn Branding
                            </h2>
                            <p className="text-[#FFFEF7] font-medium text-[8px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] max-w-[55%] sm:max-w-[276px] md:max-w-[340px] lg:max-w-[492px] leading-[1.4]">
                                We&apos;ll refresh your LinkedIn pfp and cover to match your new visual identity. On the house. Because consistency matters.
                            </p>
                        </div>

                        {/* Avatars + CTA Button */}
                        <div className="flex items-center gap-[12px] sm:gap-[30px] lg:gap-[35px] xl:gap-[50px]">
                            {/* Overlapping Avatars */}
                            <div className="flex items-center">
                                <div className="size-[20px] sm:size-[30px] lg:size-[50px] rounded-full overflow-hidden relative z-1">
                                    <Image
                                        src="/li/test-1.svg"
                                        alt="User 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="size-[20px] sm:size-[30px] lg:size-[50px] rounded-full overflow-hidden relative z-2 ml-[-7px] sm:ml-[-12px] lg:ml-[-22px]">
                                    <Image
                                        src="/li/test-2.svg"
                                        alt="User 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="size-[20px] sm:size-[30px] lg:size-[50px] rounded-full overflow-hidden relative z-3 ml-[-7px] sm:ml-[-12px] lg:ml-[-22px]">
                                    <Image
                                        src="/li/test-3.svg"
                                        alt="User 3"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Claim Yours Button */}
                            <button className="flex items-center gap-[3px] sm:gap-[5px] lg:gap-[8px] px-[10px] py-[5px] sm:px-[18px] sm:py-[8px] lg:px-[25px] lg:py-[12px] cursor-pointer rounded-full bg-[#FFFEF7] text-[#361E98] font-bold leading-normal text-[7px] sm:text-[10px] lg:text-[16px] tracking-[-0.3px] sm:tracking-[-0.5px] lg:tracking-[-0.8px] border-2 border-transparent
                            whitespace-nowrap transition-all duration-300 ease-out hover:bg-transparent hover:border-white hover:text-white">
                                Claim Yours!
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        className="transition-colors duration-300 size-[8px] sm:size-[13px] lg:size-[22px]"
                                    >
                                        <path
                                            d="M6 16L16 6M16 6H8M16 6V14"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>

                            </button>
                        </div>
                    </div>

                    {/* Right Side: Card Mockups */}
                    <div className="relative shrink-0 z-10 self-end w-[90px] h-[100px] min-[480px]:w-[130px] min-[480px]:h-[130px] sm:w-[200px] sm:h-[180px] md:w-[340px] md:h-[260px] lg:w-[470px] lg:h-[340px]">
                        {/* Left card - tilted left */}
                        <motion.div
                            className="absolute -left-15 -bottom-10 min-[480px]:-left-14 min-[480px]:-bottom-10 sm:-left-6 sm:-bottom-15 md:-left-15 lg:left-0 xl:-left-18 md:-bottom-15 lg:-bottom-20 origin-bottom"
                            {...hoverStandUp}
                        >
                            <div
                                className="bg-[#D9D9D9] rounded-[5px] min-[480px]:rounded-[8px] sm:rounded-[15px] lg:rounded-[25px] w-18 h-24 sm:w-23.75 sm:h-33.75 md:w-[10.175rem] md:h-[12.419rem] lg:w-46 lg:h-[17.313rem] xl:w-55 xl:h-75 shadow-md"
                                style={{ transform: "rotate(-5deg)" }}
                            />
                        </motion.div>

                        {/* Center card - straight */}
                        <motion.div
                            className="absolute -left-[20%] -bottom-5 min-[480px]:left-[2%] min-[480px]:-bottom-5 sm:left-[22%] sm:-bottom-10 md:left-[20%] lg:left-[33%] xl:left-[22%] md:-bottom-8 lg:-bottom-10 z-10 origin-bottom"
                            {...hoverStandUp}
                        >
                            <div
                                className="bg-[#C0C0C0] rounded-[5px] min-[480px]:rounded-[8px] sm:rounded-[15px] lg:rounded-[25px] w-18 h-24 sm:w-23.75 sm:h-33.75 md:w-[10.175rem] md:h-[12.419rem] lg:w-46 lg:h-[17.313rem] xl:w-55 xl:h-75 shadow-lg"
                            />
                        </motion.div>

                        {/* Right card - tilted right */}
                        <motion.div
                            className="absolute -bottom-10 min-[480px]:-bottom-10 sm:-bottom-15 right-0 md:-bottom-15 lg:-bottom-20 z-20 origin-bottom"
                            {...hoverStandUp}
                        >
                            <div
                                className="bg-[#919191] rounded-[5px] min-[480px]:rounded-[8px] sm:rounded-[15px] lg:rounded-[25px] w-18 h-24 sm:w-23.75 sm:h-33.75 md:w-[10.175rem] md:h-[12.419rem] lg:w-46 lg:h-[17.313rem] xl:w-55 xl:h-75 shadow-md"
                                style={{ transform: "rotate(5deg)" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
