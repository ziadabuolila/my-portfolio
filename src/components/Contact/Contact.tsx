"use client";
import { FaGithub, FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

import Reveal from "../Reveal";

const Contact = () => {
    return (
        <section id="contact" className="bg-gradient-to-r from-sky-400/20 via-slate-100 to-white py-16 md:py-20 text-slate-950 transition-colors duration-300 dark:from-blue-600/20 dark:via-slate-900 dark:to-slate-950 dark:text-white">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <Reveal direction="up" delay={0} className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Contact Me</p>
                        <h2 className="mt-4 text-4xl font-semibold">Contact Me</h2>
                        <p className="mt-4 mb-4 text-slate-600 dark:text-slate-300">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
                    </Reveal>
                </div>
                <Reveal direction="up" delay={0} className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-900/20 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-black/20 md:p-10 lg:p-14">
                    <div className="grid gap-10 lg:grid-cols-[minmax(320px,42%)_1fr] lg:items-start">
                        <Reveal direction="left" delay={0.1} className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">Contact Me</p>
                            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Have a new project? Let’s work together.</h2>
                            <p className="mt-4 text-slate-700 dark:text-slate-300">I offer fully integrated design and development services for high-quality user experiences. Send me a message to discuss your needs.</p>
                        </Reveal>
                        <div className="space-y-8">
                            {/* <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 dark:text-sky-400">Contact</p>
                                <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">Let’s talk about your next project</h1>
                                <p className="mt-6 text-slate-600 leading-8 dark:text-slate-300">
                                    If you want to collaborate, ask a question, or start a new website, reach out by WhatsApp, email, or social media.
                                </p>
                            </div> */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">WhatsApp</p>
                                    <a href="https://wa.me/201140090860" target="_blank" rel="noreferrer" className="mt-4 block text-slate-700 transition hover:text-sky-500 dark:text-slate-200">
                                        Chat with me on WhatsApp
                                        <span className="block font-medium text-slate-900 dark:text-white">0 114 009 0860</span>
                                    </a>
                                </div>
                                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/80">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Email</p>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&to=ziad.abuolila@gmail.com&su=Project%20Inquiry&body=Hello%20Ziad,%0A%0AI%20would%20like%20to%20talk%20about%20a%20project.%0A%0ABest%20regards,"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-4 block text-slate-700 transition hover:text-sky-500 dark:text-slate-200"
                                    >
                                        Send a message to this email
                                        <span className="block font-medium text-slate-900 dark:text-white">z*****a@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Social Links</p>
                                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 1xl:grid-cols-6">
                                    <a href="https://github.com/ziadabuolila" target="_blank" rel="noreferrer" className="group flex min-h-[160px] w-full flex-col items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-900/80">
                                        <FaGithub className="h-6 w-6 text-slate-900 transition group-hover:text-sky-500 dark:text-slate-100" />
                                        <span className="text-[11px] tracking-[0.35em]">GitHub</span>
                                    </a>
                                    <a href="https://facebook.com/ziadabuolila" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-900/80">
                                        <FaFacebookF className="h-6 w-6 text-slate-900 transition group-hover:text-sky-500 dark:text-slate-100" />
                                        <span className="text-[11px] tracking-[0.35em]">Facebook</span>
                                    </a>
                                    <a href="https://instagram.com/ziadabuolila" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-900/80">
                                        <FaInstagram className="h-6 w-6 text-slate-900 transition group-hover:text-sky-500 dark:text-slate-100" />
                                        <span className="text-[11px] tracking-[0.35em]">Instagram</span>
                                    </a>
                                    <a href="https://t.me/Ziad_Abuolila" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-900/80">
                                        <FaTelegramPlane className="h-6 w-6 text-slate-900 transition group-hover:text-sky-500 dark:text-slate-100" />
                                        <span className="text-[11px] tracking-[0.35em]">Telegram</span>
                                    </a>
                                    <a href="https://wa.me/201140090860" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-900/80">
                                        <FaWhatsapp className="h-6 w-6 text-slate-900 transition group-hover:text-sky-500 dark:text-slate-100" />
                                        <span className="text-[11px] tracking-[0.35em]">WhatsApp</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ziad-abuolila-a26584368" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:bg-slate-900/80">
                                        <FaLinkedinIn className="h-6 w-6 text-slate-900 transition group-hover:text-sky-500 dark:text-slate-100" />
                                        <span className="text-[11px] tracking-[0.35em]">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <a
                                    href="https://mail.google.com/mail/?view=cm&to=ziad.abuolila@gmail.com&su=Web%20Project%20Request&body=Hi%20Ziad,%0A%0AI%20have%20a%20project%20idea%20and%20I%20would%20like%20to%20discuss%20it.%0A%0ABest%20regards,"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-sky-400 sm:max-w-[calc(50%-0.5rem)]"
                                >
                                    Email Me Now
                                </a>
                                <a href="https://wa.me/201140090860" target="_blank" rel="noreferrer" className="inline-flex w-full justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:max-w-[calc(50%-0.5rem)]">
                                    Message on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
