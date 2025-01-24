'use server'
// import { PrismaClient } from "@prisma/client"
import { prisma } from "@/db/prisma"
import { convertToPlainOject } from "../utils"
import { LATEST_PRODUCTS_LIMIT } from "../constants"
// Gat Latest Products
export const getLatestProducts = async() => {
    // const prisma = new PrismaClient()

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    })
    return convertToPlainOject(data)
}

//get single product by slug
export const getProductBySlug = async (slug: string) => {
    return await prisma.product.findFirst({
        where: {
            slug: slug
        }
    })
}
