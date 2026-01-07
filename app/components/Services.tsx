"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const services = [
    { title: "logo & brand identity", image: "#" },
    { title: "website design", image: "#" },
    { title: "website copywriting", image: "#" },
    { title: "web development", image: "#" },
    {title: "seo optimization", image: "#" }
]

function DiamondStar({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0C24.743 16.1245 40 20 40 20C40 20 25.4881 23.8755 20 40C14.5119 23.8755 0 20 0 20C0 20 15.257 16.1245 20 0Z" fill="currentColor" />
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
    const itemRef = useRef<HTMLDivElement>(null)
    const starRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<gsap.core.Timeline | null>(null)

    useEffect(() => {
        const initGSAP = async () => {
            const item = itemRef.current
            const star = starRef.current
            const card = cardRef.current
            if (!item || !star || !card) return

            // Create hover timeline
            const tl = gsap.timeline({ paused: true })

            tl.to(
                star,
                {
                    rotation: 180,
                    duration: 0.5,
                    ease: "power2.out",
                },
                0,
            ).to(
                card,
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                },
                0,
            )

            timelineRef.current = tl

            item.addEventListener("mouseenter", () => tl.play())
            item.addEventListener("mouseleave", () => tl.reverse())
        }

        initGSAP()

        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill()
            }
        }
    }, [])

    return (
        <div
            ref={itemRef}
            className="group relative flex items-center justify-between px-6 md:px-12 py-6 md:py-8 border-b border-white/20 cursor-pointer transition-colors duration-300 hover:bg-[rgba(103,85,207,0.75)] rounded-[15px]"
        >
            <div className="flex items-center gap-4 md:gap-6">
                <div ref={starRef} className="text-white transition-colors duration-300 group-hover:text-[#F9D94D]">
                    <DiamondStar className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-[48px] quantaFont tracking-tight transition-colors duration-300 group-hover:text-[#F9D94D]">
                    {service.title}
                </h3>
            </div>

            {/* Card that slides in on hover */}
            <div
                ref={cardRef}
                className="absolute right-8 md:right-16 w-48 md:w-64 h-64 md:h-80 bg-gray-100 rounded-3xl shadow-2xl opacity-0 translate-x-full overflow-hidden"
                style={{ transform: "translateX(100px)" }}
            >
                <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default function HoverVistazo() {
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
