"use client";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
 
 // A simple brain icon component for visual flair
 const BrainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7h0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2Z" />
    <path d="M12 12a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 12 17h0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 12 12Z" />
    <path d="M4.5 12A2.5 2.5 0 0 1 7 14.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 2 14.5v0A2.5 2.5 0 0 1 4.5 12Z" />
    <path d="M19.5 12a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h0a2.5 2.5 0 0 1-2.5-2.5v0a2.5 2.5 0 0 1 2.5-2.5Z" />
    <path d="M12 7v5" />
    <path d="M7 7.5v7" />
    <path d="M17 7.5v7" />
  </svg>
 );
 
 export default function Page() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
 
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 p-4 text-white">
      <motion.div
        className="flex flex-col items-center text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
 
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Welcome to the Quizzapp
        </motion.h1>
 
        <motion.p variants={itemVariants} className="mb-8 text-lg md:text-xl text-gray-300">
          Challenge your mind and expand your knowledge. Are you ready to test your wits?
        </motion.p>
 
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/Toooommi" className="inline-block rounded-lg bg-orange-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            Start the Challenge
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
 }
