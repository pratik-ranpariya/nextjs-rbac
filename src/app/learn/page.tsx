import Image from 'next/image';
import Link from 'next/link';

export default function LearnPage() {
  const courses = [
    {
      title: "Business Fundamentals",
      description: "Learn the basics of starting and running a successful business",
      duration: "6 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      title: "Digital Marketing",
      description: "Master the art of online marketing and customer acquisition",
      duration: "8 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
    },
    {
      title: "Financial Management",
      description: "Understanding business finance and investment strategies",
      duration: "10 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    }
  ];

  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">COming Soon...</h1>
        </div>
      </div>
    </main>
  );
} 