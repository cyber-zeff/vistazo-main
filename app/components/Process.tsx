'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

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

    return (
        <div ref={columnRef} className="flex flex-col gap-6 mb-1">
            {cards.map((card, index) => {
                const isActive = activeIndex === index
                const isSibling =
                    activeIndex !== null && activeIndex !== index

                return (
                    <motion.div
                        key={card.id}

                        /* DESKTOP HOVER */
                        onHoverStart={() => setActiveIndex(index)}
                        onHoverEnd={() => setActiveIndex(null)}

                        /* MOBILE / TABLET TAP */
                        onTap={() => {
                            if (isTouchDevice) {
                                setActiveIndex(isActive ? null : index)
                            }
                        }}

                        animate={{
                            height: isActive
                                ? 450
                                : isSibling
                                    ? 150
                                    : 300,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 25,
                            mass: 0.6,
                        }}
                        className="w-full max-w-[620px] min-w-[320px] h-75 rounded-[30px] bg-[#6755CF] px-6 md:px-8 pt-8 overflow-hidden cursor-pointer flex justify-between"
                    >
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-2 max-w-[280px] md:max-w-86.25 flex-1">
                            <h3 className="text-[clamp(26px,8vw,48px)] font-black leading-normal quantaFont -tracking-[2.4px] capitalize">
                                {card.title}
                            </h3>

                            <p className="text-[clamp(14px,8vw,20px)] font-medium leading-normal -tracking-[1px]">
                                {card.subTitle}
                            </p>
                            <motion.div animate={{opacity: isSibling ? 0 : 1 }}>
                                <p className={`text-[clamp(14px,8vw,16px)] font-medium leading-normal -tracking-[1px] mb-4`}>
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
                                    <p className="text-[20px] md:text-[clamp(12px,8vw,16px)] leading-normal font-medium -tracking-[0.8px] whitespace-pre-line">
                                        {card.description}
                                    </p>
                                )}
                            </motion.div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative flex items-start justify-end shrink-0">
                            <div className="text-[clamp(64px,8vw,120px)] font-black leading-normal quantaFont -tracking-[6px] z-20">
                                {card.step}
                            </div>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: isActive ? 'clamp(240px, 28vw, 464px)' : 'clamp(160px, 18vw, 294px)',
                                    width: isActive ? 'clamp(180px, 21vw, 350px)' : 'clamp(120px, 13.5vw, 220px)',
                                    right: isActive ? 'clamp(10px, 1vw, -50px)' : 'clamp(5px, 0.5vw, -30px)',
                                    opacity: isSibling ? 0 : 1,
                                    scale: isSibling ? 0.8 : 1,
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
                                className={`absolute -bottom-11.5 -left-10 ${card.id == 1 ? '-left-20' : ' '} ${card.id == 3 ? '-left-15 top-7' : ' '} ${card.id == 4 ? 'left-8' : ' '} z-20 pointer-events-none origin-bottom-right`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={card.image}
                                    alt="Person illustration"
                                    className={`w-full h-full object-contain ${card.id == 4 ? 'scale-x-[-1]' : ' '}`}
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
    return (
        <section id='processes' className='bg-[#FFFFFF] px-4 md:px-10 lg:px-20 py-20'>
            <h2 className='quantaFont text-[#121213] leading-normal font-black text-[clamp(42px,8vw,96px)] uppercase text-center mb-10 md:mb-20 text-balance max-w-308.75 mx-auto'>We keep our Process Simple</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6">
                    <Column cards={column1} />
                    <Column cards={column2} />
                </div>
            </div>
        </section>
    )
}
