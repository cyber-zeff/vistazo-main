import React from "react";

const ProcessSection: React.FC = () => {
    return (
        <section className="relative w-full bg-[#FFFEF6] overflow-hidden">
            {/* Heading */}
            <div className="z-10 text-center">
                <h2>
                    <span className="relative inline-block mx-3">
                        <span className="absolute -top-5 left-20 -rotate-[5deg] w-18 h-8.25 py-0.75 px-2.5 rounded-[100px] bg-[#F95DAF] text-white text-[20px] leading-normal font-black">
                            And
                        </span>
                    </span>
                    <span className="quantaFont text-[96px] leading-normal font-black text-black">we keep our</span>
                    <span className="relative inline-block ml-3">
                        <span className="absolute -top-3 right-18 rotate-3 rounded-[100px] bg-[#6755CF] px-2.5 py-1.25 w-27 h-9.5 text-white text-[20px] leading-normal font-black">
                            Results
                        </span>
                    </span>
                    <br />
                    <span className="quantaFont text-[96px] leading-normal font-black text-black">process simple</span>
                    <span className="flex justify-center">
                        <span className="relative bottom-9 -left-20 rounded-[100px] bg-[#F9D94D] -rotate-3 w-45.5 h-10.5 px-2.5 py-1.5 text-[#361E98] text-[20px] leading-normal font-black">
                            Extraordinary!
                        </span>
                    </span>
                </h2>
            </div>

            {/* Cards */}
            <div className="relative z-0 mt-24 flex justify-center gap-8 px-4 -space-x-9">
                {/* Left */}
                <div className="h-100 w-85 rotate-2 rounded-[25px] bg-gray-200" />

                {/* Middle */}
                <div className="h-100 w-85 rotate-6 rounded-[25px] bg-gray-300 relative bottom-4" />

                {/* Right */}
                <div className="h-100 w-85 rotate-[8deg] rounded-[25px] bg-gray-400" />
            </div>
        </section>
    );
};

export default ProcessSection;
