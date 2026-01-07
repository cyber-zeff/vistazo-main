"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const services = [
    { title: "LOGO & BRAND IDENTITY", image: "/logo-brand-identity-design.jpg" },
    { title: "WEBSITE DESIGN", image: "/website-design-mockup.png" },
    { title: "WEBSITE COPYWRITING", image: "/website-copywriting-content.jpg" },
    { title: "WEB DEVELOPMENT", image: "/web-development-code.png" },
]

function DiamondStar({ className }: { className?: string }) {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z" />
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
                    rotation: -180,
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
            className="group relative flex items-center justify-between px-6 md:px-12 py-6 md:py-8 border-b border-white/20 cursor-pointer transition-colors duration-300 hover:bg-indigo-600/50"
        >
            <div className="flex items-center gap-4 md:gap-6">
                <div ref={starRef} className="text-white transition-colors duration-300 group-hover:text-yellow-400">
                    <DiamondStar className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight transition-colors duration-300 group-hover:text-yellow-400">
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
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <p className="text-white/80 text-lg md:text-xl">
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
