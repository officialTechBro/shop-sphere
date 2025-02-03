import {z} from 'zod'
import { insertProductSchema, CartItemSchema, insertCartSchema } from '@/lib/validator';



export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: string;
    createdAt: Date;
    numReviews: number
}

export type Cart = z.infer<typeof insertCartSchema>

export type CartItem = z.infer<typeof CartItemSchema>