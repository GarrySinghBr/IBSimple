"use client"

import { useState, useEffect } from "react"
import { useIngredientSearch } from "@/features/ingredient-search/hooks/useIngredientSearch"

export function SearchInput() {
  const [inputValue, setInputValue] = useState("")
  const { search, isLoading, error, data } = useIngredientSearch()

  const allExamples = [
    { display: "Apple, Garlic, Onion", value: "Apple, Garlic, Onion" },
    { display: "Banana, Oats, Lactose-free Milk", value: "Banana, Oats, Lactose-free Milk" },
    { display: "Broccoli, Cauliflower", value: "Broccoli, Cauliflower" },
    { display: "Cheddar Cheese, Crackers", value: "Cheddar Cheese, Crackers" },
    { display: "Eggs, Mushrooms", value: "Eggs, Mushrooms" },
    { display: "Sandwich Bread", value: "Enriched Wheat Flour, Water, Sugar, Yeast, Soybean Oil, Salt, Wheat Gluten, Calcium Sulfate, Sodium Stearoyl Lactylate, Ascorbic Acid, Calcium Propionate" },
    { display: "Chocolate Protein Shake", value: "Water, Milk Protein Concentrate, Cocoa Powder, Canola Oil, Soy Lecithin, Cellulose Gel, Natural and Artificial Flavors, Sucralose, Acesulfame Potassium, Carrageenan, Salt" },
    { display: "Pasta Sauce", value: "Crushed Tomatoes, Tomato Puree, Olive Oil, Onion, Garlic, Carrots, Red Bell Peppers, Basil, Oregano, Sugar, Salt, Black Pepper, Citric Acid, Natural Flavor" },
    { display: "Chocolate Chip Cookies", value: "Enriched Wheat Flour, Sugar, Semi-Sweet Chocolate Chips, Palm Oil, Eggs, Butter, Cream, Salt, Baking Soda, Natural Vanilla Flavor, Cocoa Butter, Dextrose, Soy Lecithin" },
    { display: "Canned Chili", value: "Water, Beef, Pinto Beans, Tomato Paste, Green Bell Peppers, Onions, Corn Flour, Chili Pepper, Garlic Powder, Paprika, Spices, Salt, Sugar, Modified Corn Starch, Yeast Extract, Citric Acid, Natural Flavors" },
    { display: "Granola", value: "Whole Grain Oats, Honey, Brown Sugar, Almonds, Sunflower Seeds, Raisins, Dried Cranberries, Cranberries, Sunflower Oil, Coconut Oil, Vanilla Extract, Cinnamon, Sea Salt" },
    { display: "Ranch Dressing", value: "Vegetable Oil, Soybean Oil, Canola Oil, Water, Egg Yolks, Buttermilk, Vinegar, Salt, Garlic Powder, Onion Powder, Xanthan Gum, Monosodium Glutamate, Parsley, Natural Flavors, Calcium Disodium EDTA" },
  ]

  const [displayedExamples, setDisplayedExamples] = useState<typeof allExamples>([])

  useEffect(() => {
    // Get 3 random examples on initial load
    const shuffled = [...allExamples].sort(() => Math.random() - 0.5)
    setDisplayedExamples(shuffled.slice(0, 3))
  }, [])

  const handleChipClick = (example: typeof allExamples[0]) => {
    setInputValue(example.value)
  }

  const handleSearch = async () => {
    if (inputValue.trim()) {
      await search(inputValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSearch()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4">
      <div className="w-full max-w-3xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white mb-3">
            Check your ingredients for <span className="text-red-300">FODMAPs</span>
          </h1>
          <p className="text-gray-400 text-base">
            Enter or paste ingredients to get severity ratings with serving-size context.
          </p>
        </div>

        {/* Input Box */}
        <div
          className="rounded-2xl p-6 w-full mb-6"
          style={{
            backgroundColor: '#1a1b1e',
            borderWidth: '1px',
            borderColor: '#2a2b2e',
          }}
        >
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter ingredients for FODMAP analysis..."
            className="w-full bg-transparent text-white placeholder:text-gray-500 text-base outline-none resize-none min-h-[64px] max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            style={{
              height: 'auto',
              minHeight: '64px',
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement
              target.style.height = 'auto'
              target.style.height = Math.min(target.scrollHeight, 300) + 'px'
            }}
            disabled={isLoading}
          />
          <div className="flex items-center justify-between mt-4">
            <div className="text-gray-500 text-sm">
              {error && <span className="text-red-400">{error}</span>}
            </div>
            <button
              onClick={handleSearch}
              disabled={isLoading || !inputValue.trim()}
              className="text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#2a2b2e' }}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mb-8">
          <p className="text-gray-400 text-sm mb-3">Examples:</p>
          <div className="flex gap-2 justify-center">
            {displayedExamples.map((example) => (
              <button
                key={example.display}
                onClick={() => handleChipClick(example)}
                className="px-4 py-2 rounded-full text-sm text-gray-300 transition-all hover:text-white hover:border-gray-600 max-w-[250px] truncate"
                style={{
                  backgroundColor: '#1a1b1e',
                  borderWidth: '1px',
                  borderColor: '#2a2b2e',
                }}
                title={example.value}
              >
                {example.display}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            IBSimple provides general dietary guidance only. Not medical advice.
          </p>
        </div>
      </div>
    </div>
  )
}

