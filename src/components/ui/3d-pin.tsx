"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <a
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5,
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute left-1/2 top-1/2 h-44 w-44 rounded-full border border-white/[0.08] bg-black"
            ></motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.6,
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute left-1/2 top-1/2 h-32 w-32 rounded-full border border-white/[0.08] bg-black"
            ></motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.7,
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute left-1/2 top-1/2 h-20 w-20 rounded-full border border-white/[0.08] bg-black"
            ></motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.8,
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full border border-white/[0.08] bg-black"
            ></motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.9,
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full border border-white/[0.08] bg-black"
            ></motion.div>
          </>
        </div>
      </div>
    </motion.div>
  );
};