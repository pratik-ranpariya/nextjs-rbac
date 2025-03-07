"use client";
import Article from "@/components/Article/Article";
import { STRAPI_URL } from "@/lib/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await axios.get(`${STRAPI_URL}/api/articles`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!data) {
          throw new Error("Failed to fetch articles");
        }

        // console.log("data", data?.data?.data);

        const articles = data?.data?.data?.map((item: ArticleData) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          slug: item.slug,
          status: item.status,
        }));

        setArticles(articles);
      } catch (error) {
        console.log(error);
        setError(error as string);
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
  );
};

export default ArticlePage;
