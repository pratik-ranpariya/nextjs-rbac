"use client";
import Link from "next/link";
import { getAllArticles } from "@/utils/BlogData";
import { ArticleData, generateSlug } from "@/types/index";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Banner from "@/components/Banner";
import Advertisement from "@/components/Advertisement";
import { useSearchParams } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import { ApiResponse, GetWithToken } from "@/common/axios/api";
import { API_GET } from "@/common/constant/api";
import { AllArticlesType } from "@/common/types";

// Separate the content that uses useSearchParams
function BlogContent() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<ArticleData[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [allArticles, setAllArticles] = useState<AllArticlesType[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);

        if (category) {
          const filtered = fetchedArticles.filter((article) => {
            const searchTerm = category.toLowerCase();
            const title = String(article.data.title).toLowerCase();
            const content = article.data.content
              ? String(article.data.content).toLowerCase()
              : "";
            return title.includes(searchTerm) || content.includes(searchTerm);
          });
          setFilteredArticles(filtered);
        } else {
          setFilteredArticles(fetchedArticles);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
        setFilteredArticles([]);
      }
    };

    fetchArticles();
    Topholderlist();
  }, [category]);

  const Topholderlist = async () => {
    try {
      const response = (await GetWithToken(API_GET.ALL_ARTICLES)) as ApiResponse<any>;
      if(response?.status == 200){
        setAllArticles(response.data)
      }
    } catch (error) {
    } finally {
      // setTopHolderLoading(false);
    }
  };

  const featuredArticles = filteredArticles.slice(0, 5);

  // If no articles are found for the category
  if (category && filteredArticles.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 capitalize">
              No articles found in {category}
            </h1>
            <p className="text-gray-600 mb-8">
              Try exploring other categories or check back later for new
              content.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ProgressBar value={0} />
      <div className="min-h-screen bg-gray-50">
        {/* Only show Banner when not viewing a category */}
        {!category && <Banner />}
        <section className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Featured Article */}
              <div className="lg:w-2/3">
                <div className="relative h-[600px] group">
                  <Image
                    src="https://picsum.photos/1200/800"
                    alt="Featured Article"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="absolute bottom-0 p-8 text-white">
                      <div className="mb-4">
                        <span className="bg-red-600/85 backdrop-blur-sm px-3 py-1 text-sm font-medium">
                          TECHNOLOGY
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                        The Future of AI in Business: Transforming Industries
                      </h2>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        An in-depth look at how artificial intelligence is
                        revolutionizing business operations and decision-making
                        across sectors.
                      </p>
                      <div className="flex items-center text-sm">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-medium mr-2">
                          AI
                        </div>
                        <span>By John Smith</span>
                        <span className="mx-2">•</span>
                        <time>Mar 16, 2024</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest Stories Sidebar */}
              <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-4 h-[600px] flex flex-col">
                  <h2 className="text-2xl font-bold mb-4">Latest Stories</h2>
                  <div className="flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-100">
                    <div className="space-y-4">
                      {articles.map((article, index) => (
                        <Link
                          key={index}
                          href={`/blog/${generateSlug(article.data.title)}`}
                          className="flex items-start group pb-4 border-b border-gray-100 last:border-0"
                        >
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium text-red-600">
                                {/* {story.category} */}
                                {article.data.author}
                              </span>
                              <span className="text-xs text-gray-500">
                                {article.data.publicationDate}
                              </span>
                            </div>
                            <h3 className="font-semibold group-hover:text-red-600 transition-colors line-clamp-2">
                              {article.data.title}
                            </h3>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Category Header */}
        {category && (
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
                {category} News
              </h1>
              <p className="text-xl text-gray-600">
                Latest updates and insights from the {category} world
              </p>
            </div>
          </div>
        )}

        {/* Featured Articles Slider */}
        {featuredArticles.length > 0 && (
          <div className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-2xl font-bold mb-8">
                {category ? `Featured in ${category}` : "Featured Articles"}
              </h2>
              <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                {featuredArticles.map((article, index) => (
                  <div key={index} className="flex-none w-96">
                    <Link href={`/blog/${generateSlug(article.data.title)}`}>
                      <div className="group relative h-64 mb-4">
                        <Image
                          src={`https://picsum.photos/800/400?random=${index}`}
                          alt={article.data.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <div className="mb-2">
                              <span className="bg-red-600/85 px-2 py-1 text-xs font-medium">
                                {category || "FEATURED"}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold group-hover:text-red-400 transition-colors">
                              {article.data.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <Advertisement
          type="leaderboard"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        />

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">
            {category ? `More ${category} Articles` : "Latest Articles"}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allArticles.filter((_i) => _i?.submissionStatus === "approved").map((article, index) => (
              <Link
                key={index}
                href={`/blog/${generateSlug(article?.title)}?id=${article?.id}`}
                className="group bg-white hover:bg-red-50/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-600/85 text-white px-3 py-1 text-sm font-medium">
                      {article?.category?.name || "Latest"}
                    </span>
                  </div>

                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`https://picsum.photos/800/400?random=${index}`}
                      alt={article?.slug}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: article?.description }} />

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-medium">
                        {article?.author?.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("") || "DB"}
                      </div>
                      <span>{article?.author?.name}</span>
                    </div>
                    <time className="text-gray-500">
                        {new Date(article?.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Advertisement
          type="banner"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        />
      </div>
    </main>
  );
}

// Main component with Suspense
export default function BlogPage() {
  return (
    <main>
      <ProgressBar value={0} />
      <div className="min-h-screen bg-gray-50">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent />
        </Suspense>
      </div>
    </main>
  );
}
