export const projects = [
    {
        title: "Dashboard E-commerce",
        description: "Clean and responsive admin dashboard for managing products, orders, and business insights.",
        tags: ["Html", "CSS", "JavaScript"],
    },
    {
        title: "Website E-commerce",
        description: "Modern e-commerce website with product browsing, secure authentication, and order processing.",
        tags: ["Html", "CSS", "JavaScript"],
    },
    {
        title: "Website Roaya Pay",
        description: "Corporate website for a payment solutions company featuring services, company information, contact, FAQs, and a responsive modern interface.",
        tags: ["Html", "Css", "JavaScript", "React JS"],
    },
    {
        title: "Roaya Pay Payment System",
        description: "Comprehensive electronic payment and merchant management system for Roaya Pay, featuring transaction processing, wallet management, reports, user roles, and a secure admin dashboard.",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Safari Discovery",
        description: "A modern travel and tourism website featuring safari adventures, tour packages, destination guides, and an online booking experience.",
        tags: ["Html", "CSS", "JavaScript"],
    },
    {
        title: "Website Theqa",
        description: "Modern corporate website for Thiqa with service showcases, company information, client-focused solutions, contact features, and a fully responsive design.",
        tags: ["Html", "Css", "JavaScript"],
    },
    {
        title: "Calculator",
        description: "Modern calculator application featuring real-time calculations, intuitive controls, responsive design, and a user-friendly interface.",
        tags: ["Html", "CSS", "JavaScript"],
    },
    {
        title: "TechSphere",
        description: "A modern technology website featuring the latest tech news, product highlights, industry insights, and a responsive user experience.",
        tags: ["Html", "CSS", "JavaScript"],
    },
];

import Reveal from "../Reveal";

const Projects = () => {
    return (
        <section id="projects" className="bg-[#f7f4ef] py-28 text-[#211d18] dark:bg-[#171512] dark:text-slate-100">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <Reveal direction="up" delay={0} className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#a8794d]">Selected work</p>
                        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A few things I’ve built</h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-300">Crafting modern, responsive, and user-focused web experiences with clean code and thoughtful design.</p>
                    </Reveal>
                </div>
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <Reveal key={project.title} direction={index % 2 === 0 ? "left" : "right"} delay={0.1 + index * 0.05} className="group rounded-[1.5rem] border border-[#e7ded2] bg-white/80 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cbb397] hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/20">
                            <span className="inline-flex rounded-full bg-[#f2e8dc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#765a3e] dark:bg-slate-800 dark:text-[#dfc3a5]">0{index + 1} / Project</span>
                            <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">{tag}</span>
                                ))}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
