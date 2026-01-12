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
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="hover"
            className="group relative mt-4 md:mt-8 flex items-center justify-between px-3 py-6 md:py-8 cursor-pointer transition-colors duration-300 hover:bg-[rgba(103,85,207,0.75)] active:bg-[rgba(103,85,207,0.75)] rounded-[15px]"
        >
            <div className="flex items-center gap-4 md:gap-6">
                <motion.div
                    variants={{
                        rest: { rotate: 0 },
                        hover: { rotate: 180 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-white transition-colors duration-300 group-hover:text-[#F9D94D] group-active:text-[#F9D94D]"
                >
                    <DiamondStar />
                </motion.div>

                <h3 className="text-[28px] sm:text-[34px] md:text-[48px] quantaFont tracking-tight transition-colors duration-300 group-hover:text-[#F9D94D] group-active:text-[#F9D94D]">
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
        <>
            <section className="px-25.5 md:py-24">
                <div className="max-w-7xl mx-auto mb-12">
                    <h2 className="text-[62px] sm:text-[82px] md:text-[96px] mt-16 md:mt-0 quantaFont leading-normal">
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
            <div className="bg-white w-full m-0 p-0 overflow-hidden pb-10 mb:pb-20 lg:pb-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="175" viewBox="0 0 1440 175" fill="none" className="w-full h-auto">
                    <path d="M-144 0V174.661C-108.583 171.493 -81.339 147.058 -76.3442 112.217C-64.0845 195.474 55.7888 195.474 68.0486 112.217C81.2164 195.474 200.182 196.379 211.987 112.217C223.793 195.927 344.12 195.474 355.926 112.217C368.186 195.927 488.513 195.022 500.319 112.217C513.033 196.832 633.814 194.57 644.258 112.217C649.252 194.117 781.385 196.832 788.196 112.217C800.91 195.475 919.875 195.927 932.589 112.217C945.303 195.927 1064.96 195.415 1076.53 112.217C1088.79 195.928 1206.39 195.928 1220.47 112.217C1234.54 195.928 1351.69 195.475 1364.86 112.217C1375.76 194.57 1497.45 196.38 1508.8 112.217C1513.34 144.796 1539.22 171.493 1576 174.661V0L-144 0Z" fill="#361E98" />
                </svg>
            </div>
        </>
    )
}
