import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getAllArticles, getArticleBySlug } from "@/utils/BlogData";
import { generateSlug } from "@/types";
import React from "react";
import Image from "next/image";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-4">{article.data.title}</h1>
          <div className="text-gray-600 mb-8">
            <p>By {article.data.author}</p>
            <p>{article.data.publicationDate}</p>
          </div>

          <div className="prose max-w-none">
            {article.data.paragraphs.map((paragraph, index) => (
              <div key={index}>
                {paragraph.heading && (
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.heading.text}
                  </h2>
                )}
                {paragraph.image && (
                  <Image
                    src={paragraph.image.src}
                    alt={paragraph.image.alt}
                    className="my-4 rounded-lg shadow-md w-full"
                    width={800}
                    height={400}
                  />
                )}
                <p
                  className={
                    paragraph.isBlockquote
                      ? "italic border-l-4 pl-4 border-gray-300 my-4"
                      : "my-4"
                  }
                >
                  {paragraph.text}
                </p>
              </div>
            ))}
          </div>
        </article>
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
