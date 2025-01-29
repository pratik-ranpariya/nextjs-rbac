import Image from 'next/image';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    date: string;
    content: string;
    author: string;
    authorImage: string;
    featuredImage: string;
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
      <div className="relative w-full h-48">
        <Image
          src={post.authorImage || ''}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {post.content}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <Image
              src={post.authorImage}
              alt={post.author}
              width={32}
              height={32}
              className="rounded-full object-cover w-10 h-10"
            />
            <span className="ml-2 text-sm font-medium text-gray-900">
              {post.author}
            </span>
          </div>
          <time className="text-sm text-gray-500">
            {post.date}
          </time>
        </div>
      </div>
    </article>
  );
}