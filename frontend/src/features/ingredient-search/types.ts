import { z } from 'zod'

import {
  ingredientSearchRequestSchema,
  ingredientSearchResponseSchema,
} from './schemas'

export type IngredientSearchRequest = z.infer<typeof ingredientSearchRequestSchema>
export type IngredientSearchResponse = z.infer<typeof ingredientSearchResponseSchema>


