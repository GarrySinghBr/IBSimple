interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex gap-8 pt-16 mb-12 justify-center w-full">
      <button
        onClick={() => onTabChange("search")}
        className={`bg-transparent border-0 font-medium text-base px-0 pb-2 transition-colors ${
          activeTab === "search"
            ? "text-white border-b-2 border-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Search
      </button>
      <button
        onClick={() => onTabChange("scan")}
        className="bg-transparent border-0 text-gray-400 font-medium text-base px-0 pb-2 hover:text-white transition-colors"
      >
        Scan
      </button>
      <button
        onClick={() => onTabChange("agent")}
        className={`bg-transparent border-0 font-medium text-base px-0 pb-2 transition-colors ${
          activeTab === "agent"
            ? "text-white border-b-2 border-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Agent
      </button>
    </div>
  )
}

