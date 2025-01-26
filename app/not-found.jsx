"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-6 py-8 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 shadow-xl">
        <div className="relative mb-8">
          <div className="text-[150px] font-black text-zinc-400 dark:text-gray-700 select-none leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent gradient-title bg-black">
              Page Not Found
            </h1>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have vanished into thin air. 
          Don't worry, you can easily navigate back or head to the dashboard.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Go Back
          </Button>
          <Link href="/dashboard">
            <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all">
              <HomeIcon className="w-4 h-4" />
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}