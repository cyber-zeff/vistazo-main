"use client"

import { motion } from "framer-motion"

export default function Specs() {
    const features = ["Unlimited Revisions", "30-Day Post-Launch Support", "Quick Feedback Loops", "Fast Turnaround Time"]

    const duplicatedFeatures = [...features, ...features, ...features]

    return (
        <section className="border-t border-b border-white py-9 md:py-12.25 overflow-hidden">
            <motion.div
                className="flex items-center gap-8 whitespace-nowrap"
                animate={{ x: [0, -1920] }}
                transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            >
                {duplicatedFeatures.map((feature, index) => (
                    <div key={`${feature}-${index}`} className="flex items-center gap-8 shrink-0">
                        <motion.div
                            animate={{ rotate: [0, -360] }}
                            transition={{
                                duration: 30,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                            className="shrink-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <path d="M25 10L28.3677 20.3647H39.2658L30.4491 26.7705L33.8168 37.1353L25 30.7295L16.1832 37.1353L19.5509 26.7705L10.7342 20.3647H21.6323L25 10Z" fill="#F9D94D" />
                            </svg>
                        </motion.div>
                        <span className="text-white text-[24px] font-normal text-lg ">{feature}</span>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}
