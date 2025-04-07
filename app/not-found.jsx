"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-beige dark:from-blackish dark:to-charcoal">
      <div className="text-center px-6 py-8 rounded-lg backdrop-blur-sm bg-beige/50 dark:bg-charcoal/50 shadow-xl">
        <div className="relative mb-8">
          <div className="text-[150px] font-black text-khaki dark:text-mocha select-none leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent gradient-title bg-black">
              Page Not Found
            </h1>
          </div>
        </div>
        
        <p className="text-blackish dark:text-tan mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have vanished into thin air. 
          Don't worry, you can easily navigate back or head to the dashboard.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border-chocolate dark:border-tan text-blackish dark:text-tan hover:bg-champagne dark:hover:bg-slate"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Go Back
          </Button>
          <Link href="/dashboard">
            <Button className="flex items-center gap-2 bg-gold hover:bg-softgold text-cream dark:bg-bronze dark:hover:bg-copper">
              <HomeIcon className="w-4 h-4" />
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}