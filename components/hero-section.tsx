'use client'

import { ChevronRight } from 'lucide-react';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-purple-100 to-[#6C63FF] px-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[bottom_1px_center] dark:bg-grid-slate-700/25 mask-image-[linear-gradient(to_bottom,white_40%,transparent_60%)]" />
      <div className="relative z-10 max-w-5xl mx-auto py-28">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Introducing <span className="text-[#6C63FF]">ShapeXUI</span>
        </motion.h1>
        <motion.p 
          className="max-w-2xl text-xl text-slate-700 mb-10 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The design system tailored for entrepreneurs who prefer taking it easy. Say goodbye to lengthy design processes and hello to rapid development.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/blocks"  
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "gap-2 whitespace-pre",
              "group relative rounded-full text-lg font-semibold tracking-wide bg-[#6C63FF] hover:bg-[#5B54E0] text-white shadow-lg hover:shadow-xl transition-all duration-300",
            )}
          >
            Get Started
            <ChevronRight className="ml-1 size-5 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </Link>
          <Link
            href="/why-this-product"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
              }),
              "gap-2 whitespace-pre",
              "group relative rounded-full text-lg font-semibold tracking-wide border-2 hover:text-white transition-all duration-300",
            )}
          >
            Why This Product
            <ChevronRight className="ml-1 size-5 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
      <motion.div 
        className="w-full max-w-4xl mx-auto bottom-0 bg-white rounded-t-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-t-2xl">
          <div className="bg-white rounded-t-xl p-4">
            <img 
              src="/undraw.svg" 
              alt="ShapeXUI Preview" 
              className="w-full h-auto max-h-[30rem] object-cover rounded-lg shadow-inner"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

