"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface WelcomeScreenProps {
    children: React.ReactNode;
}

const messages = [
    "Welcome",
    "Ziad Abuolila",
    "Front-End Developer",
    "Building Modern Web Experiences",
    "Explore My Portfolio",
];

const changeInterval = 1150;

const loadingExtraTime = 100;

const totalDuration =
    messages.length * changeInterval + loadingExtraTime;

const loadingDuration = totalDuration * 0.9;

const WelcomeScreen = ({ children }: WelcomeScreenProps) => {
    const pathname = usePathname();

    const [showScreen, setShowScreen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [index, setIndex] = useState(0);
    const scrollPositionRef = useRef(0);

    const lockScroll = () => {
        const currentScrollY = window.scrollY;
        scrollPositionRef.current = currentScrollY;
        document.documentElement.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${currentScrollY}px`;
        document.body.style.left = "0";
        document.body.style.width = "100%";
    };

    const unlockScroll = () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        window.scrollTo({ top: scrollPositionRef.current, left: 0, behavior: "auto" });
    };

    useEffect(() => {
        setIsMounted(true);

        if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        if (pathname !== "/") {
            setShowScreen(false);
            unlockScroll();
            return;
        }

        setIndex(0);
        setShowScreen(true);

        // حفظ موضع التمرير الحالي ومنع أي Scroll
        lockScroll();

        const interval = window.setInterval(() => {
            setIndex((prev) => {
                if (prev >= messages.length - 1) return prev;
                return prev + 1;
            });
        }, changeInterval);

        const timeout = window.setTimeout(() => {
            setShowScreen(false);
            unlockScroll();
        }, totalDuration);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            unlockScroll();
        };
    }, [pathname]);

    return (
        <>
            {children}

            <AnimatePresence mode="wait">
                {showScreen && isMounted && pathname === "/" && (
                    <motion.div
                        initial={isMounted ? { opacity: 1 } : false}
                        animate={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 1.05,
                            filter: "blur(18px)",
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white"
                    >
                        {/* Background */}
                        <div className="absolute inset-0">
                            <motion.div
                                animate={{
                                    x: [0, 40, 0],
                                    y: [0, 30, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#6366a8]/20 blur-3xl"
                            />

                            <motion.div
                                animate={{
                                    x: [0, -40, 0],
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-blue-600/20 blur-3xl"
                            />

                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />
                        </div>

                        <div className="relative flex h-full flex-col items-center justify-center px-6">

                            {/* Logo */}
                            <motion.div
                                initial={isMounted ? {
                                    opacity: 0,
                                    scale: 0.5,
                                } : false}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.8,
                                }}
                                className="mb-12 flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
                            >
                                <motion.span
                                    animate={{
                                        scale: [1, 1.06, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="bg-gradient-to-r from-[#a2a4d5] via-white to-[#6366a8] bg-clip-text text-6xl font-bold text-transparent"
                                >
                                    Z
                                </motion.span>
                            </motion.div>

                            {/* Text Animation */}
                            <div className="h-24 flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={messages[index]}
                                        initial={isMounted ? {
                                            opacity: 0,
                                            y: 25,
                                            filter: "blur(10px)",
                                        } : false}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -25,
                                            filter: "blur(10px)",
                                        }}
                                        transition={{
                                            duration: 0.35,
                                        }}
                                        className="bg-gradient-to-r from-[#6366a8] via-white to-[#a2a4d5] bg-clip-text text-center text-4xl font-bold text-transparent sm:text-6xl"
                                    >
                                        {messages[index]}
                                    </motion.h1>
                                </AnimatePresence>
                            </div>

                            {/* Loading */}
                            <div className="mt-16 w-72 overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                    initial={isMounted ? { width: 0 } : false}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: loadingDuration / 1000,
                                        ease: "linear",
                                    }}
                                    className="h-1 rounded-full bg-gradient-to-r from-[#6366a8] via-[#6366a8] to-[#a2a4d5]"
                                />
                            </div>

                            <motion.p
                                animate={{
                                    opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                                className="mt-5 text-xs uppercase tracking-[0.45em] text-slate-500"
                            >
                                Loading Experience
                            </motion.p>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default WelcomeScreen;