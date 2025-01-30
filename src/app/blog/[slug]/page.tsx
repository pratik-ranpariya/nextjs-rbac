import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/utils/BlogData";
import { generateSlug } from "@/types";
import Image from "next/image";
import { FaClock, FaUser, FaCalendar } from 'react-icons/fa';
import Advertisement from '@/components/Advertisement';

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const article = await getArticleBySlug(params.slug);

  console.log(article,"bg-white shadow-sm p-4 md:p-8bg-white shadow-sm p-4 md:p-8bg-white shadow-sm p-4 md:p-8bg-white shadow-sm p-4 md:p-8");

  if (!article) {
    notFound();
  }

  // Calculate reading time safely
  const getReadingTime = () => {
    if (!article.data.content) return '1';
    const words = article.data.content.split(/\s+/).length;
    return Math.ceil(words / 200).toString();
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src="https://picsum.photos/1920/1080"
          alt={article.data.title || 'Article Image'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="absolute bottom-0 w-full p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-3 md:mb-4">
                <span className="bg-red-600 px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-medium text-white">
                  {article.data.category || 'BUSINESS'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                {article.data.title}
              </h1>
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-6 text-white/90 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="bg-red-600/20 p-1.5 rounded">
                    <FaUser className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span>{article.data.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-red-600/20 p-1.5 rounded">
                    <FaCalendar className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span>{article.data.publicationDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-red-600/20 p-1.5 rounded">
                    <FaClock className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span>{getReadingTime()} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* After hero section */}
      <Advertisement type="leaderboard" className="max-w-4xl mx-auto my-8" />

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 md:-mt-16 relative z-10 mb-16">
        <div className="bg-white shadow-sm p-4 md:p-8">
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* First part of content */}
            <Advertisement type="in-article" className="my-8" />
            {article.data.paragraphs && article.data.paragraphs.map((paragraph, index) => (
              <div key={index} className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {paragraph.text}
              {paragraph?.image?.src && (
                <div className="my-4">
                <Image
                  src={paragraph.image.src}
                  alt={paragraph.image.alt}
                  width={800}
                  height={400}
                  className="object-cover"
                />
                </div>
              )}
              </div>
            ))}
          </div>

          {/* Author Bio */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 flex items-center justify-center text-white text-base md:text-xl font-bold">
                {article.data.author?.split(' ').map(n => n[0]).join('') || 'DB'}
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">
                  {article.data.author || 'Dynamic Business'}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Contributing writer at Dynamic Business. Expertise in business strategy and digital transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[1, 2].map((_, index) => (
                <div key={index} className="group">
                  <div className="relative h-40 md:h-48 mb-3 md:mb-4">
                    <Image
                      src={`https://picsum.photos/800/400?random=${index}`}
                      alt="Related Article"
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2 group-hover:text-red-600 transition-colors">
                    Business Strategy for 2024
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Latest trends and insights in business strategy...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar ad */}
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <Advertisement type="sidebar" />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: generateSlug(article.data.title),
  }));
}

