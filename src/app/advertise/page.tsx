"use client";
import {
  FaCheck,
  FaChartLine,
  FaUsers,
  FaBullhorn,
  FaNewspaper,
} from "react-icons/fa";
import Advertisement from "@/components/Advertisement";

export default function AdvertisePage() {
  // const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Basic",
      price: "499",
      features: [
        "Banner Advertisement",
        "Newsletter Mention",
        "Social Media Post",
        "Basic Analytics",
        "30-Day Duration",
      ],
      recommended: false,
    },
    {
      name: "Premium",
      price: "999",
      features: [
        "All Basic Features",
        "Featured Content",
        "Premium Placement",
        "Advanced Analytics",
        "Dedicated Support",
        "60-Day Duration",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "All Premium Features",
        "Custom Solutions",
        "Brand Integration",
        "Content Partnership",
        "Priority Support",
        "Custom Duration",
      ],
      recommended: false,
    },
  ];

  const stats = [
    { number: "500K+", label: "Monthly Readers", icon: FaUsers },
    { number: "150K+", label: "Newsletter Subscribers", icon: FaNewspaper },
    { number: "85%", label: "Engagement Rate", icon: FaChartLine },
    { number: "200+", label: "Business Partners", icon: FaBullhorn },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Reach Your Target Audience with Dynamic Business
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Connect with decision-makers and business leaders through
              Australia&apos;s premier business publication
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-red-200" />
                  </div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-red-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement after stats */}
      <Advertisement
        type="leaderboard"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      />

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-600">
            Select the perfect advertising solution for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white shadow-lg overflow-hidden ${
                plan.recommended ? "ring-2 ring-red-600" : ""
              }`}
            >
              {plan.recommended && (
                <div className="bg-red-600 text-white text-sm text-center py-1">
                  Recommended
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-500 ml-2">/month</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <FaCheck className="w-4 h-4 text-red-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  // onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-3 px-6 transition-colors ${
                    plan.recommended
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advertisement between pricing and contact */}
      <Advertisement
        type="banner"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      />

      {/* Contact Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Let&apos;s grow your business together
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Business Email"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Tell us about your advertising goals"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Contact Sales
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
