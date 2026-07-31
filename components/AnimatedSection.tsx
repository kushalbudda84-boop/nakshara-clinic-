"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
  id?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      id={id}
      className={className}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
