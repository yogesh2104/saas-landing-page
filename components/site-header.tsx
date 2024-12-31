"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Framer, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ContactForm from "@/components/contact-form";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Sign UP", href: "/sign-up" },
];

const listVariants = {
  closed: { x: "100vh" },
  opened: {
    x: 0,
    transition: { type: "tween", when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const listItemVariants = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={"container mx-auto p-1 rounded-full supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full border-b bg-background/40 backdrop-blur-lg"}
    >
      <div className="flex justify-between items-center h-[70px]">
        <Link
          href="/"
          className="flex items-center cursor-pointer h-9 w-28 ml-5 md:ml-[-20px]"
        >
          <Framer className="size-12 border rounded-md bg-white text-black p-1" />
        </Link>

        <nav className="hidden md:flex items-center gap-14">
          <div className="flex gap-12 md:gap-14">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm lg:text-lg ${
                  pathname === item.href ? "text-blue-500" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="rounded-full mr-[-20px]">Contact</Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-screen md:max-w-[80vw] m-auto"
            >
              <SheetHeader>
                <SheetTitle>Reach Out to Us</SheetTitle>
              </SheetHeader>
              <ContactForm />
            </SheetContent>
          </Sheet>
        </nav>

        <div className="md:hidden mr-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6 dark:text-white text-black" />
            )}
          </Button>

          {mobileMenuOpen && (
            <motion.nav
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="fixed inset-0 w-screen h-screen bg-white flex flex-col items-center justify-center gap-8 text-2xl z-40"
            >
              {navItems.map((item) => (
                <motion.div key={item.title} variants={listItemVariants}>
                  <Link
                    href={item.href}
                    className="text-black whitespace-nowrap"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={listItemVariants}>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="text-xl whitespace-nowrap bg-gradient-to-l from-[#091C82] to-[#182046] hover:bg-[#393baf] text-white rounded-full">
                      Contact Us
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="top"
                    className="w-screen md:max-w-[80vw] m-auto"
                  >
                    <SheetHeader>
                      <SheetTitle>Reach Out to Us</SheetTitle>
                    </SheetHeader>
                    <ContactForm />
                  </SheetContent>
                </Sheet>
              </motion.div>
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
