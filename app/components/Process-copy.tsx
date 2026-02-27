'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OPCardCol1 from './proc/OPCardPartial1'
import OPCardCol2 from './proc/OPCardPartial2'


export default function OPCard() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#processes',
                start: 'top 80%',
                end: 'bottom 150%',
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
            <h2 className='relative quantaFont max-md:py-4 text-[#121213] leading-tight font-black text-[clamp(36px,8vw,64px)] lg:text-[clamp(64px,8vw,96px)] uppercase text-center mb-[clamp(2rem,5vw,5rem)] text-balance max-w-[1200px] mx-auto'>
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
