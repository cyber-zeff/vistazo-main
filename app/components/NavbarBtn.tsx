"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NavbarBtnProps {
  path: string;
}

export default function NavbarBtn({ path }: NavbarBtnProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex items-center justify-center gap-2 text-4 ">
      <motion.a
        href={path}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
          y: hover ? 6 : 0,
          boxShadow: hover
            ? "0px 0px 0px 0px #FFFFFF"
            : "0px 6px 0px 0px #FFFFFF",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="px-10 py-4 border-2 border-white rounded-[100px]"
      >
        Let's Cook
      </motion.a>
    </div>
  );
}
