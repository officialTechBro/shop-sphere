import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//convert prisma Object into a regulat JS object
export function convertToPlainOject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

//format number with decimal places
export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}