"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedGlassmorphism = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Pink gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100" />

      {/* Animated glass shapes */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-pink-200/20 backdrop-blur-md border border-white/30"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[30%] w-72 h-72 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[30%] left-[25%] w-96 h-96 rounded-full bg-pink-100/20 backdrop-blur-md border border-white/30"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedGlassmorphism;
