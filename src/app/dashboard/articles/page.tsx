"use client"
import Article from '@/components/Article/Article';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface ArticleData {
    id: number;
    title: string;
    description: string;
    slug: string;
    status: "Submitted" | "Approved" | "Rejected";
  }

const ArticlePage = () => {
    const [articles, setArticles] = useState<ArticleData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await axios.get("http://localhost:1337/api/articles", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Auth token
          },
        });

        if (!data) {
          throw new Error("Failed to fetch articles");
        }

        
        const articles = data.data.data.map((item:ArticleData ) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          slug: item.slug,
          status: item.status, // Assuming status exists in the Strapi schema
        }));
      

        setArticles(articles);
      } catch (error) {
        // Handle AxiosError or generic Error
        console.log(error)
        setError(error as string)
        
      }
    };

    fetchArticles();
  }, []);
  return (
    <main className="flex-1 bg-gray-100 p-6">
          {error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <Article articles={articles} />
          )}
    </main>
  )
}

export default ArticlePage