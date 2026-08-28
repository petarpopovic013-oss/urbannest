"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type ImageProps } from "next/image";

type ParallaxImageProps = ImageProps & {
  containerClassName?: string;
  parallaxOffset?: number; // How much the image moves in pixels
};

export function ParallaxImage({
  containerClassName = "",
  parallaxOffset = 150,
  alt,
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallaxOffset / 2, parallaxOffset / 2]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden w-full h-full ${containerClassName}`}
    >
      <motion.div
        style={{ y, scale: 1.15 }}
        className="absolute inset-0 h-full w-full origin-center"
      >
        <Image alt={alt} {...props} />
      </motion.div>
    </div>
  );
}
