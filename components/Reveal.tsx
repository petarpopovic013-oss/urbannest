"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}: RevealProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "0px 0px -48px" }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.2, 0.7, 0.2, 1], // easeOutQuint (similar to previous CSS cubic-bezier)
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
