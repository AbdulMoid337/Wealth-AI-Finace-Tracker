"use client";
import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState, useEffect } from "react";
import Darkmode from './Darkmode'

const Header = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  return (
    <header className="fixed top-0 w-full bg-cream dark:bg-charcoal backdrop-blur-md z-50 border-b dark:border-graphite">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/welth.png"
              alt="Welth Logo"
              width={90}
              height={90}
              className="h-12 w-auto object-contain bg-sand rounded dark:bg-sand dark:rounded"
            />
          </Link>
          {isMounted && <div className="flex items-center pt-2"><Darkmode /></div>}
        </div>

        <div className="hidden md:flex items-center pr-32 space-x-4">
          <SignedOut>
            <a href="#features" className="text-blackish dark:text-tan hover:text-gold dark:hover:text-champagne">
              Features
            </a>
            <a href="#testimonials" className="text-blackish dark:text-tan hover:text-gold dark:hover:text-champagne">
              Testimonials
            </a>
          </SignedOut>
        </div>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard" className="text-blackish dark:text-tan hover:text-gold dark:hover:text-champagne flex items-center gap-2">
              <Button variant="outline" className="border-chocolate dark:border-tan">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create" className="flex items-center gap-2">
              <Button className="bg-sand hover:bg-softgold text-black dark:bg-sand dark:hover:bg-copper">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" className="border-chocolate dark:border-tan">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;