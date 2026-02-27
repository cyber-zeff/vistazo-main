'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OPCardCol1 from './proc/OPCardPartial1'
import OPCardCol2 from './proc/OPCardPartial2'

type CardType = {
    id: number
    step: string
    title: string
    subTitle: string
    subDesc: string
    description?: string
    image: string
}

const isTouchDevice =
    typeof window !== 'undefined' &&
    navigator.maxTouchPoints > 0

const column1: CardType[] = [
    {
        id: 1,
        step: '01',
        title: 'Deep Dive',
        subTitle: 'Understanding your work and goals',
        subDesc: "We don't start designing until we actually understand you.",
        description:
            "Your work, your goals, your competition, what makes you different. We dig into your industry, study what's working, and uncover the unique angle that'll make your brand stand out.",
        image: "/illustrations/illustration-1.png"
    },
    {
        id: 2,
        step: '02',
        title: 'Strategy Session',
        subTitle: 'Deciding how your brand will look like',
        subDesc: "We get on a call and plan out everything before creating anything.",
        description:
            "We align on your brand direction,messaging, and aesthetic so when we start designing, we're not guessing—we're executing a plan.",
        image: "/illustrations/illustration-2.png"
    },
]

const column2: CardType[] = [
    {
        id: 3,
        step: '03',
        title: 'The Build',
        subTitle: 'Creating your full brand',
        subDesc: "Our team designs your complete visual identity, builds your website, and writes all the copy.",
        description:
            "Designers create your logo and brand look. Copywriters write every page. Developers code it to work fast on all devices. Everything gets built in sync so it all works together perfectly",
        image: "/illustrations/illustration-3.png"
    },
    {
        id: 4,
        step: '04',
        title: 'Go Live',
        subTitle: 'Your site goes live + we stay available',
        subDesc: "Your new brand launches, you get all the files, and we're here for 30 days after.",
        description:
            "We walk you through how to use everything, handle any bugs or tweaks, and make sure you're comfortable. The relationship doesn't end at launch.",
        image: "/illustrations/illustration-4.png"
    },
]

function Column({ cards }: { cards: CardType[] }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const columnRef = useRef<HTMLDivElement>(null)

    // Close active card when tapping outside (mobile / tablet)
    useEffect(() => {
        function handleOutsideTap(e: PointerEvent) {
            if (
                isTouchDevice &&
                columnRef.current &&
                !columnRef.current.contains(e.target as Node)
            ) {
                setActiveIndex(null)
            }
        }

        if (activeIndex !== null) {
            document.addEventListener('pointerdown', handleOutsideTap)
        }

        return () => {
            document.removeEventListener('pointerdown', handleOutsideTap)
        }
    }, [activeIndex])

    const [isLargeScreen, setIsLargeScreen] = useState(false)

    useEffect(() => {
        const checkScreen = () => {
            setIsLargeScreen(window.innerWidth >= 1024)
        }
        checkScreen()
        window.addEventListener('resize', checkScreen)
        return () => window.removeEventListener('resize', checkScreen)
    }, [])

    return (
        <div ref={columnRef} className="flex flex-col gap-[clamp(1rem,2vw,1.5rem)] mb-1 w-full items-center lg:items-stretch">
            {cards.map((card, index) => {
                const isActive = activeIndex === index
                const isSibling =
                    activeIndex !== null && activeIndex !== index

                return (
                    <motion.div
                        key={card.id}

                        /* DESKTOP HOVER */
                        onHoverStart={() => {
                            if (window.innerWidth >= 1024) {
                                setActiveIndex(index)
                            }
                        }}
                        onHoverEnd={() => {
                            if (window.innerWidth >= 1024) {
                                setActiveIndex(null)
                            }
                        }}

                        /* MOBILE / TABLET TAP */
                        onClick={() => {
                            if (window.innerWidth < 1024) {
                                setActiveIndex(isActive ? null : index)
                            }
                        }}

                        animate={{
                            height: isLargeScreen
                                ? isActive
                                    ? 450
                                    : isSibling
                                        ? 150
                                        : 300
                                : isActive
                                    ? 'clamp(320px, 45vh, 550px)'
                                    : isSibling
                                        ? 'clamp(100px, 12vh, 150px)'
                                        : 'clamp(200px, 25vh, 280px)', // Decreased default height for small screens
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 180,
                            damping: 15,
                            mass: 0.8,
                        }}
                        className="w-full max-w-[620px] rounded-[clamp(20px,2.5vw,30px)] bg-[#6755CF] px-[clamp(1.25rem,3vw,2rem)] pt-[clamp(1.5rem,3vw,2rem)] pb-[clamp(1rem,2vw,1.5rem)] overflow-hidden cursor-pointer flex justify-between relative isolate"
                    >
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-2 w-full max-w-[60%] lg:max-w-[65%] z-30">
                            <h3 className="text-[clamp(1.75rem,5vw,3rem)] font-black leading-[1.1] quantaFont -tracking-[0.05em] capitalize text-white">
                                {card.title}
                            </h3>

                            <p className="text-[clamp(0.875rem,2.5vw,1.25rem)] font-medium leading-normal -tracking-[0.02em] text-white/90">
                                {card.subTitle}
                            </p>
                            <motion.div animate={{ opacity: isSibling ? 0 : 1 }}>
                                <p className={`text-[clamp(0.875rem,2.5vw,1rem)] font-medium leading-normal -tracking-[0.02em] mb-4 text-white/80`}>
                                    {card.subDesc}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: isActive ? 'auto' : 0,
                                    opacity: isActive ? 1 : 0,
                                }}
                                transition={{
                                    height: {
                                        type: 'spring',
                                        stiffness: 200,
                                        damping: 25,
                                        mass: 0.6,
                                    },
                                    opacity: {
                                        duration: 0.25,
                                        ease: 'easeInOut',
                                    },
                                }}
                                className="overflow-hidden"
                            >
                                {card.description && (
                                    <p className="text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed font-medium -tracking-[0.02em] whitespace-pre-line text-white/80">
                                        {card.description}
                                    </p>
                                )}
                            </motion.div>
                        </div>

                        {/* RIGHT SIDE / BACKGROUND ILLUSTRATION */}
                        <div className="absolute right-0 bottom-0 top-0 w-[40%] h-full pointer-events-none">
                            <div className="absolute right-[clamp(1rem,3vw,2rem)] top-[clamp(1.5rem,3vw,2rem)] text-[clamp(3rem,8vw,7.5rem)] font-black leading-none quantaFont -tracking-[0.05em] text-white z-10">
                                {card.step}
                            </div>

                            <motion.div
                                initial={false}
                                animate={{
                                    // Increased illustration size and overlap
                                    height: isActive ? 'clamp(300px, 60%, 550px)' : 'clamp(180px, 45%, 350px)',
                                    width: isActive ? 'clamp(220px, 70%, 450px)' : 'clamp(160px, 50%, 280px)',
                                    x: isActive ? '0%' : '10%',
                                    y: isActive ? '0%' : '10%',
                                    opacity: isSibling ? 0 : 1,
                                    scale: isSibling ? 0.8 : 1,
                                }}
                                style={{
                                    right: isActive ? '-15%' : '-10%',
                                    bottom: isActive ? '-10%' : '-10%'
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 25,
                                    mass: 0.5,
                                    opacity: {
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    },
                                }}
                                className={`absolute bottom-0 right-0 z-20 origin-bottom-right`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={card.image}
                                    alt="Person illustration"
                                    className={`w-full h-full object-contain ${card.id == 4 ? 'scale-x-[-1]' : ''}`}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default function OPCard() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#processes',
                start: 'top 70%',
                end: 'bottom 125%',
                scrub: true,
            }
        })

        // LEFT SIDE BOXES
        tl.from('.and-box', {
            x: -1000,
            opacity: 1,
            ease: "back.out(0.8)",
            duration: 1.2,
        }, 0)

        tl.from('.extra-box', {
            x: -1200,
            opacity: 1,
            ease: "back.out(0.8)",
            duration: 1.2,
        }, 0.1)

        // RIGHT SIDE BOX
        tl.from('.results-box', {
            x: 1000,
            opacity: 1,
            ease: "back.out(0.8)",
            duration: 1.2,
        }, 0)

        ScrollTrigger.refresh()


    }, [])
    return (
        <section id='processes' className='bg-[#FFFEF7] px-[clamp(1rem,5vw,5rem)] py-[clamp(3rem,8vw,5rem)] overflow-hidden'>
            <h2 className='relative quantaFont max-md:py-4 text-[#121213] leading-tight font-black text-[clamp(2rem,6vw,6rem)] uppercase text-center mb-[clamp(2rem,5vw,5rem)] text-balance max-w-[1200px] mx-auto'>
                We keep our Process Simple
                {/* Floating Labels */}
                <span className="and-box absolute left-[30%] top-[31%] md:top-[28%] -rotate-[5deg] bg-[#F95DAF] text-[#F8F8F8] px-3 py-0.5 rounded-full text-[12px] md:text-[15px] lg:text-[20px] font-bold md:font-black leading-normal capitalize interFont">
                    And
                </span>

                <span className="results-box absolute right-[29%] top-[32%] md:top-[29%] rotate-3 bg-[#6755CF] text-[#F8F8F8] px-3 py-0.5 rounded-full text-[12px] md:text-[15px] lg:text-[20px] font-bold md:font-black leading-normal capitalize interFont">
                    Results
                </span>

                <span className="extra-box absolute left-[37%] bottom-[7%] md:-bottom-[5%] xl:bottom-[1%] -rotate-3 bg-[#F9D94D] text-[#361E98] px-3 py-0.5 rounded-full text-[12px] md:text-[15px] lg:text-[20px] font-bold md:font-black leading-normal capitalize interFont">
                    Extraordinary!
                </span>
            </h2>
            <div className="flex justify-center">
                <div className="lg:max-w-300 grid grid-cols-1 min-[840px]:grid-cols-2 place-items-center max-sm:px-10">
                    <OPCardCol1 />
                    <OPCardCol2 />
                </div>
            </div>
        </section>
    )
}
