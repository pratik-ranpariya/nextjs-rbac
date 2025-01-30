import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Article Not Found</h2>
        <p className="text-gray-600 mb-8">
          The article you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
