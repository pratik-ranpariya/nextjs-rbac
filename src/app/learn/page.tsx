import Image from 'next/image';
import Link from 'next/link';

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block p-2 bg-red-50 rounded-full mb-4">
            <div className="bg-red-600/10 rounded-full p-3">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Center Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're building something amazing to help you learn and grow.
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Expert-Led Courses",
                  description: "Learn from industry leaders and experienced professionals"
                },
                {
                  title: "Interactive Workshops",
                  description: "Engage in hands-on learning experiences and real-world projects"
                },
                {
                  title: "Business Resources",
                  description: "Access comprehensive guides, templates, and tools"
                },
                {
                  title: "Community Support",
                  description: "Connect with peers and mentors in your industry"
                }
              ].map((feature, index) => (
                <div key={index} className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Get Notified When We Launch
            </h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 