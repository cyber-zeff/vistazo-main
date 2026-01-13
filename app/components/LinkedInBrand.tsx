"use client"

import { motion, type MotionProps } from "framer-motion"

export default function LinkedInBrand() {
    const hoverStandUp: MotionProps = {
        whileHover: {
            y: -30,
            transition: {
                type: "spring",
                stiffness: 180,
                damping: 22,
                mass: 0.6,
            },
        },
    }

    return (
        <section className="bg-white py-16 md:py-33.75">
            <section
                className="w-full max-w-full md:max-w-[90%] lg:w-337.5 h-auto lg:h-100 mx-auto bg-main rounded-[25px] overflow-hidden py-5 px-5 lg:pl-10 lg:pr-5">
                <div className="flex justify-between">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25" fill="none">
                            <path d="M11.9355 0.792807C12.1972 0.543072 12.5159 0.343558 12.8714 0.207038C13.2269 0.0705175 13.6113 0 14 0C14.3887 0 14.7731 0.0705175 15.1286 0.207038C15.4841 0.343558 15.8028 0.543072 16.0645 0.792807L17.4882 2.15117C17.7647 2.41486 18.1047 2.62233 18.4839 2.7588C18.8632 2.89527 19.2725 2.95739 19.6825 2.94072L21.7945 2.85582C22.1826 2.83993 22.5702 2.8946 22.9326 3.01634C23.2949 3.13807 23.6241 3.32418 23.8989 3.56277C24.1738 3.80136 24.3883 4.08716 24.5288 4.40191C24.6692 4.71666 24.7325 5.05341 24.7146 5.39062L24.6155 7.22684C24.5963 7.58313 24.6678 7.93872 24.8249 8.26827C24.9819 8.59781 25.2207 8.8932 25.5242 9.1334L27.0875 10.3705C27.375 10.5978 27.6046 10.8748 27.7617 11.1837C27.9188 11.4925 28 11.8265 28 12.1642C28 12.502 27.9188 12.8359 27.7617 13.1448C27.6046 13.4537 27.375 13.7307 27.0875 13.958L25.5242 15.1951C25.2207 15.4353 24.9819 15.7307 24.8249 16.0602C24.6678 16.3898 24.5963 16.7454 24.6155 17.1017L24.7132 18.9367C24.7315 19.2739 24.6686 19.6107 24.5285 19.9255C24.3884 20.2404 24.1742 20.5264 23.8996 20.7652C23.625 21.004 23.296 21.1904 22.9338 21.3124C22.5715 21.4345 22.184 21.4894 21.7959 21.4739L19.6825 21.3878C19.2725 21.3711 18.8632 21.4332 18.4839 21.5697C18.1047 21.7062 17.7647 21.9136 17.4882 22.1773L16.0645 23.5357C15.8028 23.7854 15.4841 23.9849 15.1286 24.1215C14.7731 24.258 14.3887 24.3285 14 24.3285C13.6113 24.3285 13.2269 24.258 12.8714 24.1215C12.5159 23.9849 12.1972 23.7854 11.9355 23.5357L10.5118 22.1773C10.2353 21.9136 9.89534 21.7062 9.51606 21.5697C9.13679 21.4332 8.72754 21.3711 8.31747 21.3878L6.20554 21.4727C5.81745 21.4886 5.42982 21.4339 5.06744 21.3122C4.70506 21.1904 4.37591 21.0043 4.10106 20.7657C3.8262 20.5271 3.61169 20.2413 3.47124 19.9266C3.33079 19.6118 3.26749 19.2751 3.28541 18.9379L3.38451 17.1017C3.4037 16.7454 3.33221 16.3898 3.17514 16.0602C3.01807 15.7307 2.77929 15.4353 2.47581 15.1951L0.912453 13.958C0.625029 13.7307 0.395405 13.4537 0.238282 13.1448C0.0811595 12.8359 0 12.502 0 12.1642C0 11.8265 0.0811595 11.4925 0.238282 11.1837C0.395405 10.8748 0.625029 10.5978 0.912453 10.3705L2.47581 9.1334C2.77929 8.8932 3.01807 8.59781 3.17514 8.26827C3.33221 7.93872 3.4037 7.58313 3.38451 7.22684L3.2868 5.39184C3.26852 5.05464 3.33144 4.71783 3.47154 4.40297C3.61165 4.08811 3.82585 3.80212 4.10044 3.5633C4.37503 3.32449 4.70398 3.1381 5.06622 3.01607C5.42847 2.89404 5.81604 2.83904 6.20414 2.85461L8.31747 2.94072C8.72754 2.95739 9.13679 2.89527 9.51606 2.7588C9.89534 2.62233 10.2353 2.41486 10.5118 2.15117L11.9355 0.792807Z" fill="#F9D94D" />
                            <path d="M9.81348 12.1643L12.6052 14.5899L18.1886 9.73865" stroke="#361E98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="bg-[#F9D94D] text-black px-3.5 py-2 rounded-[25px] text-[16px] font-medium leading-normal">
                        Limited Time
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Left content */}
                    <div>
                        <h1 className="text-[40px] sm:text-[48px] lg:text-[64px] font-black mb-3 leading-tight lg:leading-16.25 uppercase">
                            complimentary
                            <br />
                            linkedin branding
                        </h1>

                        <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-normal font-medium w-full lg:w-123 mb-8 lg:mb-11">
                            We'll refresh your linkedin pfp and cover to match your new visual identity. on the house. because
                            consistency matters.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center -space-x-6">
                                <svg width="50" height="50"><circle cx="25" cy="25" r="25" fill="#D9D9D9" /></svg>
                                <svg width="50" height="50"><circle cx="25" cy="25" r="25" fill="#BDBDBD" /></svg>
                                <svg width="50" height="50"><circle cx="25" cy="25" r="25" fill="#F9D94D" /></svg>
                            </div>

                            <button
                                className="group bg-white text-[#361E98] w-full sm:w-45 h-12.5 lg:ml-9 py-3 md:pl-3 rounded-[100px] inline-flex items-center justify-center gap-2 whitespace-nowrap
                                    border-2 border-transparent transition-all duration-300 ease-out hover:bg-transparent hover:border-white hover:text-white">
                                <p className="font-bold text-[16px] leading-normal -tracking-[0.8px]">
                                    Claim Yours!
                                </p>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="34"
                                    height="34"
                                    viewBox="0 0 34 34"
                                    className="transition-colors duration-300"
                                    fill="currentColor"
                                >
                                    <path d="M20.371 12.1842L13.4413 12.1842C13.1585 12.1842 12.9256 12.087 12.7427 11.8928C12.5598 11.6986 12.4686 11.4598 12.469 11.1765C12.4808 10.9055 12.5779 10.6726 12.7604 10.4779C12.9428 10.2832 13.1757 10.1861 13.459 10.1866L22.7928 10.1866C22.9342 10.1866 23.061 10.213 23.1732 10.2658C23.2854 10.3186 23.3882 10.3926 23.4815 10.4878C23.5749 10.583 23.6484 10.6863 23.7021 10.7975C23.7559 10.9088 23.7825 11.0353 23.782 11.1772L23.782 20.511C23.782 20.7703 23.6847 20.9973 23.49 21.192C23.2953 21.3867 23.0627 21.4897 22.7921 21.501C22.5092 21.501 22.2705 21.4037 22.0758 21.209C21.8811 21.0143 21.784 20.7757 21.7845 20.4934L21.7852 13.5984L13.8832 21.5003C13.6829 21.7006 13.447 21.8008 13.1754 21.8008C12.9039 21.8008 12.6684 21.7006 12.469 21.5003C12.2696 21.2999 12.1695 21.064 12.1685 20.7925C12.1676 20.5209 12.2677 20.2855 12.469 20.0861L20.371 12.1842Z" />
                                </svg>
                            </button>

                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex-1 hidden md:flex items-end justify-center h-96 shrink-0 -space-x-12">
                        <motion.div {...hoverStandUp} className="w-55 h-75 -rotate-[5deg] bg-gray-300 rounded-[25px] cursor-pointer" />
                        <motion.div {...hoverStandUp} className="w-55 h-75 bg-gray-400 rounded-[25px] z-10 relative -top-10 cursor-pointer" />
                        <motion.div {...hoverStandUp} className="w-55 h-75 rotate-[5deg] bg-gray-500 rounded-[25px] z-20 cursor-pointer" />
                    </div>
                </div>
            </section>
        </section>
    )
}
