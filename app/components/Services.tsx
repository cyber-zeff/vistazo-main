"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const services = [
    { title: "logo & brand identity", image: "#" },
    { title: "website design", image: "#" },
    { title: "website copywriting", image: "#" },
    { title: "web development", image: "#" },
    { title: "seo optimization", image: "#" },
]

function DiamondStar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block" width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0C24.743 16.1245 40 20 40 20C40 20 25.4881 23.8755 20 40C14.5119 23.8755 0 20 0 20C0 20 15.257 16.1245 20 0Z" />
        </svg>
    )
}

function ServiceItem({
    service,
    index,
    isActive,
    setActiveIndex,
}: {
    service: { title: string; image: string }
    index: number
    isActive: boolean
    setActiveIndex: (index: number | null) => void
}) {
    const tilt = index % 2 === 0 ? -5 : 5
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isActive) return

        const timer = setTimeout(() => {
            setActiveIndex(null)
        }, 2500)

        return () => clearTimeout(timer)
    }, [isActive, setActiveIndex])

    return (
        <motion.div
            ref={ref}
            initial="rest"
            tabIndex={0}
            animate={isActive ? "hover" : "rest"}
            whileHover="hover"
            onClick={() => {
                if (window.innerWidth < 1024) {
                    ref.current?.focus()
                    setActiveIndex(isActive ? null : index)
                }
            }}
            className={`group ${isActive ? 'border-0' : 'max-sm:border-b max-sm:border-gray-300/80'} relative mt-4 md:mt-8 flex items-center justify-between px-0 md:px-3 pt-4 pb-3 sm:py-8 cursor-pointer transition-colors duration-250 ease-in-out hover:bg-[rgba(103,85,207,0.75)]  ${isActive ? "bg-[rgba(103,85,207,0.75)]" : ""} rounded-none sm:rounded-[15px]`}
        >
            <div className="sm:flex sm:items-center sm:gap-4 md:gap-6 max-sm:mx-auto">
                <motion.div
                    variants={{
                        rest: { rotate: 0 },
                        hover: { rotate: 180 },
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`group-hover:text-[#F9D94D] ${isActive ? "text-[#F9D94D]" : "text-white"}`}
                >
                    <DiamondStar />
                </motion.div>

                <h3 className={`text-[clamp(20px,6vw,48px)] quantaFont tracking-tight transition-colors duration-250 ease-in-out group-hover:text-[#F9D94D] ${isActive ? "text-[#F9D94D]" : "text-white"}`}>
                    {service.title}
                </h3>
            </div>

            {/* Hover / Tap Card */}
            <motion.div
                variants={{
                    rest: {
                        opacity: 0,
                        scale: 0.85,
                        rotate: 0,
                        pointerEvents: "none",
                    },
                    hover: {
                        opacity: 1,
                        scale: 1,
                        rotate: tilt,
                        pointerEvents: "auto",
                    },
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{
                    transformOrigin: "90% 50%",
                    boxShadow:
                        tilt === 5
                            ? "8px 12px 2.5px 0 rgba(0, 0, 0, 0.25)"
                            : "-8px 12px 2.5px 0 rgba(0, 0, 0, 0.25)",
                }}
                className="hidden sm:block absolute right-8 top-1/2 -translate-y-[65%] w-73.75 h-89.5 bg-gray-100 z-10 rounded-[53px] md:rounded-[53px] overflow-hidden"
            />

            <motion.div
                variants={{
                    rest: {
                        opacity: 0,
                        scale: 0.85,
                        rotate: 0,
                        pointerEvents: "none",
                    },
                    hover: {
                        opacity: 1,
                        scale: 1,
                        rotate: tilt,
                        pointerEvents: "auto",
                    },
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{
                    transformOrigin: "90% 50%",
                    boxShadow:
                        tilt === 5
                            ? "8px 12px 2.5px 0 rgba(0, 0, 0, 0.25)"
                            : "-8px 12px 2.5px 0 rgba(0, 0, 0, 0.25)",
                }}
                className={`block sm:hidden absolute top-1/2 ${(tilt == 5) ? "right-2" : "left-2"} -translate-y-[65%] w-[clamp(150px,4vw,230px)] h-[clamp(190px,4vw,270px)] bg-gray-100 z-10 rounded-[35px] overflow-hidden`}
            />


            {/* Bottom Divider */}
            <div className="max-sm:hidden absolute left-0 right-0 sm:-bottom-3 h-[0.5px] bg-gray-300/80 pointer-events-none transition-opacity duration-250 ease-in-out group-hover:opacity-0 max-lg:group-focus-within:opacity-0" />
        </motion.div>
    )
}


export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <>
            <section id="services" className="px-0 sm:px-10 md:px-20 md:py-24 max-sm:pt-8">
                <div className="max-w-7xl mx-auto mb-4 max-sm:px-10 max-sm:text-center">
                    <h2 className="text-[clamp(30px,9vw,64px)] sm:text-[clamp(50px,8vw,96px)] mt-8 mb-2 md:mt-0 quantaFont leading-normal">
                        What we serve <br className="block sm:hidden" /> on <br className="hidden sm:block" /> the <span className="text-[#F9D94D]">menu</span>
                    </h2>
                    <p className="text-[14px] sm:text-[clamp(14px,6vw,20px)] font-medium">
                        Just everything you actually need to build a personal brand that pays.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            service={service}
                            index={index}
                            isActive={activeIndex === index}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </div>
            </section>

            <div className="bg-[#FFFEF7] w-full m-0 p-0 overflow-hidden pb-10 md:pb-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="175" viewBox="0 0 1440 175" fill="none" className="max-md:relative max-md:-left-44 md:w-full h-32.75 md:h-auto">
                    <path d="M-144 0V174.661C-108.583 171.493 -81.339 147.058 -76.3442 112.217C-64.0845 195.474 55.7888 195.474 68.0486 112.217C81.2164 195.474 200.182 196.379 211.987 112.217C223.793 195.927 344.12 195.474 355.926 112.217C368.186 195.927 488.513 195.022 500.319 112.217C513.033 196.832 633.814 194.57 644.258 112.217C649.252 194.117 781.385 196.832 788.196 112.217C800.91 195.475 919.875 195.927 932.589 112.217C945.303 195.927 1064.96 195.415 1076.53 112.217C1088.79 195.928 1206.39 195.928 1220.47 112.217C1234.54 195.928 1351.69 195.475 1364.86 112.217C1375.76 194.57 1497.45 196.38 1508.8 112.217C1513.34 144.796 1539.22 171.493 1576 174.661V0L-144 0Z" fill="#361E98" />
                </svg>
            </div>
        </>
    )
}
