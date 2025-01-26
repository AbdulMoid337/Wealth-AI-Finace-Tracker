"use client";

import React from "react";

const Loader = ({ size = "default", className = "" }) => {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    default: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4",
  };

  const baseClasses = `
    inline-block rounded-full 
    border-t-primary
    border-r-primary/30 
    border-b-primary/10
    border-l-primary/30
    animate-spin
  `;

  return (
    <div className="flex items-center justify-center w-full min-h-[100px]">
      <div className="flex flex-col items-center gap-3">
        <div
          className={`
            ${baseClasses}
            ${sizeClasses[size] || sizeClasses.default}
            ${className}
          `}
        />
        <p className="text-muted-foreground text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

// Loading skeleton for cards or sections
export const LoadingSkeleton = ({ count = 1 }) => {
  return (
    <div className="w-full space-y-4">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="
            w-full h-32 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700
            animate-pulse
          "
        />
      ))}
    </div>
  );
};

// Inline loader for buttons or small areas
export const InlineLoader = ({ className = "" }) => {
  return (
    <div
      className={`
        w-4 h-4 border-2 rounded-full
        border-t-current
        border-r-current/30
        border-b-current/10
        border-l-current/30
        animate-spin
        ${className}
      `}
    />
  );
};

export default Loader;
