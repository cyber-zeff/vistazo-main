import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#361E98] px-6 md:px-12 mt-12 md:mt-26 pt-16 pb-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Section */}
                <div className="space-y-6">
                    <h2 className="text-[40px] md:text-[48px] font-bold leading-normal quantaFont uppercase max-w-129.25">
                        DON&apos;T MISS THE GOOD STUFF
                    </h2>

                    {/* Email input */}
                    <div className="relative max-w-md">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full bg-transparent text-[20px] leading-normal font-medium border-b border-white/50 py-3 pr-10 outline-none placeholder:text-white/70 focus:border-white"
                        />
                        <span className="absolute right-0 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <path d="M29.9324 18.5149V26.3718C29.9324 26.6647 30.0317 26.9104 30.2301 27.1089C30.4286 27.3074 30.674 27.4063 30.9662 27.4056C31.2584 27.4049 31.5038 27.3056 31.7023 27.1078C31.9008 26.91 32 26.6647 32 26.3718V16.0338C32 15.7409 31.9008 15.4955 31.7023 15.2977C31.5038 15.0999 31.2584 15.0007 30.9662 15H20.6282C20.3353 15 20.0896 15.0992 19.8911 15.2977C19.6926 15.4962 19.5937 15.7416 19.5944 16.0338C19.5951 16.326 19.6944 16.5717 19.8922 16.7709C20.09 16.9701 20.3353 17.069 20.6282 17.0676H28.4851L19.2843 26.2684C19.0948 26.4579 19 26.6991 19 26.992C19 27.285 19.0948 27.5262 19.2843 27.7157C19.4738 27.9052 19.715 28 20.008 28C20.3009 28 20.5421 27.9052 20.7316 27.7157L29.9324 18.5149Z" fill="white" />
                            </svg>
                        </span>
                    </div>

                    <p className="text-[12px] max-w-95 leading-normal font-light capitalize">
                        By submitting your email, you&apos;ll receive tips on personal branding,
                        LinkedIn hacks, and updates on what we&apos;re working on.
                    </p>
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-[20px] leading-normal mb-4">Socials</h4>
                        <ul className="space-y-3 text-[16px] leading-normal font-medium">
                            <li><Link href="#" className="hover:text-[#F9D94D]">X (Twitter)</Link></li>
                            <li><Link href="#" className="hover:text-[#F9D94D]">Instagram</Link></li>
                            <li><Link href="#" className="hover:text-[#F9D94D]">LinkedIn</Link></li>
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="font-bold text-[20px] leading-normal mb-4">Pages</h4>
                        <ul className="space-y-3 text-[16px] leading-normal font-medium">
                            <li><Link href="#" className="hover:text-[#F9D94D]">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[#F9D94D]">Projects</Link></li>
                            <li><Link href="#" className="hover:text-[#F9D94D]">Blog Posts</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-[20px] leading-normal mb-4">For Nerds</h4>
                        <ul className="space-y-3 text-[16px] leading-normal font-medium">
                            <li><Link href="#" className="hover:text-[#F9D94D]">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#F9D94D]">Terms Of Service</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

                <p className="text-[14px] text-center md:text-left leading-normal font-medium">
                    © 2026 Vistazo. All Rights Reserved
                </p>

                <p className="text-[14px] text-center leading-normal font-medium">
                    Made with 🩷 By Design Team at Vistazo <br /> (The design team made us add this)
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
