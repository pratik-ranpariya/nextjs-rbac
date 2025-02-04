"use server";

import { ArticleData, generateSlug } from "@/types";
import path from "path";
import fs from "fs";

export async function getAllArticles(): Promise<ArticleData[]> {
  const dataDirectory = path.join(process.cwd(), "src/data");
  const fileNames = fs.readdirSync(dataDirectory);

  const articles = fileNames
    .filter((fileName) => fileName.startsWith("article_data_"))
    .map((fileName) => {
      const filePath = path.join(dataDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContent) as ArticleData;
    });

  return articles;
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticleData | null> {
  "use server";
  const articles = await getAllArticles();

  const article = articles.find(
    (article) => generateSlug(article.data.title) === slug
  );

  if (!article) {
    console.log("Article not found");
    return null;
  }

  return article;
}
