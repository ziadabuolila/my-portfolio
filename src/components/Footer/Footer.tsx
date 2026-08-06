"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-lg font-semibold text-slate-950 dark:text-white">Ziad Abuolila</p>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Front-end developer crafting modern, responsive interfaces with Next.js and Tailwind CSS.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                        <Link href="/" className="transition hover:text-sky-500">Home</Link>
                        <Link href="/about" className="transition hover:text-sky-500">About</Link>
                        <Link href="/experience" className="transition hover:text-sky-500">Experience</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="https://github.com/ziadabuolila" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-2.5 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:hover:border-sky-400">
                            <FaGithub className="h-4 w-4" />
                        </a>
                        <a href="https://linkedin.com/in/ziadabuolila" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-2.5 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:hover:border-sky-400">
                            <FaLinkedinIn className="h-4 w-4" />
                        </a>
                        <a href="https://wa.me/201140090860" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-2.5 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:hover:border-sky-400">
                            <FaWhatsapp className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    © 2026 Ziad Abuolila. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
