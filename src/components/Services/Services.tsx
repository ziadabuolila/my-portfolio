"use client";

import { FiLayers, FiShoppingCart, FiShield } from "react-icons/fi";
import Reveal from "../Reveal";

const services = [
    {
        title: "Modern landing pages",
        description: "Fast, polished pages designed to present your brand clearly and turn visitors into clients.",
        icon: FiLayers,
        points: ["Responsive design", "Clear call-to-action", "SEO-friendly structure"],
    },
    {
        title: "E-commerce experiences",
        description: "Thoughtful storefronts and product flows that feel trustworthy, modern, and easy to use.",
        icon: FiShoppingCart,
        points: ["Product browsing", "Checkout flow", "Mobile-first UI"],
    },
    {
        title: "Payment & admin systems",
        description: "Clean dashboards and secure interfaces for business operations, transactions, and reports.",
        icon: FiShield,
        points: ["Role-based panels", "Smooth workflows", "Reliable UX"],
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-[#eee8df] py-28 text-[#211d18] transition-colors duration-300 dark:bg-[#1d1a16] dark:text-slate-100">
            <div className="container mx-auto px-4">
                <Reveal direction="up" delay={0} className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#a8794d]">What I do</p>
                    <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">What I can build for you</h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        From elegant landing pages to full business platforms, every project is shaped to feel modern, smooth, and professional.
                    </p>
                </Reveal>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Reveal key={service.title} direction={index % 2 === 0 ? "left" : "right"} delay={0.1 + index * 0.08} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/20">
                                <div className="inline-flex rounded-2xl bg-sky-100 p-3 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-6 text-2xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{service.description}</p>
                                <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                    {service.points.map((point) => (
                                        <li key={point} className="flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
