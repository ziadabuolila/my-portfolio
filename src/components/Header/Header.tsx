"use client";

import Link from "next/link";
import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu";
import { IoMdClose, IoMdMenu, IoMdSunny, IoMdMoon } from "react-icons/io";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const getInitialTheme = (): ThemeMode => {
    if (typeof window === "undefined") return "light";

    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : prefersDark ? "dark" : "light";
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const currentTheme = getInitialTheme();
        document.documentElement.classList.add(currentTheme);
        document.documentElement.classList.remove(currentTheme === "dark" ? "light" : "dark");
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);

        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme", nextTheme);
        }

        document.documentElement.classList.add(nextTheme);
        document.documentElement.classList.remove(nextTheme === "dark" ? "light" : "dark");
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-900/5 transition-colors duration-300 dark:border-slate-700/40 dark:bg-slate-950/95">
            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4 md:gap-6">
                <Link href="/" className="flex items-center gap-3 font-semibold text-slate-900 transition hover:text-slate-700 dark:text-slate-100 dark:hover:text-white">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/30 to-violet-400/30 text-base font-bold text-slate-950 shadow-lg shadow-sky-400/10 dark:from-sky-500/20 dark:to-violet-500/20 dark:text-white dark:shadow-sky-500/10">
                        ZA
                    </span>
                    <span className="text-lg">Ziad Abuolila</span>
                </Link>

                <nav className="hidden flex-1 items-center justify-center md:flex">
                    <NavBar />
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                    >
                        {mounted ? (
                            theme === "dark" ? <IoMdSunny className="h-5 w-5" /> : <IoMdMoon className="h-5 w-5" />
                        ) : (
                            <span className="h-5 w-5" />
                        )}
                    </button>

                    <button
                        type="button"
                        className="inline-flex md:hidden items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <IoMdClose className="h-5 w-5" /> : <IoMdMenu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <Menu isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
};

export default Header;
