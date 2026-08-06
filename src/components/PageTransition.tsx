"use client";

import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <div key={pathname} className="min-h-0">
      {children}
    </div>
  );
};

export default PageTransition;
