"use client";

import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full">
      {/* Display progress percentage */}
      <div className="flex justify-between mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-3 rounded-full bg-blue-500 dark:bg-blue-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
