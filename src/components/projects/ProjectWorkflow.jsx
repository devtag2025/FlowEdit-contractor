"use client";
import React, { useState } from "react";
import { workflowSteps } from "@/utils/workflowSteps";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word.slice(0, 1))
    .join("")
    .toUpperCase();

const ProjectWorkflow = ({ currentStep }) => {
  const [clickedRole, setClickedRole] = useState(null);

  const handleClick = (stepId, roleName, isPrimary, isActive) => {
    if (isActive && isPrimary) {
      setClickedRole({ stepId, roleName });
    }
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex items-start w-full gap-6 overflow-x-auto scrollbar-hide">
        {workflowSteps.map((step) => {
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="pt-2 flex flex-col items-center flex-shrink-0 w-[140px] md:w-auto md:flex-1"
            >
              <div
                className={`px-6 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 text-center ${
                  isActive
                    ? "bg-primary text-white shadow-lg ring-8 ring-gray-300"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {step.label}
              </div>

              <div className="flex justify-center gap-2 mt-6 w-full flex-nowrap">
                {step.roles.map((role, idx) => {
                  const isPrimary = role.role.includes("Primary");
                  const isClicked =
                    clickedRole?.stepId === step.id &&
                    clickedRole?.roleName === role.name;

                  return (
                    <div key={idx} className="flex flex-col items-center gap-3">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            onClick={() =>
                              handleClick(
                                step.id,
                                role.name,
                                isPrimary,
                                isActive,
                              )
                            }
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-xs md:text-sm text-white font-bold transition-all duration-300 opacity-40 ${role.color} ${isActive && role.role.includes("Primary") ? "ring-4 ring-gray-500/50 opacity-60 cursor-pointer" : ""} ${isClicked ? "opacity-100 ring-4 scale-110" : ""} `}
                            style={
                              isClicked ? { "--tw-ring-color": role.color } : {}
                            }
                          >
                            {getInitials(role.name)}
                          </div>
                        </TooltipTrigger>

                        <TooltipContent
                          side="top"
                          align="center"
                          className={`max-w-xs text-xs ${isActive && role.role.includes("Primary") ? "opacity-100" : "opacity-30"}`}
                        >
                          {role.name} - {role.role}
                        </TooltipContent>
                      </Tooltip>

                      <span className="text-[9px] md:font-semibold uppercase text-center leading-tight max-w-20 text-slate-400">
                        {role.role}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default ProjectWorkflow;
