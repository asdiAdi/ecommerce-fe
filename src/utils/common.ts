import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SPACING } from "@/constants/tailwind";

export const cx = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

// only used for testing purposes
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const twSizeToPx = (size: number): number => {
  return SPACING * size;
};
