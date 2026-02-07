"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NavbarBtn from "./NavbarBtn";
import { useState } from "react";

interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  { name: "Featured", href: "#" },
  { name: "Testimonial", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "About", href: "#" },
];

export default function WaveNavbar() {
  return (
    <header className="w-full sticky top-0 z-50 px-10 md:px-20">
      {/* Wave Background with drop shadow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-27 pointer-events-none"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          filter: "drop-shadow(0 8px 4px rgba(0,0,0,0.25))"
        }}
      >
        <g>
          <path
            d="M0 0H1440V100C1299.13 110.751 1220 110.541 1080 100C938.643 89.3329 859.883 89.417 720 100C579.17 110.683 500.269 110.611 360 100C218.401 89.4141 139.631 89.4863 0 100V0Z"
            fill="#361E98"
            shapeRendering="geometricPrecision"
          />
        </g>
      </svg>

      {/* Navbar content */}
      <nav className="text-white py-3 md:py-2 lg:py-2 flex flex-nowrap justify-between items-center w-full relative z-10 h-22">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            width={155}
            height={35}
            alt="Company logo"
            className="max-sm:w-36 max-sm:h-8"
            priority
          />
        </div>

        {/* Navigation Links + CTA */}
        <section
          className="hidden lg:flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-8 py-14 lg:py-2 static lg:static w-auto bg-transparent z-40">
          {links.map((link) => {
            return (
              <NavbarLinkBtn key={link.name} name={link.name} href={link.href} />
            );
          })}
        </section>

        {/* CTA Button for desktop */}
        <div className="block mt-0">
          <NavbarBtn path="#" />
        </div>
      </nav>
    </header>
  );
}

const NavbarLinkBtn: React.FC<LinkProps> = ({ name, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative text-white text-[20px] font-medium transition-colors px-4 py-2 md:p-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
      <motion.span
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={
          isHovered
            ? { scaleX: 1, transformOrigin: "left" }
            : { scaleX: 0, transformOrigin: "right" }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute left-0 -bottom-1 h-0.75 w-full bg-white"
      />
    </a>
  );
};
