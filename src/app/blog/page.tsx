"use client";
import Link from "next/link";
import { getAllArticles } from "@/utils/BlogData";
import Navbar from "@/components/Navbar";
import { ArticleData, generateSlug } from "@/types/index"; // Fixed import path
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BlogPage() {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getAllArticles();
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              // Extract slug from URL

              // Create a random image URL using the index
              const imageUrl = `https://picsum.photos/800/400?random=${index}`;

              return (
                <Link
                  key={index}
                  href={`/blog/${generateSlug(article.data.title)}`}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={imageUrl}
                      alt={article.data.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {article.data.title}
                    </h2>
                    <p className="text-gray-600 mb-2">{article.data.author}</p>
                    <p className="text-gray-500">
                      {article.data.publicationDate}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
