"use client";

import Reveal from "../../components/Reveal";

const ExperiencePage = () => {
    const experiences = [
        {
            title: "Front-end Development",
            detail: "Building modern, responsive interfaces with React, Next.js, and Tailwind CSS.",
        },
        {
            title: "Design Systems",
            detail: "Creating reusable components and polished UI patterns for consistent products.",
        },
        {
            title: "Performance & Accessibility",
            detail: "Optimizing page speed, responsive behavior, and accessibility best practices.",
        },
    ];

    return (
        <main className="bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-[oklch(12.9%_0.042_264.695)] dark:text-white">
            <section className="container mx-auto px-4 py-32">
                <div className="mx-auto w-full max-w-4xl space-y-10">
                    <Reveal direction="left" delay={0} className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6366a8]">Experience & approach</p>
                        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">What I bring to every project</h1>
                        <p className="mt-6 text-slate-600 leading-8 dark:text-slate-300">
                            I combine UI design, clean front-end architecture, and strong performance to deliver websites that look great and feel fast.
                        </p>
                    </Reveal>
                    <div className="grid gap-6 md:grid-cols-3">
                        {experiences.map((item, index) => (
                            <Reveal key={item.title} direction={index % 2 === 0 ? "right" : "left"} delay={0.1 + index * 0.08} className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-900/5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/90 dark:text-white dark:shadow-slate-950/20">
                                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h2>
                                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-7">{item.detail}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ExperiencePage;
