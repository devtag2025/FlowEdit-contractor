"use client";

import React, { useEffect, useState } from "react";
import {
  Play,
  User,
  FileText,
  Mail,
  FileCheck,
  CheckCircle,
  Flag,
  Building,
} from "lucide-react";

const icons = {
  play: Play,
  user: User,
  file: FileText,
  mail: Mail,
  doc: FileCheck,
  check: CheckCircle,
  flag: Flag,
  building: Building,
};

const OnboardingSteps = ({ steps, currentStep }) => {
  const totalSteps = steps.length;
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth(currentStep - 1);
  }, [currentStep]);

  return (
    <div className="relative mt-8 overflow-x-auto">
      <div className="flex items-center relative min-w-[900px] mb-4">
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-purple-200 -translate-y-1/2 z-0 rounded-full" />

        <div
          className="absolute top-1/3 left-0 h-1 bg-primary -translate-y-1/2 z-0 rounded-full transition-all duration-700 ease-out"
          style={{
            width:
              totalSteps > 1
                ? `calc((100% / (${totalSteps - 1})) * ${progressWidth})`
                : "0%",
          }}
        />

        {steps.map((step) => {
          const Icon = icons[step.icon];

          return (
            <div
              key={step.id}
              className="flex-1 flex flex-col items-center relative"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white md:w-14 md:h-14 md:bg-gray-300 rounded-full shadow-lg z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold rounded-full bg-primary md:bg-white text-white md:text-gray-400">
                  <Icon className="h-4 w-4 md:w-5 md:h-5" />
                </div>
              </div>

              <span className="mt-3 font-bold text-xs md:text-sm text-slate-600 text-center">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingSteps;
