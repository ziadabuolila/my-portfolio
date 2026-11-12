import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="hidden md:flex items-center space-x-8">
            <Link className="text-slate-700 transition hover:text-[#6366a8] dark:text-slate-300 dark:hover:text-[#6366a8] capitalize" href="/">
                Home
            </Link>
            <Link className="text-slate-700 transition hover:text-[#6366a8] dark:text-slate-300 dark:hover:text-[#6366a8] capitalize" href="/about">
                About
            </Link>
            <Link className="text-slate-700 transition hover:text-[#6366a8] dark:text-slate-300 dark:hover:text-[#6366a8] capitalize" href="/experience">
                Experience
            </Link>
        </nav>
    );
};

export default NavBar;
