import { 
  FaChartBar, FaFileAlt, FaCalculator, FaSearch, 
  FaEnvelope, FaShareAlt, FaArrowRight 
} from 'react-icons/fa';
import Advertisement from '@/components/Advertisement';

export default function ToolsPage() {
  const tools = [
    {
      title: "Business Plan Generator",
      description: "Create professional business plans with our easy-to-use template and AI-powered suggestions.",
      icon: FaFileAlt,
      category: "Planning",
      status: "Popular"
    },
    {
      title: "Financial Calculator",
      description: "Calculate loans, investments, and other financial metrics for your business decisions.",
      icon: FaCalculator,
      category: "Finance",
      status: "New"
    },
    {
      title: "Market Research",
      description: "Access comprehensive market data and generate insights for your business strategy.",
      icon: FaSearch,
      category: "Research",
      status: ""
    },
    {
      title: "Analytics Dashboard",
      description: "Track and visualize your business performance metrics in real-time.",
      icon: FaChartBar,
      category: "Analytics",
      status: "Beta"
    },
    {
      title: "Email Campaign Manager",
      description: "Create and manage professional email marketing campaigns with ease.",
      icon: FaEnvelope,
      category: "Marketing",
      status: ""
    },
    {
      title: "Social Media Planner",
      description: "Plan and schedule your social media content across multiple platforms.",
      icon: FaShareAlt,
      category: "Marketing",
      status: "Popular"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Business Tools & Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to start, run, and grow your business efficiently
            </p>
          </div>
        </div>
      </div>

      {/* Advertisement after hero section */}
      <Advertisement type="leaderboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" />

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-red-50">
                  <tool.icon className="w-6 h-6 text-red-600" />
                </div>
                {tool.status && (
                  <span className={`text-xs font-medium px-2.5 py-1 ${
                    tool.status === 'New' ? 'bg-green-100 text-green-800' :
                    tool.status === 'Popular' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tool.status}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{tool.category}</span>
                <button className="text-red-600 hover:text-red-700 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  Try Now <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advertisement between tool grid sections */}
      <Advertisement type="banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" />

      {/* CTA Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Tool?</h2>
            <p className="text-gray-600 mb-8">
              We're constantly adding new tools. Let us know what would help your business.
            </p>
            <button className="px-8 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors">
              Request a Tool
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 