"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { navItems } from "@/app/constans/navItems";
import { MenuIcon } from "./menuIcon"

function Navbar() {
    const currentPath = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-row items-center w-full px-4 md:px-6 md:py-2 lg:px-12 lg:py-4">

            {/* Logo */}
            <div className="mr-auto w-16 md:w-24 lg:w-24 p-1">
                <a href="/" >
                    <Image
                        src="/Images/layout/Heaven_Agency_logo1.png"
                        alt="Heaven Agency Logo"
                        width={150}
                        height={40}
                        className="w-full h-auto"
                    />
                </a>
            </div>


            {/* Nav Links - Desktop */}
            <div className="hidden xl:block">
                <nav>
                    <ul className="flex lg:flex-row gap-2 text-md text-foreground uppercase">
                        {navItems.map((item) => (
                            <li key={item.href} className="font-english font-medium text-sm transition-all duration-400 hover:text-primary">
                                <a href={item.href}>
                                    <button
                                        className={`relative py-1 px-6 uppercase
                                            ${currentPath === item.href
                                                ? `text-white text-md tracking-wider border border-foreground rounded-full outline-none bg-transparent cursor-pointer select-none 
                                                transition-all duration-400 group uppercase`
                                                : `bg-none`}`}
                                    >
                                        {item.title}
                                        <span
                                            className={`absolute inset-0 
                                            ${currentPath === item.href
                                                    ? `bg-primary rounded-full transition-all duration-400 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-x-0 group-hover:translate-y-0 -z-10`
                                                    : `bg-none`}`}
                                        >
                                        </span>
                                    </button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Right Section */}
            <div className="ml-auto flex flex-row items-center gap-2">

                {/* Mobile Menu Button */}
                <div
                    className="group relative text-sm text-foreground uppercase cursor-pointer transition-all duration-500 hover:text-primary"
                    onMouseEnter={() => setIsMobileMenuOpen(true)}
                    onMouseLeave={() => setIsMobileMenuOpen(false)}
                >
                    <div className="xl:hidden flex flex-row items-center gap-2">
                        <h2>
                            <span className="font-arabic font-medium text-xs">All Pages</span>
                            <div className="absolute bottom-0.5 left-0 w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-500 origin-left"></div>
                        </h2>
                        <MenuIcon isMobileMenuOpen={isMobileMenuOpen} />
                    </div>
                    {/* Mobile Menu - Overlay */}
                    {isMobileMenuOpen && (
                        <div
                            className="absolute right-0 top-full mt-2 bg-background/40 backdrop-blur-[8px] rounded-xl shadow-md z-40 xl:hidden min-w-[200px] border-l border-t border-white"
                            onMouseEnter={() => setIsMobileMenuOpen(true)}
                            onMouseLeave={() => setIsMobileMenuOpen(false)}
                        >
                            <nav className="py-6 px-4">
                                <ul className="flex flex-col gap-2 text-md text-foreground uppercase ">
                                    {navItems.map((item) => (
                                        <li key={item.href} className="font-english font-medium ">
                                            <a
                                                href={item.href}
                                                className={`block py-2 px-10 rounded-lg whitespace-nowrap  ${currentPath === item.href
                                                    ? 'bg-primary text-white'
                                                    : 'hover:bg-gray-100/20 dark:hover:bg-gray-800/30'
                                                    }`}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>

                {/* Language */}
                <div className="hidden sm:flex flex-row items-center gap-1.5 rounded-full px-4 py-2 cursor-pointer group">
                    <p className="font-arabic text-foreground font-normal text-sm transition-all duration-400 group-hover:text-primary">
                        عربى
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe transition-all duration-400 group-hover:text-primary"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                    </svg>
                </div>


                {/* Login */}
                <a
                    href="/api/auth"
                    className={`group ${currentPath === '/api/auth' ? 'text-primary' : 'text-foreground'}`}
                >
                    <div className="flex flex-row items-center gap-1.5 bg-none rounded-full px-2 sm:px-4 py-2 cursor-pointer">
                        <p className="hidden sm:block font-english font-medium text-sm transition-all duration-400 group-hover:text-primary">
                            LOGIN
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-user-round transition-all duration-400 group-hover:text-primary"
                        >
                            <path d="M18 20a6 6 0 0 0-12 0" />
                            <circle cx="12" cy="10" r="4" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
