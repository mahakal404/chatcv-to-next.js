"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RNEXT_BRAND } from "@/constants/branding";

export default function RNEXTSignature() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Footer Trigger */}
      <div className="flex items-center text-slate-400 mt-4 sm:mt-0">
        <span className="hidden md:block mx-2 text-slate-500">•</span>
        <p className="text-sm font-medium flex items-center gap-1.5">
          Crafted by
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative group flex items-center gap-0.5 ml-1 focus:outline-none"
            aria-label="About RNEXT Digital Lab"
          >
            {/* RNEXT Text with Hover Glow */}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {RNEXT_BRAND.name}
            </span>
            
            {/* Animated Arrow */}
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>

            {/* Animated Underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
          </button>
        </p>
      </div>

      {/* Glassmorphism Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-sm bg-slate-900/90 border border-slate-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">
                  {RNEXT_BRAND.name}
                </h3>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em] mt-1 mb-4">
                  {RNEXT_BRAND.tagline}
                </p>
                <div className="w-10 h-[1px] bg-slate-700 mx-auto my-4" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  This website was proudly crafted by RNEXT.
                  <br /><br />
                  {RNEXT_BRAND.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-8">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    window.open(RNEXT_BRAND.website, '_blank');
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.3)] hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] active:scale-[0.98]"
                >
                  Explore RNEXT
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 text-slate-300 font-medium hover:bg-slate-800 hover:text-white border border-slate-700 transition-all duration-300 active:scale-[0.98]"
                >
                  Continue Browsing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
