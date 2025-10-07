import { useState } from 'react'

import { searchIngredients } from '../api'
import type { IngredientSearchResponse } from '../types'

export function useIngredientSearch() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<IngredientSearchResponse | null>(null)

  const search = async (ingredients: string) => {
    if (!ingredients.trim()) {
      setError('Please enter ingredients')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const result = await searchIngredients({ ingredients })
      setData(result)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to search ingredients'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setData(null)
    setError(null)
  }

  return {
    search,
    reset,
    isLoading,
    error,
    data,
  }
}


