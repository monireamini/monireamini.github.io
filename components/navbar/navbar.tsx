import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {useTheme} from "next-themes";
import socialLinks from "../../data/social-links";
import NavbarLink from "./navbar-link";
import Contacts from "../contacts/contacts";

const Navbar = () => {
    const router = useRouter();
    const {theme, setTheme} = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
            {/* navbar header*/}
            <div className="flex md:flex-row justify-between items-center">

                {/* title */}
                <div className="flex flex-col">
                    <Link href="/">
                        <h1 className="font-semibold text-xl dark:text-gray-100">
                            Monireh Amini
                        </h1>
                        <p className="text-base font-light text-gray-500 dark:text-gray-300">
                            Front-End Developer
                        </p>
                    </Link>
                </div>

                {/* Menus */}
                <div className="space-x-8 hidden md:block">
                    <NavbarLink currentPath={router.asPath} targetPath={'/about'} label={'About'}/>
                    <NavbarLink currentPath={router.asPath} targetPath={'/projects'} label={'Projects'}/>
                    <NavbarLink currentPath={router.asPath} targetPath={'/experience'} label={'Experience'}/>
                    <NavbarLink currentPath={router.asPath} targetPath={'/contact'} label={'Contact'}/>
                </div>

                {/* contacts and dark/light theme switch */}
                <div className="space-x-4 flex flex-row items-center">
                    <Contacts />
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="w-10 h-10 p-3 rounded focus:outline-none"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {mounted && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                            >
                                {theme === "dark" ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                )}
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* sidebar*/}
            <div className="space-x-8 block md:hidden mt-4">
                <Link href="/about" className="text-base font-normal text-gray-600 dark:text-gray-300">
                    About
                </Link>
                <Link href="/projects" className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Projects
                </Link>
                <Link href="/experience" className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Experience
                </Link>
                <Link href="/contact" className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Contact
                </Link>
            </div>

        </div>
    )
};

export default Navbar;
