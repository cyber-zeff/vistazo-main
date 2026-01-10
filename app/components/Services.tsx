"use client"

import { motion } from "framer-motion"

const services = [
    { title: "logo & brand identity", image: "#" },
    { title: "website design", image: "#" },
    { title: "website copywriting", image: "#" },
    { title: "web development", image: "#" },
    { title: "seo optimization", image: "#" },
]

function DiamondStar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0C24.743 16.1245 40 20 40 20C40 20 25.4881 23.8755 20 40C14.5119 23.8755 0 20 0 20C0 20 15.257 16.1245 20 0Z" />
        </svg>
    )
}

function ServiceItem({
    service,
    index,
}: {
    service: { title: string; image: string }
    index: number
}) {
    const tilt = index % 2 === 0 ? 5 : -5

    return (
        <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group relative mt-4 md:mt-8 flex items-center justify-between px-3 py-6 md:py-8 cursor-pointer transition-colors duration-300 hover:bg-[rgba(103,85,207,0.75)] rounded-[15px]"
        >
            <div className="flex items-center gap-4 md:gap-6">
                <motion.div
                    variants={{
                        rest: { rotate: 0 },
                        hover: { rotate: 180 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-white transition-colors duration-300 group-hover:text-[#F9D94D]"
                >
                    <DiamondStar />
                </motion.div>

                <h3 className="text-[48px] quantaFont tracking-tight transition-colors duration-300 group-hover:text-[#F9D94D]">
                    {service.title}
                </h3>
            </div>

            {/* Hover Card */}
            <motion.div
                variants={{
                    rest: {
                        opacity: 0,
                        scale: 0.85,
                        rotate: 0,
                    },
                    hover: {
                        opacity: 1,
                        scale: 1,
                        rotate: tilt,
                        display: "block",
                    },
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    mass: 0.8,
                }}
                style={{
                    transformOrigin: "90% 50%",
                    boxShadow:
                        tilt === 5
                            ? "8px 12px 2.5px 0 rgba(0, 0, 0, 0.25)"
                            : "-8px 12px 2.5px 0 rgba(0, 0, 0, 0.25)",
                }}
                className="hidden absolute right-8 top-1/2 -translate-y-[65%] w-81.25 h-95.25 bg-gray-100 rounded-[53px] overflow-hidden"
            />


            {/* Bottom Divider Line */}
            <div
                className="absolute left-0 right-0 -bottom-3 h-[0.5px] bg-white
                    pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />

        </motion.div>
    )
}

export default function Services() {
    return (
        <section className="px-25.5 md:py-24">
            <div className="max-w-7xl mx-auto mb-12">
                <h2 className="text-[96px] quantaFont leading-normal">
                    What we serve on <br /> the <span className="text-[#F9D94D]">menu</span>
                </h2>
                <p className="text-[20px]">
                    Just everything you actually need to build a personal brand that pays.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <ServiceItem key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    )
}
