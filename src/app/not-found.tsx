"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("no-shell");

    return () => {
      document.body.classList.remove("no-shell");
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-500">404</h1>

        <h2 className="mt-4 text-3xl font-semibold">Oops! Page Not Found</h2>

        <p className="mt-3 text-slate-400 max-w-md mx-auto">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}