"use client";

import { projects } from "../Projects/Projects";
import Link from "next/link";
import Reveal from "../Reveal";

const Hero = () => {
    const completedProjects = projects.length;

    return (
        <section className="relative overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-300 min-h-[70vh] sm:min-h-[90vh] dark:bg-slate-950 dark:text-white">
            <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%)] opacity-80" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-sky-400/20 to-transparent opacity-60" />
            <div className="relative container mx-auto px-4 py-12 sm:py-20 lg:py-3">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <Reveal direction="left" delay={0} className="inline-flex rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm uppercase tracking-[0.35em] text-slate-800 shadow-sm shadow-slate-900/5 transition-colors duration-300 dark:border-white/20 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-none">
                            Personal Portfolio
                        </Reveal>
                        <Reveal direction="right" delay={0.1} className="space-y-4">
                            <h1 className="mx-auto max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-6xl dark:text-white lg:mx-0">
                                I design websites, electronic payment systems, and modern e-commerce stores.
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300 lg:mx-0">
                                Front-end developer creating polished websites with React, Next.js and Tailwind CSS. Strong UI focus, clean code, and fast performance.
                            </p>
                        </Reveal>
                        <Reveal direction="right" delay={0.18} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/95">
                            <div className="bg-sky-700/20 rounded-2xl shadow-sm shadow-sky-500/20 outline outline-slate-400/40 -outline-offset-8">
                                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700/20 after:rounded-full after:blur-xl after:bottom-6 after:right-6 before:absolute before:w-20 before:h-20 before:bg-sky-400/20 before:rounded-full before:blur-xl before:top-6 before:-left-6 hover:rotate-12 flex justify-center items-center h-56 w-full bg-neutral-900 rounded-2xl outline outline-slate-400/40 -outline-offset-8">
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
                            <Reveal direction="left" delay={0.16} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/95">
                                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Skills</h2>
                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {['HTML', 'CSS', 'JavaScript', 'React JS', 'Next JS', 'Tailwind CSS', 'Git', 'GitHub'].map((skill) => (
                                        <span key={skill} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900/90 dark:text-slate-200">{skill}</span>
                                    ))}
                                </div>
                            </Reveal>
                            <Reveal direction="right" delay={0.2} className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[1.75rem] bg-slate-100 p-6 text-center shadow-lg shadow-slate-300/20 transition-colors duration-300 dark:bg-slate-950/85 dark:shadow-black/20">
                                    <p className="text-4xl font-semibold text-slate-950 dark:text-white">3</p>
                                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Years Experience</p>
                                </div>
                                <div className="rounded-[1.75rem] bg-slate-100 p-6 text-center shadow-lg shadow-slate-300/20 transition-colors duration-300 dark:bg-slate-950/85 dark:shadow-black/20">
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
