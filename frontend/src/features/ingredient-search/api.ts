import { apiClient } from '@/lib/api-client'

import {
  ingredientSearchRequestSchema,
  ingredientSearchResponseSchema,
} from './schemas'
import type {
  IngredientSearchRequest,
  IngredientSearchResponse,
} from './types'

export async function searchIngredients(
  request: IngredientSearchRequest
): Promise<IngredientSearchResponse> {
  const validatedRequest = ingredientSearchRequestSchema.parse(request)

  const response = await apiClient.post<IngredientSearchResponse>(
    '/search',
    validatedRequest
  )

  const validatedResponse = ingredientSearchResponseSchema.parse(response)
  console.log('Backend response:', validatedResponse)

  return validatedResponse
}

