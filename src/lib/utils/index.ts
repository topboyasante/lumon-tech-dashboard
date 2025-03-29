import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function globalTableFilterFn(
  row: any,
  columnId: any,
  filterValues: any,
): boolean {
  const status: string = row.getValue(columnId);
  return filterValues.includes(status.toLowerCase());
}

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function numberWithCommas(x: number | string): string {
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
