"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";

type MenuProps = {
    isMenuOpen: boolean;
    onClose: () => void;
};

const Menu = ({ isMenuOpen, onClose }: MenuProps) => {
    if (!isMenuOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex md:hidden">
            <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm min-h-screen w-full" onClick={onClose} />
            <aside className="relative ml-auto flex min-h-screen w-full max-w-[100vw] sm:max-w-[320px] flex-col gap-8 rounded-l-[2rem] bg-white/95 p-6 text-slate-950 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-200 transition-colors duration-300 dark:bg-[oklch(12.9%_0.042_264.695)]/95 dark:text-slate-100 dark:shadow-slate-950/40 dark:ring-white/10">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#6366a8] dark:text-[#6366a8]">Menu</p>
                        <h2 className="mt-2 text-xl font-semibold">Browse</h2>
                    </div>
                    <button onClick={onClose} className="rounded-2xl bg-slate-900/70 p-2 text-slate-100 transition hover:bg-slate-800 dark:bg-slate-800">
                        <IoMdClose className="h-5 w-5" />
                    </button>
                </div>
                <nav className="flex flex-1 flex-col gap-4 overflow-y-auto pb-2 text-lg font-medium pr-1">
                    <Link href="/about" onClick={onClose} className="transition hover:text-[#6366a8]">
                        About
                    </Link>
                    <Link href="/experience" onClick={onClose} className="transition hover:text-[#6366a8]">
                        Experience
                    </Link>
                    <Link href="/products" onClick={onClose} className="transition hover:text-[#6366a8]">
                        Projects
                    </Link>
                    <Link href="/products/search" onClick={onClose} className="transition hover:text-[#6366a8]">
                        Services
                    </Link>
                    <Link href="/contact" onClick={onClose} className="transition hover:text-[#6366a8]">
                        Contact
                    </Link>
                </nav>
            </aside>
        </div>
    );
};

export default Menu;
