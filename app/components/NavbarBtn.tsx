"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NavbarBtnProps {
  path: string;
}

export default function NavbarBtn({ path }: NavbarBtnProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex items-center justify-center gap-2">
      <motion.a
        href={path}
        target="_blank"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
          y: hover ? 6 : 0,
          boxShadow: hover
            ? "0px 0px 0px 0px #FFFFFF"
            : "0px 6px 0px 0px #FFFFFF",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="text-center py-2.5 sm:py-3 border-2 w-39 max-sm:w-33 h-13.5 max-sm:h-11 border-white rounded-[100px] font-medium leading-normal text-[16px] max-sm:text-[14px] -tracking-[0.8]"
      >
        Let&apos;s Cook!
      </motion.a>
    </div>
  );
}
