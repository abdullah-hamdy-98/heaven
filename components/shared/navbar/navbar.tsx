"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/app/constans/navItems";
import { useState } from "react";

function Navbar() {
    const currentPath = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-row items-center w-full sticky top-4 z-50 px-4 md:px-6 lg:px-8">
            {/* Logo */}
            <div className="mr-auto w-32 md:w-36 lg:w-40">
                <Image
                    src="/Images/layout/Heaven_Agency_logo.png"
                    alt="Heaven Agency Logo"
                    width={150}
                    height={50}
                    className="w-full h-auto"
                />
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground"
                >
                    {isMobileMenuOpen ? (
                        <>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </>
                    ) : (
                        <>
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </>
                    )}
                </svg>
            </button>

            {/* Nav Links - Desktop */}
            <div className="hidden md:block">
                <nav>
                    <ul className="flex lg:flex-row gap-2 text-md text-foreground uppercase">
                        {navItems.map((item) => (
                            <li key={item.path} className="font-english font-medium">
                                <Link href={item.path} passHref>
                                    <button
                                        className={`relative py-1 px-6 uppercase
                                            ${currentPath === item.path
                                                ? `text-white text-md tracking-wider border border-foreground rounded-full outline-none bg-transparent cursor-pointer select-none 
                                                transition-all duration-200 group uppercase`
                                                : `bg-none`}`}
                                    >
                                        {item.label}
                                        <span
                                            className={`absolute inset-0 
                                            ${currentPath === item.path
                                                ? `bg-primary rounded-full transition-all duration-200 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-x-0 group-hover:translate-y-0 -z-10`
                                                : `bg-none`}`}
                                        >
                                        </span>
                                    </button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu - Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-20 bg-background z-40 md:hidden">
                    <nav className="p-4">
                        <ul className="flex flex-col gap-4 text-lg text-foreground uppercase">
                            {navItems.map((item) => (
                                <li key={item.path} className="font-english font-medium">
                                    <Link 
                                        href={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block py-2 px-4 rounded-lg ${
                                            currentPath === item.path
                                                ? 'bg-primary text-white'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}

            {/* Right Section */}
            <div className="ml-auto flex flex-row items-center">
                {/* Language */}
                <div className="hidden sm:flex flex-row items-center gap-2 rounded-full px-4 py-2 cursor-pointer group">
                    <p className="font-arabic text-foreground font-normal text-md transition-all duration-400 group-hover:text-primary">
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

                {/* Mode Toggle */}
                <div className="flex flex-row items-center gap-2 bg-none rounded-full px-2 sm:px-4 py-2 cursor-pointer">
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
                        className="lucide lucide-sun-moon transition-all duration-400 hover:text-black"
                    >
                        <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.9 4.9 1.4 1.4" />
                        <path d="m17.7 17.7 1.4 1.4" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.3 17.7-1.4 1.4" />
                        <path d="m19.1 4.9-1.4 1.4" />
                    </svg>
                </div>

                {/* Login */}
                <Link
                    href="/api/auth"
                    className={`group ${currentPath === '/api/auth' ? 'text-primary' : 'text-foreground'}`}
                >
                    <div className="flex flex-row items-center gap-2 bg-none rounded-full px-2 sm:px-4 py-2 cursor-pointer">
                        <p className="hidden sm:block font-arabic font-normal text-md transition-all duration-400 group-hover:text-primary">
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
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
