"use client";

import { projects } from "../Projects/Projects";
import Link from "next/link";
import Reveal from "../Reveal";

const Hero = () => {
    const completedProjects = projects.length;

    return (
        <section className="relative min-h-[70vh] overflow-hidden bg-[#f6f6f8] text-[#242431] transition-colors duration-300 sm:min-h-[90vh] dark:bg-[oklch(12.9%_0.042_264.695)] dark:text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_22%,rgba(99,102,168,.14),transparent_38%),radial-gradient(ellipse_at_10%_85%,rgba(99,102,168,.08),transparent_35%)]" />
            <div className="relative container mx-auto px-4 py-12 sm:py-20 lg:py-3">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <Reveal direction="left" delay={0} className="inline-flex rounded-full border border-[#dadae8] bg-white/70 px-5 py-3 text-xs uppercase tracking-[0.3em] text-[#4d508f] shadow-sm dark:border-white/15 dark:bg-slate-900/80 dark:text-[#c0c1e5]">
                            Independent Front-end Developer
                        </Reveal>
                        <Reveal direction="right" delay={0.1} className="space-y-4">
                            <h1 className="mx-auto max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-[#242431] sm:text-6xl lg:text-7xl dark:text-white lg:mx-0">
                                Digital experiences, <span className="text-[#6366a8] dark:text-[#a2a4d5]">made with intention.</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300 lg:mx-0">
                                I turn ambitious ideas into polished, fast, and memorable websites—built with care from the first pixel to the final interaction.
                            </p>
                        </Reveal>
                        <Reveal direction="right" delay={0.18} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-[oklch(12.9%_0.042_264.695)]/95">
                            <div className="rounded-2xl bg-[#6366a8]/15 shadow-sm shadow-[#6366a8]/15 outline outline-slate-400/40 -outline-offset-8">
                                <div className="group relative flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-neutral-900 outline outline-slate-400/40 -outline-offset-8 before:absolute before:-left-6 before:top-6 before:h-20 before:w-20 before:rounded-full before:bg-[#a2a4d5]/20 before:blur-xl after:absolute after:bottom-6 after:right-6 after:h-24 after:w-24 after:rounded-full after:bg-[#6366a8]/20 after:blur-xl">
                                    <div className="z-10 flex flex-col items-center gap-2">
                                        <span className="text-slate-400 text-6xl font-bold">ZA</span>
                                        <p className="text-gray-50">Front-End Developer</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <Reveal direction="up" delay={0.14} className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/30 sm:p-6">
                        <div className="space-y-8">
                            <Reveal direction="left" delay={0.16} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-[oklch(12.9%_0.042_264.695)]/95">
                                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Skills</h2>
                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {['HTML', 'CSS', 'JavaScript', 'React JS', 'Next JS', 'Tailwind CSS', 'Git', 'GitHub', 'XML', 'Java'].map((skill) => (
                                        <span key={skill} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900/90 dark:text-slate-200">{skill}</span>
                                    ))}
                                </div>
                            </Reveal>
                            <Reveal direction="right" delay={0.2} className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[1.75rem] bg-slate-100 p-6 text-center shadow-lg shadow-slate-300/20 transition-colors duration-300 dark:bg-[oklch(12.9%_0.042_264.695)]/85 dark:shadow-black/20">
                                    <p className="text-4xl font-semibold text-slate-950 dark:text-white">3</p>
                                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Years Experience</p>
                                </div>
                                <div className="rounded-[1.75rem] bg-slate-100 p-6 text-center shadow-lg shadow-slate-300/20 transition-colors duration-300 dark:bg-[oklch(12.9%_0.042_264.695)]/85 dark:shadow-black/20">
                                    <p className="text-4xl font-semibold text-slate-950 dark:text-white">{completedProjects}</p>
                                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Completed Projects</p>
                                </div>
                            </Reveal>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
