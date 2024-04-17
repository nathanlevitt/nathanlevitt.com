"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip";
import { Skeleton } from "@/components/skeleton";
import { cn } from "@/lib/utils";
import { useHydration } from "@/hooks/use-hydration";

const schedule = [
  { title: "🏋️ Working out", status: "idle", start: 5, end: 7 },
  { title: "🍳 Breakfast + emails", status: "on", start: 7, end: 8 },
  { title: "🚀 Shipping", status: "on", start: 8, end: 13 },
  { title: "🥗 Lunch", status: "idle", start: 13, end: 14 },
  { title: "🚀 Shipping", status: "on", start: 14, end: 18 },
  { title: "🍽 Dinner", status: "idle", start: 18, end: 19 },
  { title: "💡 Side projects", status: "on", start: 19, end: 22 },
  { title: "🛀 Winding down", status: "idle", start: 22, end: 23 },
  { title: "😴 Sleeping", status: "off", start: 23, end: 5 },
] as const;

export function DigitalClock() {
  const isHydrated = useHydration();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const event = useMemo(() => {
    const hour = time.getHours();

    return (
      schedule.find((slot) => {
        return hour >= slot.start && hour < slot.end;
      }) || { title: "🚀 Shipping", status: "on" }
    );
  }, [time]);

  // Format the time in HH:mm format
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Convert to Los Angeles time
    const laTime = new Date(
      date.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    );
    hours = laTime.getHours();
    minutes = laTime.getMinutes();
    seconds = laTime.getSeconds();

    // Pad single digits with a leading zero
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return {
      hours: formattedHours,
      minutes: formattedMinutes,
      seconds: formattedSeconds,
    };
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <Suspense
      key={isHydrated ? "hydrated" : "skeleton"}
      fallback={<Skeleton className="h-7 w-[150px]" />}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center px-2 space-x-2 bg-white border rounded-full select-none dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center space-x-2">
                <div className="relative w-2 h-2">
                  <div
                    className={cn(
                      "absolute w-2 h-2 rounded-full",
                      event.status === "on" && "bg-green-500",
                      event.status === "off" && "bg-red-500",
                      event.status === "idle" && "bg-yellow-500"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute w-2 h-2 bg-green-500 rounded-full animate-ping",
                      event.status === "on" && "bg-green-500",
                      event.status === "off" && "bg-red-500",
                      event.status === "idle" && "bg-yellow-500"
                    )}
                  />
                </div>
                <p className="text-xs font-medium prose prose-neutral dark:prose-invert">
                  Los Angeles
                </p>
              </div>
              <p className="text-xs font-medium prose opacity-50 prose-neutral dark:prose-invert">
                |
              </p>
              <div className="font-mono">
                <span
                  className="text-xs font-medium leading-6 prose prose-neutral dark:prose-invert"
                  suppressHydrationWarning
                >
                  {hours}:{minutes}:{seconds}
                </span>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs font-medium leading-6">{event.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Suspense>
  );
}
