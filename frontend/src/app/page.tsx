export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Welcome to{' '}
          <span className="text-green-600">IBSimple</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Helping people with IBS and SIBO quickly assess the FODMAP impact of
          foods and recipes
        </p>
        <div className="mt-8">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Coming Soon</span>
          </div>
        </div>
      </div>
    </main>
  )
}
