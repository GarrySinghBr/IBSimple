import { z } from 'zod'

export const ingredientSearchRequestSchema = z.object({
  ingredients: z.string().min(1, 'Ingredients cannot be empty'),
})

export const ingredientSearchResponseSchema = z.string()


