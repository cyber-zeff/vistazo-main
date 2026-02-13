"use client"
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const handleSmoothScroll = (e:any, href:any) => {
  e.preventDefault();

  const targetId = href.replace("#", "");
  const section = document.getElementById(targetId);

  if (section) {
    const yOffset = -100; // adjust for fixed navbar
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};

export default function Footer() {
    return (
        <footer className="bg-[#361E98] px-8 md:px-20 mt-6 sm:mt-6 md:mt-16 lg:mt-26 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12">
            <div className="max-md:place-items-center grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-32">

                {/* Left Section */}
                <div className="space-y-6 md:space-y-8 lg:space-y-10 max-md:mb-8 lg:mb-0 max-md:place-items-center">
                    <h2 className="text-[24px] min-[500px]:text-[32px] md:text-[48px] leading-[1.2] quantaFont uppercase max-w-129.25 max-md:text-center">
                        DON&apos;T MISS THE GOOD STUFF
                    </h2>

                    {/* Email input */}
                    <div className="relative max-w-md">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full bg-transparent text-[20px] leading-normal font-medium border-b border-white/50 py-3 pr-10 outline-none placeholder:text-white focus:border-white"
                        />
                        <span className="absolute right-0 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <path d="M29.9324 18.5149V26.3718C29.9324 26.6647 30.0317 26.9104 30.2301 27.1089C30.4286 27.3074 30.674 27.4063 30.9662 27.4056C31.2584 27.4049 31.5038 27.3056 31.7023 27.1078C31.9008 26.91 32 26.6647 32 26.3718V16.0338C32 15.7409 31.9008 15.4955 31.7023 15.2977C31.5038 15.0999 31.2584 15.0007 30.9662 15H20.6282C20.3353 15 20.0896 15.0992 19.8911 15.2977C19.6926 15.4962 19.5937 15.7416 19.5944 16.0338C19.5951 16.326 19.6944 16.5717 19.8922 16.7709C20.09 16.9701 20.3353 17.069 20.6282 17.0676H28.4851L19.2843 26.2684C19.0948 26.4579 19 26.6991 19 26.992C19 27.285 19.0948 27.5262 19.2843 27.7157C19.4738 27.9052 19.715 28 20.008 28C20.3009 28 20.5421 27.9052 20.7316 27.7157L29.9324 18.5149Z" fill="white" />
                            </svg>
                        </span>
                    </div>

                    <p className="text-[12px] text-[#FFFEF7] max-w-95 leading-normal font-[310] max-md:text-center">
                        By submitting your email, you&apos;ll receive tips on personal branding,
                        LinkedIn hacks, and updates on what we&apos;re working on.
                    </p>
                </div>

                {/* Right Section */}
                <div className="inline-grid grid-cols-3 gap-6 md:gap-10 lg:gap-12 xl:gap-16 max-md:gap-8 max-md:justify-items-center">

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-[20px] leading-normal mb-4 md:mb-5 lg:mb-6">Socials</h4>
                        <ul className="space-y-3 md:space-y-3.5 lg:space-y-4 text-[16px] leading-normal font-medium">
                            {/* <li><Link href="#" target="_blank" className="hover:text-[#F9D94D]">X (Twitter)</Link></li> */}
                            <li><Link href="https://www.instagram.com/vistazo.studio/" target="_blank" className="hover:text-[#F9D94D]">Instagram</Link></li>
                            <li><Link href="https://www.linkedin.com/company/vistazo-studio/" target="_blank" className="hover:text-[#F9D94D]">LinkedIn</Link></li>
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="font-bold text-[20px] leading-normal mb-4 md:mb-5 lg:mb-6">Pages</h4>
                        <ul className="space-y-3 md:space-y-3.5 lg:space-y-4 text-[16px] leading-normal font-medium">
                            <li><Link href="#services" onClick={(e) => handleSmoothScroll(e, "#services")} className="hover:text-[#F9D94D]">Services</Link></li>
                            <li><Link href="#processes" onClick={(e) => handleSmoothScroll(e, "#processes")} className="hover:text-[#F9D94D]">Our Process</Link></li>
                            <li><Link href="#pricing" onClick={(e) => handleSmoothScroll(e, "#pricing")} className="hover:text-[#F9D94D]">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-[20px] leading-normal mb-4 md:mb-5 lg:mb-6">For Nerds</h4>
                        <ul className="space-y-3 md:space-y-3.5 lg:space-y-4 text-[16px] leading-normal font-medium">
                            <li><Link href="#" className="hover:text-[#F9D94D]">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#F9D94D]">Terms Of Service</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24 pt-8 md:pt-10 lg:pt-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">

                <p className="text-[14px] text-center md:text-left leading-normal font-medium">
                    &copy; 2026 Vistazo. All Rights Reserved
                </p>

                <p className="text-[14px] text-center leading-normal font-medium">
                    Made with{" "}
                    <span className="inline-flex align-middle">
                        <Heart fill="#FF5A8A" color="#FF5A8A" className="w-4 h-4 mx-1 inline" />
                    </span>
                    {" "}by The Design Team at Vistazo
                    <br />
                    <span className="italic text-xs opacity-80">(The Design Team made us add this)</span>
                </p>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Vistazo Logo"
                        width={200}
                        height={45}
                        className="object-contain"
                    />
                </div>
            </div>
        </footer>
    );
}
