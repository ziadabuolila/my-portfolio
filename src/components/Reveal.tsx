"use client";

import type { ReactNode } from "react";

type RevealDirection = "left" | "right" | "up" | "down";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
}

const Reveal = ({
  children,
  className = "",
}: RevealProps) => {
  return <div className={className}>{children}</div>;
};

export default Reveal;
