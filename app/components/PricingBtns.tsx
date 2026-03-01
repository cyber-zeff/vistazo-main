"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PricingBtnProps {
  path: string;
  name: string;
  bg: string;
}

export default function PricingBtn({ path, name, bg }: PricingBtnProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex items-center justify-center shrink-0 gap-2">
      <motion.a
        href={path}
        target="_blank"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
          y: hover ? 6 : 0,
          boxShadow: hover
            ? "0px 0px 0px 0px #121213"
            : "0px 6px 0px 0px #121213",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`bg-[${bg}] w-full max-w-[280px] h-[52px] lg:w-58 lg:h-16.25 xl:w-71.25 xl:h-17.25 px-6 py-3 lg:py-4 border-2 border-[#121213] rounded-[100px] text-center text-[#121213] text-[16px] lg:text-[20px] font-medium leading-normal -tracking-[1.2]`}
      >
        {name}
      </motion.a>
    </div>
  );
}
