"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaClock, FaUser, FaCalendar, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaReddit, FaEnvelope } from "react-icons/fa";
import Advertisement from "@/components/Advertisement";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GetWithToken } from "@/common/axios/api";
import { API_GET } from "@/common/constant/api";
import Link from "next/link";

interface ArticleData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string | null;
  submissionStatus: string;
  approvalComments: string;
  approvalDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  author: {
    id: number;
    documentId: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    avatar?: string;
  };
  category: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
  };
  cover: string | null;
}

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  avatar?: string;
}

export default function BlogPostPage() {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const articleId = searchParams.get('id');
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (articleId) {
          const response = await GetWithToken(`${API_GET.ARTICLES}/${articleId}`);
          if (response?.status === 200) {
            setArticle(response.data as ArticleData);
          }
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!article) {
    notFound();
  }

  const getReadingTime = () => {
    const words = article?.description?.split(/\s+/).length || 0;
    return Math.ceil(words / 200).toString();
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = article?.title || '';

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: 'bg-[#3b5998]'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      color: 'bg-[#1DA1F2]'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${shareTitle} ${shareUrl}`,
      color: 'bg-[#25D366]'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
      color: 'bg-[#0077b5]'
    },
    {
      name: 'Reddit',
      icon: FaReddit,
      url: `https://reddit.com/submit?url=${shareUrl}&title=${shareTitle}`,
      color: 'bg-[#FF4500]'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: `mailto:?subject=${shareTitle}&body=Check out this article: ${shareUrl}`,
      color: 'bg-gray-600'
    }
  ];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: "Guest User",
      content: newComment,
      createdAt: new Date().toISOString(),
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  const articles = [
    {
    title: "Your next big idea starts at SmallBiz Week 2025",
    description:
      "Running a small business isn’t easy. Rising costs, staffing shortages, and unpredictable markets can ...",
    imageUrl:
      "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F02%2FSmallBiz-Week-2025-300x169.jpg&w=640&q=75",
    link: "/brand-account/why-insurers-should-be-all-about-the-data.html",
    },
    {
    title: "Auto insurance has evolved dramatically",
    description:
      "Auto insurance has evolved dramatically over the years. The days of endless paperwork, long ...",
    imageUrl:
      "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2024%2F12%2Fdb-2-4-300x169.jpg&w=640&q=75",
    link: "/brand-account/why-insurers-should-be-all-about-the-data.html",
    },
    {
    title: "Hiring overseas? Here’s how to keep your business covered",
    description:
      "Companies are now able to tap into talent from all over the world, thanks ...",
    imageUrl:
      "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2024%2F12%2FEOR-300x169.jpg&w=640&q=75",
    link: "/brand-account/why-insurers-should-be-all-about-the-data.html",
  },
  {
    title: "Seven loyalty program types: Pick the perfect fit",
    description:
      "Did you know that companies that invest in loyalty programs report up to a 40% increase ...",
    imageUrl:
      "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2024%2F12%2Fhttpsimg.freepik.comfree-vectorcar-insurance-concept-illustration_114360-22795.jpg-300x169.jpg&w=640&q=75",
    link: "/brand-account/why-insurers-should-be-all-about-the-data.html",
    },
    {
    title: "How to make your business more attractive to overseas workers",
    description:
      "Companies are now able to tap into talent from all over the world, thanks ...",
    imageUrl:
      "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2024%2F10%2Floyalty-programs-300x169.jpg&w=640&q=75",
    link: "/brand-account/why-insurers-should-be-all-about-the-data.html",
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src={`https://picsum.photos/800/400?random=${article?.id}`}
          alt={article?.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="absolute bottom-0 w-full p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-3 md:mb-4">
                <span className="bg-red-600 px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-medium text-white">
                  {article?.category?.name}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 md:gap-6 text-white/90 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="bg-red-600/20 p-1.5 rounded">
                    <FaUser className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span>{article?.author?.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-red-600/20 p-1.5 rounded">
                    <FaCalendar className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span>
                    {new Date(article?.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-red-600/20 p-1.5 rounded">
                    <FaClock className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span>{getReadingTime()} min read</span>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="mt-4 flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-full text-white
                      transition-all duration-300 ease-in-out
                      transform hover:scale-110 hover:opacity-90
                      group relative ${social?.color}
                    `}
                    aria-label={`Share on ${social?.name}`}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="
                      absolute -top-8 left-1/2 -translate-x-1/2
                      bg-gray-800 text-white text-xs py-1 px-2 rounded
                      opacity-0 group-hover:opacity-100 transition-opacity
                      whitespace-nowrap
                    ">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8 !ps-0 !pe-0">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-2/3">
            <div className="overflow-hidden">
              <div className="p-4 md:p-8">
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: article.description }} />
                </div>
                {/* Author Profile Card */}
                <div className="mt-12 border rounded-lg p-6 bg-white">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden">
                        {article?.author?.avatar ? (
                          <Image
                            src={article?.author?.avatar}
                            alt={article?.author?.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold">
                            {article?.author?.name
                              ?.split(" ")
                              .map((n: string) => n[0])
                              .join("") || "DB"}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold mb-2">{article?.author?.name}</h2>
                      <p className="text-gray-600 mb-4">
                        Contributing writer at Dynamic Business. Expertise in business strategy and digital transformation.
                      </p>
                      <Link 
                        href={`/author/${article?.author?.id}`}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                      >
                        View all posts
                        <svg 
                          className="ml-2 w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Comments Section */}
                <div className="mt-12">
                  <div className="pt-8">
                    <h2 className="text-2xl font-bold mb-8">What do you think?</h2>
                    
                    {/* Comment Form */}
                    <div className="bg-blue-50 rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-semibold mb-4">Add a new comment</h3>
                      <form onSubmit={handleCommentSubmit}>
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[120px]"
                          placeholder="Type your comment..."
                        />
                        <div className="flex justify-end mt-4">
                          <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Post Comment
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-6">
                      {comments.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">
                          Be the first to comment
                        </p>
                      ) : (
                        comments.map((comment) => (
                          <div key={comment.id} className="flex gap-4">
                            <div className="flex-shrink-0">
                              {comment.avatar ? (
                                <Image
                                  src={comment?.avatar}
                                  alt={comment?.author}
                                  width={48}
                                  height={48}
                                  className="rounded-full"
                                />
                              ) : (
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                  <FaUser className="w-6 h-6 text-gray-500" />
                                </div>
                              )}
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold">{comment?.author}</h4>
                                <span className="text-sm text-gray-500">
                                  {new Date(comment?.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </span>
                              </div>
                              <p className="text-gray-700">{comment?.content}</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">DB Brand Accounts</h2>
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <article key={index} className="group">
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <Image
                        alt={article.title}
                        src={article.imageUrl}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <Link
                      href="/category/brand-account"
                      className="text-sm text-red-600 font-medium hover:underline"
                    >
                      DB Brand Account
                    </Link>
                    <Link href={article.link}>
                      <h3 className="text-xl font-bold mt-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {article?.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mt-2 line-clamp-2">
                      {article?.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
