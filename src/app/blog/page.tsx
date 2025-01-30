"use client";
import Link from "next/link";
import { getAllArticles } from "@/utils/BlogData";
import Navbar from "@/components/Navbar";
import { ArticleData, generateSlug } from "@/types/index";
import { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "@/components/Banner";
import StockTicker from "@/components/StockTicker";
import Advertisement from "@/components/Advertisement";

function getInitials(name: string) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength).trim() + '...';
}

export default function BlogPage() {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getAllArticles();
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  const latestStories = [
    {
      time: '2 hours ago',
      category: 'TECHNOLOGY',
      title: 'Global Tech Giants Announce Collaborative AI Ethics Framework',
      link: '#'
    },
    {
      time: '4 hours ago',
      category: 'MARKETS',
      title: 'European Markets Show Strong Recovery Signs After Recent Downturn',
      link: '#'
    },
    {
      time: '6 hours ago',
      category: 'POLICY',
      title: 'New Climate Policy Impact on Business Sectors: What You Need to Know',
      link: '#'
    },
    {
      time: '8 hours ago',
      category: 'STARTUPS',
      title: 'Startup Funding Reaches Q1 Peak: Record Investment in AI Companies',
      link: '#'
    },
    {
      time: '12 hours ago',
      category: 'CLIMATE',
      title: 'Renewable Energy Investment Trends: Solar Takes the Lead',
      link: '#'
    },
    {
      time: '1 day ago',
      category: 'TECHNOLOGY',
      title: 'The Rise of Quantum Computing in Financial Markets',
      link: '#'
    },
    {
      time: '1 day ago',
      category: 'BUSINESS',
      title: 'Global Supply Chain Innovations: AI-Driven Solutions',
      link: '#'
    }
  ];

  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <Banner />
        
        {/* Featured Article Section */}
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
                        An in-depth look at how artificial intelligence is revolutionizing business operations and decision-making across sectors.
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
                                {(article.data.author)}

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

        <Advertisement type="leaderboard" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" />

        {/* Existing Articles Grid Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">More Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const imageUrl = `https://picsum.photos/800/400?random=${index}`;

              console.log(article);
              
              return (
                <Link
                  key={index}
                  href={`/blog/${generateSlug(article.data.title)}`}
                  className="group bg-white hover:bg-red-50/50 hover:shadow-xl transition-all duration-300 relative after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-transparent after:to-red-50/20 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
                >
                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-red-600/85 backdrop-blur-sm text-white px-3 py-1 text-sm font-medium transition-colors group-hover:bg-red-600">
                        Business
                      </span>
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={article.data.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 relative z-10">
                    <h2 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {article.data.title}
                    </h2>
                    {/* Article Preview */}
                    <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors ">
                      {(article.data.paragraphs[0]?.text || 'No content available')}
                    </p>
                    
                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-medium group-hover:bg-red-700 transition-colors">
                          {getInitials(article.data.author)}
                        </div>
                        <span className="group-hover:text-gray-700 transition-colors">{article.data.author}</span>
                      </div>
                      <time className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                        {article.data.publicationDate}
                      </time>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <Advertisement type="banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" />
      </div>
    </main>
  );
}
