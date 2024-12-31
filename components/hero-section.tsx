'use client'

import { ChevronRight, Github } from 'lucide-react';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20 dark:from-background dark:via-background/95 dark:to-background/50" />
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-500 opacity-20 dark:from-primary dark:to-purple-600 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm dark:bg-secondary">
            <span className="text-muted-foreground">
              New v1.0 Released
            </span>
            <span className="ml-3 inline-flex items-center gap-1 text-primary hover:text-primary/80">
              <Link className='underline' href={"https://www.shapexui.site/"}>Learn more</Link>
              <ChevronRight className="size-3" />
            </span>
          </div>
          <h1 className="font-heading mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Build Next-Gen Interfaces with{' '}
            <span className="text-gradient bg-gradient-to-r from-primary to-purple-600">
              ShapeXUI
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A beautifully crafted design system that combines modern aesthetics with
            exceptional developer experience. Create stunning applications with
            minimal effort.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/docs"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "default",
                }),
                "rounded-full gap-2"
              )}
            >
              Get Started
              <ChevronRight className="size-4" />
            </Link>
            <Link
              href="https://github.com/yogesh2104/saas-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "rounded-full gap-2"
              )}
            >
              <Github className="size-4" />
              Star on GitHub
            </Link>
          </div>

        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-6xl flex justify-center">
        <div className="rounded-lg bg-background w-full p-3 shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10">
          <div className="h-[30rem]">
            <Image 
              src="/undraw.svg"
              alt="Component Preview"
              fill
              className="rounded-lg border shadow-sm p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

