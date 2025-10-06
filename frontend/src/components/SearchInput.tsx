export function SearchInput() {
  return (
    <div className="flex justify-center items-start w-full flex-1 pt-40">
      <div
        className="rounded-2xl p-6 w-full max-w-3xl"
        style={{
          backgroundColor: '#1a1b1e',
          borderWidth: '1px',
          borderColor: '#2a2b2e',
        }}
      >
        <textarea
          placeholder="Enter ingredients for FODMAP analysis... (e.g., wheat bread, garlic, onions, lactose-free milk)"
          className="w-full bg-transparent text-white placeholder:text-gray-500 text-base outline-none resize-none min-h-[64px]"
          rows={2}
        />
        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-500 text-sm">
            {/* Model selector could go here */}
          </div>
          <button
            className="text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            style={{ backgroundColor: '#2a2b2e' }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

