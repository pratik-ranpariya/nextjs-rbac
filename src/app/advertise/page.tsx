export default function AdvertisePage() {
  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Advertise with Us</h1>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Basic</h2>
              <p className="text-3xl font-bold mb-6">$499<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li>✓ Banner Advertisement</li>
                <li>✓ Newsletter Mention</li>
                <li>✓ Social Media Post</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600">
              <h2 className="text-2xl font-bold mb-4">Premium</h2>
              <p className="text-3xl font-bold mb-6">$999<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li>✓ All Basic Features</li>
                <li>✓ Sponsored Content</li>
                <li>✓ Premium Placement</li>
                <li>✓ Performance Analytics</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
              <p className="text-3xl font-bold mb-6">Custom</p>
              <ul className="space-y-3 mb-6">
                <li>✓ All Premium Features</li>
                <li>✓ Custom Solutions</li>
                <li>✓ Dedicated Support</li>
                <li>✓ Brand Integration</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 