"use client";

import Image from "next/image";
import MyImage from "../../../public/ziad.jpg";
import Reveal from "../../components/Reveal";

const AboutPage = () => {
    return (
        <main className="bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
            <section className="container mx-auto px-4 py-28">
                <div className="grid gap-10 lg:grid-cols-[1.35fr_0.95fr] lg:items-start">
                    <Reveal direction="left" delay={0} className="space-y-8">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 dark:text-sky-400">About Me</p>
                            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">Hi, I’m Ziad Abuolila</h1>
                        </div>
                        <div className="flex justify-center sm:justify-start">
                            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-900/5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-slate-950/20">
                                <Image
                                    src={MyImage}
                                    alt="Ziad Abuolila"
                                    width={560}
                                    height={560}
                                    className="h-56 w-56 object-cover sm:h-72 sm:w-72"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 text-slate-600 leading-8 dark:text-slate-300">
                            <p>
                                I’m a front-end developer who turns ideas into polished, fast, and accessible web experiences.
                                I build with React, Next.js, and Tailwind CSS, and I take pride in crafting interfaces that feel smooth on every device.
                            </p>
                            <p>
                                My work blends modern UI design, performance optimization, and practical engineering so every project is beautiful,
                                usable, and easy to maintain.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-900/5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/90 dark:text-white dark:shadow-slate-950/20">
                                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 dark:text-sky-400">Focus Areas</p>
                                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-7">Responsive interfaces, component-driven design, and fast-loading user experiences.</p>
                            </div>
                            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-900/5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/90 dark:text-white dark:shadow-slate-950/20">
                                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 dark:text-sky-400">What I Value</p>
                                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-7">Clarity, accessibility, and performance-first workflows that keep projects reliable and future-ready.</p>
                            </div>
                        </div>
                    </Reveal>

                    <div className="space-y-8">
                        <Reveal direction="right" delay={0.1} className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/90 dark:text-white dark:shadow-slate-950/20">
                            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">What I Do</h2>
                            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-7">
                                I build digital products that help businesses grow and users get things done quickly.
                                From landing pages and dashboards to marketing sites and portfolio experiences, I bring every interface to life with attention to detail.
                            </p>
                            <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
                                <li>✔ End-to-end front-end development with React, Next.js, and Tailwind CSS.</li>
                                <li>✔ Design and build reusable UI components and scalable design systems.</li>
                                <li>✔ Improve page speed, accessibility, and responsive behavior across devices.</li>
                            </ul>
                        </Reveal>

                        <Reveal direction="right" delay={0.2} className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/90 dark:text-white dark:shadow-slate-950/20">
                            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Tools & Skills</h2>
                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {[
                                    "React & Next.js",
                                    "Tailwind CSS",
                                    "Responsive UI",
                                    "Performance tuning",
                                    "Accessibility",
                                    "Clean component design",
                                ].map((skill) => (
                                    <div key={skill} className="rounded-3xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 dark:bg-slate-950 dark:text-slate-100">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
