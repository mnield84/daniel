"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

interface AnimatedComponentProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fadeIn"
    | "fadeInUp"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "slideInUp";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function AnimatedComponent({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: AnimatedComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={animationVariants[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for animating multiple children
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  threshold?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  animation = "fadeInUp",
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = animationVariants[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
