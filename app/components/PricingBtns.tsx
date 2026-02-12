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
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
          y: hover ? 6 : 0,
          boxShadow: hover
            ? "0px 0px 0px 0px #121213"
            : "0px 6px 0px 0px #121213",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`bg-[${bg}] lg:w-58 h-16.25 xl:w-71.25 xl:h-17.25 Text-center py-4 border-2 border-[#121213] rounded-[100px] text-center text-[#121213] text-[20px] font-medium leading-normal -tracking-[1.2]`}
      >
        {name}
      </motion.a>
    </div>
  );
}
