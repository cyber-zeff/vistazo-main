"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface GetStartedBtnProps {
  path: string;
}

const GetStartedBtn: React.FC<GetStartedBtnProps> = ({ path }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="flex justify-end items-center gap-5.5 shrink-0 p-[2px_2px_2px_16px] w-44.75 h-12">
      <motion.a
        href={path}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-start w-44.75 h-12 rounded-[192px] border border-white bg-white overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          animate={{ width: isHovered ? "100%" : "45px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute right-0 top-0 h-full bg-[#361E98] rounded-[136px] z-0"
        />

        {/* Text */}
        <motion.span
          animate={{ color: isHovered ? "#FFFFFF" : "#361E98" }}
          transition={{ duration: 0.3 }}
          className="z-10 ml-4 font-medium text-[16px] leading-normal -tracking-[0.8]"
        >
          Book a Call
        </motion.span>

        {/* Arrow Icon */}
        <div className="flex w-11 h-11 p-[15px_14px_14px_15px] justify-center items-center shrink-0 z-10 ml-auto">
          <motion.span
            animate={{
              x: isHovered ? [0, 4, 8, 0] : [0, -4, -8, 0],
            }}
            transition={{ duration: 0.3 }}
            className="text-white"
          >
            <div className="w-3.75 h-3.75 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clipPath="url(#clip0_213_24)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.13782 4.15002C7.33785 3.94999 7.66215 3.94999 7.86218 4.15002L10.85 7.13782C10.946 7.23388 11 7.36416 11 7.5C11 7.63584 10.946 7.76612 10.85 7.86218L7.86218 10.85C7.66215 11.05 7.33785 11.05 7.13782 10.85C6.9378 10.65 6.9378 10.3257 7.13782 10.1256L9.25126 8.01219H4.5122C4.22932 8.01219 4 7.78288 4 7.5C4 7.21712 4.22932 6.9878 4.5122 6.9878H9.25126L7.13782 4.87437C6.9378 4.67435 6.9378 4.35004 7.13782 4.15002Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_213_24">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </motion.span>
        </div>
      </motion.a>
    </div>
  );
};

export default GetStartedBtn;
