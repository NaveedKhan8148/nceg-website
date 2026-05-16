function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Education Website
          </h1>
          <p className="text-xl text-gray-600">
            Learn Something New Today
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Quality Courses</h3>
            <p className="text-gray-600">Access high-quality educational content from experts</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
            <p className="text-gray-600">Learn from experienced professionals in every field</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Certificates</h3>
            <p className="text-gray-600">Earn certificates upon completion of courses</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;