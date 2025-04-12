import React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  className?: string;
  children: React.ReactNode;
}

export const Timeline = ({ className, children }: TimelineProps) => {
  return (
    <div className={cn("space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-px before:-ml-px before:h-full before:bg-conference-primary/30 ml-3.5", className)}>
      {children}
    </div>
  );
};

interface TimelineItemProps {
  className?: string;
  children: React.ReactNode;
  active?: boolean;
}

export const TimelineItem = ({
  className,
  children,
  active = false,
}: TimelineItemProps) => {
  return (
    <div className={cn("relative pl-8", className)}>
      <div className={cn(
        "absolute left-0 rounded-full -translate-x-1/2 w-7 h-7 flex items-center justify-center border-2",
        active 
          ? "bg-conference-primary border-conference-primary text-white"
          : "bg-white border-conference-primary/70"
      )}>
        <span className="absolute w-3 h-3 rounded-full bg-conference-primary/80"></span>
      </div>
      <div className="pt-1">
        {children}
      </div>
    </div>
  );
};

interface TimelineDateProps {
  className?: string;
  children: React.ReactNode;
}

export const TimelineDate = ({ className, children }: TimelineDateProps) => {
  return (
    <div className={cn("text-lg font-semibold text-conference-primary", className)}>
      {children}
    </div>
  );
};

interface TimelineContentProps {
  className?: string;
  children: React.ReactNode;
}

export const TimelineContent = ({
  className,
  children,
}: TimelineContentProps) => {
  return (
    <div className={cn("mt-2 text-gray-700", className)}>
      {children}
    </div>
  );
};
