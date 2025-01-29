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

//format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatError = async (error: any) => {
  if (error.name === 'ZodError'){
    // Handle Zod error
    const fieldErrors = Object.keys(error.errors).map(
      (field) => error.errors[field].message
    )

    return fieldErrors.join('. ')
  } else if (error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002') {
    // Hande Prisma error
    const field = error.meta?.target ? error.meta.target[0] : 'Field'
    return `${field.charAt(0).toUpperCase()}`
  } else {
    // Handle other errrs
    return typeof error.message === 'string' ? error.message : JSON.stringify(error.message)
  }
}