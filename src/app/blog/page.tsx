import BlogPost from '../../components/BlogPost';
import Navbar from '@/components/Navbar';

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  author: string;
  authorImage: string;
  featuredImage: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Business Growth",
    date: "March 15, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    authorImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9-768x432.jpg&w=750&q=75",
    featuredImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9-768x432.jpg&w=750&q=75",
  },
  {
    id: 2,
    title: "10 Tips for Business Growth",
    date: "March 15, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    authorImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9-768x432.jpg&w=750&q=75",
    featuredImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9-768x432.jpg&w=750&q=75",
  },
  {
    id: 3,
    title: "10 Tips for Business Growth",
    date: "March 15, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    authorImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9-768x432.jpg&w=750&q=75",
    featuredImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9-768x432.jpg&w=750&q=75",
  },
  {
    id: 4,
    title: "10 Tips for Business Growth",
    date: "March 15, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    authorImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9-768x432.jpg&w=750&q=75",
    featuredImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9-768x432.jpg&w=750&q=75",
  },
  {
    id: 5,
    title: "How to Improve Customer Service",
    date: "March 10, 2024",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
    authorImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-19-768x432.jpg&w=750&q=75",
    featuredImage: "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-19-768x432.jpg&w=750&q=75",
  },
];


export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
