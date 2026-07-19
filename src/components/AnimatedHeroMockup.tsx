'use client';

import { motion } from 'motion/react';
import { User, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function AnimatedHeroMockup() {
  const typingTransition = {
    duration: 2,
    repeat: Infinity,
    repeatDelay: 1,
    ease: "easeInOut" as const
  };

  const previewTransition = {
    duration: 2,
    repeat: Infinity,
    repeatDelay: 1,
    ease: "easeInOut" as const,
    delay: 0.5 // Slight delay to simulate the resume updating after typing starts
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-20 relative group px-4 md:px-0">
      {/* Background Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/30 via-brand-pink/30 to-brand-indigo/30 rounded-[40px] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Main Container - Glassmorphism */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-[32px] shadow-2xl shadow-slate-900/10 border border-white/60 overflow-hidden flex flex-col md:flex-row aspect-auto md:aspect-[1.8/1]">
        
        {/* Left Side: Fake Editor */}
        <div className="w-full md:w-5/12 bg-slate-50/80 border-b md:border-b-0 md:border-r border-slate-200/60 p-6 md:p-8 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
              <User className="w-5 h-5 text-brand-purple" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">Personal Info</div>
              <div className="text-xs text-slate-500 font-medium">Updating real-time...</div>
            </div>
          </div>

          {/* Fake Input 1: Full Name */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Full Name</div>
            <div className="h-10 bg-white rounded-lg border border-slate-200 p-2 flex items-center overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "60%" }}
                transition={typingTransition}
                className="h-full bg-slate-200 rounded-md"
              />
            </div>
          </div>

          {/* Fake Input 2: Job Title */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Job Title</div>
            <div className="h-10 bg-white rounded-lg border border-slate-200 p-2 flex items-center overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "40%" }}
                transition={{ ...typingTransition, delay: 0.2 }}
                className="h-full bg-slate-200 rounded-md"
              />
            </div>
          </div>

          {/* Fake Input 3: Experience */}
          <div className="space-y-2 mt-4 hidden sm:block">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-slate-400" />
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experience</div>
            </div>
            <div className="h-24 bg-white rounded-lg border border-slate-200 p-3 flex flex-col gap-2 overflow-hidden">
              <div className="h-2 w-1/3 bg-slate-200 rounded-full" />
              <div className="h-2 w-1/4 bg-slate-100 rounded-full mb-2" />
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "80%" }}
                transition={{ ...typingTransition, delay: 0.4 }}
                className="h-2 bg-brand-purple/20 rounded-full"
              />
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "60%" }}
                transition={{ ...typingTransition, delay: 0.6 }}
                className="h-2 bg-brand-purple/20 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Fake A4 Preview */}
        <div className="w-full md:w-7/12 bg-slate-200/50 p-6 md:p-10 flex items-center justify-center relative overflow-hidden">
          
          {/* A4 Document */}
          <div className="w-full max-w-[400px] aspect-[1/1.414] bg-white rounded-lg shadow-xl shadow-slate-300/40 p-6 md:p-8 flex flex-col gap-6 transform origin-top md:origin-center scale-90 md:scale-100 relative">
            
            {/* Header Section */}
            <div className="flex flex-col items-center gap-3 border-b border-slate-100 pb-6">
              <motion.div 
                initial={{ width: "30%", opacity: 0.5 }}
                animate={{ width: "60%", opacity: 1 }}
                transition={previewTransition}
                className="h-6 bg-slate-800 rounded-md"
              />
              <motion.div 
                initial={{ width: "20%", opacity: 0.5 }}
                animate={{ width: "40%", opacity: 1 }}
                transition={{ ...previewTransition, delay: 0.7 }}
                className="h-3 bg-brand-purple/60 rounded-full"
              />
              <div className="flex gap-2 mt-2">
                <div className="h-2 w-12 bg-slate-200 rounded-full" />
                <div className="h-2 w-12 bg-slate-200 rounded-full" />
                <div className="h-2 w-12 bg-slate-200 rounded-full" />
              </div>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col gap-4">
              <div className="h-3 w-24 bg-slate-300 rounded-full mb-1" />
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="h-3 w-32 bg-slate-700 rounded-full" />
                  <div className="h-2 w-16 bg-slate-200 rounded-full mt-1" />
                </div>
                <div className="h-2 w-24 bg-brand-purple/40 rounded-full mb-1" />
                <motion.div 
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...previewTransition, delay: 0.9 }}
                  className="h-2 w-[90%] bg-slate-200 rounded-full ml-3"
                />
                <motion.div 
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...previewTransition, delay: 1.1 }}
                  className="h-2 w-[75%] bg-slate-200 rounded-full ml-3"
                />
              </div>

              <div className="flex flex-col gap-2 mt-2 opacity-60">
                <div className="flex justify-between">
                  <div className="h-3 w-28 bg-slate-700 rounded-full" />
                  <div className="h-2 w-16 bg-slate-200 rounded-full mt-1" />
                </div>
                <div className="h-2 w-20 bg-brand-purple/40 rounded-full mb-1" />
                <div className="h-2 w-[85%] bg-slate-200 rounded-full ml-3" />
                <div className="h-2 w-[60%] bg-slate-200 rounded-full ml-3" />
              </div>
            </div>
            
          </div>

          {/* Floating ATS Badge */}
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-brand-dark text-white px-4 md:px-6 py-2 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 shadow-2xl animate-bounce"
          >
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            <span className="text-xs md:text-sm font-bold">ATS Score: 98/100</span>
          </motion.div>
          
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-pink/20 rounded-full blur-2xl hidden md:block" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-indigo/20 rounded-full blur-2xl hidden md:block" />
    </div>
  );
}
