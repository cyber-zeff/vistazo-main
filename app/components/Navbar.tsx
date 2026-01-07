"use client";

import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import NavbarBtn from "./NavbarBtn";
import { useState } from "react";

const links = [
    { name: "Featured", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "About", href: "#" },
];

export default function WaveNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-screen sticky top-0 z-50 px-25">
            {/* Wave Background with drop shadow */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className="absolute top-0 left-0 w-full h-30 -z-10"
            >
                <defs>
                    <filter
                        id="dropShadow"
                        x="-4"
                        y="0"
                        width="1448"
                        height="119.985"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                        />
                    </filter>
                </defs>

                <g filter="url(#dropShadow)">
                    <path
                        d="M0 0H1440V100C1299.13 110.751 1220 110.541 1080 100C938.643 89.3329 859.883 89.417 720 100C579.17 110.683 500.269 110.611 360 100C218.401 89.4141 139.631 89.4863 0 100V0Z"
                        fill="#361E98"
                    />
                </g>
            </svg>

            {/* Navbar content */}
            <nav className="text-white px-6 md:px-12 py-3 md:py-2 lg:py-2 flex flex-wrap md:flex-nowrap justify-between items-center w-full sticky top-0 h-26.75">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        width={155}
                        height={35}
                        alt="Company logo"
                        className="h-auto w-auto"
                        priority
                    />
                </div>

                {/* Hamburger button for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Navigation Links + CTA */}
                <section
                    className={`
          flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-4 md:py-2
          ${isOpen ? "flex" : "hidden"} md:flex
          absolute md:static top-full left-0 w-full md:w-auto bg-main md:bg-transparent
        `}
                >
                    {links.map((link) => {
                        const [isHovered, setIsHovered] = useState(false);

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-white text-[20px] transition-colors px-4 py-2 md:p-0"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {link.name}
                                <motion.span
                                    animate={{ width: isHovered ? "100%" : "0%" }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute left-0 -bottom-1 h-0.75 bg-white"
                                />
                            </a>
                        );
                    })}

                    {/* CTA Button in mobile dropdown */}
                    <div className="md:hidden mt-2 w-full flex justify-center">
                        <NavbarBtn path="#" />
                    </div>
                </section>

                {/* CTA Button for desktop */}
                <div className="hidden md:block mt-0">
                    <NavbarBtn path="#" />
                </div>
            </nav>
        </header>
    );
}
