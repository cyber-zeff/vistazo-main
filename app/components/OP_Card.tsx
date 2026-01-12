'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { section } from 'framer-motion/client'

type CardType = {
    id: number
    step: string
    title: string
    description?: string
}

const isTouch =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none)').matches

const column1: CardType[] = [
    {
        id: 1,
        step: '01',
        title: 'The Deep Dive',
        description:
            "We don't start designing until we actually understand you.\n\nYour work, your goals, your competition, what makes you different.We dig into your industry, study what's working, and uncover the unique angle that'll make your brand stand out.",
    },
    {
        id: 2,
        step: '02',
        title: 'The Deep Dive',
        description:
            "We don't start designing until we actually understand you.\n\nYour work, your goals, your competition, what makes you different.We dig into your industry, study what's working, and uncover the unique angle that'll make your brand stand out.",
    },
]

const column2: CardType[] = [
    {
        id: 3,
        step: '03',
        title: 'The Deep Dive',
        description:
            "We don't start designing until we actually understand you.\n\nYour work, your goals, your competition, what makes you different.We dig into your industry, study what's working, and uncover the unique angle that'll make your brand stand out.",
    },
    {
        id: 4,
        step: '04',
        title: 'The Deep Dive',
        description:
            "We don't start designing until we actually understand you.\n\nYour work, your goals, your competition, what makes you different.We dig into your industry, study what's working, and uncover the unique angle that'll make your brand stand out.",
    },
]

function Column({
    cards,
}: {
    cards: CardType[]
}) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="flex flex-col gap-6 mb-6">
            {cards.map((card, index) => {
                const isActive = activeIndex === index
                const isSibling =
                    activeIndex !== null && activeIndex !== index

                return (
                    <motion.div
                        key={card.id}
                        onHoverStart={() => setActiveIndex(index)}
                        onHoverEnd={() => setActiveIndex(null)}
                        animate={{
                            height: isActive ? 450 : isSibling ? 150 : 300,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 180,
                            damping: 15,
                        }}
                        className="w-full sm:w-[90%] md:w-155 rounded-[30px] bg-[#6755CF] px-8 pt-8 overflow-hidden cursor-pointer flex justify-between"
                    >
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-4 max-w-86.25">
                            <h3 className="text-[48px] font-black leading-normal quantaFont -tracking-[2.4px] capitalize">
                                {card.title}
                            </h3>

                            <p className="text-[20px] font-medium leading-normal -tracking-[1px] mb-4">
                                Understanding your work and goals
                            </p>

                            {isActive && card.description && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-[16px] leading-normal font-normal -tracking-[0.8px] whitespace-pre-line"
                                >
                                    {card.description}
                                </motion.p>
                            )}
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative flex items-start justify-end shrink-0">
                            <div className="text-[120px] font-black leading-normal quantaFont -tracking-[6px] z-20">
                                {card.step}
                            </div>

                            {/* PERSON IMAGE */}
                            {!isSibling && (
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: isActive ? '464px' : '294px',
                                        width: isActive ? '350px' : '220px',
                                        opacity: 1,
                                        right: isActive ? '-50px' : '-30px',
                                        // scale: isActive ? 1.05 : 1,
                                        aspectRatio: isActive ? '175/232' : '110/147',
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 20,
                                    }}
                                    className="sm:h-[100px] sm:w-[100px] md:h-[294px] md:w-[220px] absolute -bottom-11.5 z-20 pointer-events-none origin-bottom-right">
                                    <img
                                        src="/person.png"
                                        alt="Person illustration"
                                        className="w-full h-full object-contain shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                                    />
                                </motion.div>
                            )}
                        </div>

                    </motion.div>
                )
            })}
        </div>
    )
}

export default function OPCard() {
    return (
        <section className='bg-white py-20'>
            <h2 className='quantaFont text-[#121213] leading-normal font-black text-[64px] sm:text-[84px] md:text-[96px] uppercase text-center mb-10 md:mb-20 text-balance max-w-308.75 mx-auto'>We keep our Process Simple</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center w-full max-w-350">
                    <Column cards={column1} />
                    <Column cards={column2} />
                </div>
            </div>
        </section>
    )
}
