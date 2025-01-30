import Link from 'next/link';

export default function ToolsPage() {
  const tools = [
    {
      title: "Business Plan Generator",
      description: "Create professional business plans with our easy-to-use template",
      icon: "📝",
      href: "/tools/business-plan"
    },
    {
      title: "Financial Calculator",
      description: "Calculate loans, investments, and other financial metrics",
      icon: "🧮",
      href: "/tools/calculator"
    },
    {
      title: "Market Research",
      description: "Access market data and generate insights for your business",
      icon: "📊",
      href: "/tools/research"
    },
    {
      title: "Legal Document Templates",
      description: "Download and customize common business legal documents",
      icon: "📄",
      href: "/tools/legal"
    },
    {
      title: "Email Marketing",
      description: "Create and manage email marketing campaigns",
      icon: "📧",
      href: "/tools/email"
    },
    {
      title: "Social Media Planner",
      description: "Plan and schedule your social media content",
      icon: "📱",
      href: "/tools/social"
    }
  ];

  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Business Tools</h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link 
                key={tool.title}
                href={tool.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h2 className="text-xl font-bold mb-2">{tool.title}</h2>
                <p className="text-gray-600">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 