import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export async function generateStaticParams() {
  return [0, 2, 1].map((article) => ({
    slug: "article.slug",
  }));
}

const articles = Array(5).fill({
  title: "Why insurers should be all about the data",
  description:
    "Auto insurance is evolving with digital tools like mobile apps, AI, an...",
  imageUrl:
    "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2024%2F12%2Fhttpsimg.freepik.comfree-vectorcar-insurance-concept-illustration_114360-22795.jpg-300x169.jpg&w=640&q=75",
  link: "/brand-account/why-insurers-should-be-all-about-the-data.html",
});

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = {
    slug: "first-article",
    title: "SMEs push for tax and red tape reform in federal budget 2025",
    featuredImage:
      "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2025%2F01%2Fdb-2-9.jpg&w=3840&q=75",
    author: "John Doe",
    authorImage:
      "https://dynamicbusiness.com/_next/image?url=https%3A%2F%2Fbackend.dynamicbusiness.com%2Fwp-content%2Fuploads%2F2021%2F06%2FYajush_HS-96x96.jpg&w=96&q=75",
    date: "2023-10-01",
    content: "This is the content of the first article.",
    readTime: "5 min read",
    category: "Business",
  };

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          {/* Hero Image */}
          <div className="relative w-full h-[500px] mb-8 overflow-hidden">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

            {/* Author and Article Info Section */}
            <div className="border-y border-gray-200 py-4 mb-8">
              <div className="flex items-between justify-between gap-4">
                {/* Author Image and Details */}
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <Image
                      src={article.authorImage}
                      alt={article.author}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>

                  {/* Author and Article Details */}
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">
                      {article.author}
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <time>{article.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        <span>{article.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-5">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <section className="mx-auto">
            <div className=" flex flex-wrap lg:flex-nowrap lg:space-x-6 pt-3 sm:pt-4 md:pt-6 lg:pt-7">
              <main className="w-full lg:w-3/5 pb-8 md:pb-16">
                <div className="main-post-content prose sm:prose-lg prose-red blog-content max-w-none">
                  <p className="text-[25px] leading-[30px] font-bold">
                    <strong>
                      The Council of Small Business Organisations Australia
                      (COSBOA) is calling on the Federal Government to take bold
                      action in the upcoming 2025-2026 Federal Budget, with a
                      focus on tax reform and reducing red tape.
                    </strong>
                  </p>
                  <p className="mt-4 text-[20px] leading-[30px]">
                    COSBOA warns that without significant reforms, Australian
                    small businesses—many of which are family-owned and built on
                    hard work—could face even greater challenges, including
                    inflation, fewer entrepreneurs, and weakened competition.
                  </p>
                  <p className="mt-4 text-[20px] leading-[30px]">
                    COSBOA CEO Luke Achterstraat highlighted the pressure small
                    businesses are under, with rising costs, slowing demand, and
                    mounting regulatory pressures. “Small businesses are facing
                    a perfect storm. If we don’t act now, we risk record
                    insolvencies and fewer entrepreneurs, which will ultimately
                    lead to higher prices and lower living standards for
                    everyone,” Achterstraat said.
                  </p>

                  <h2 className="text-[25px] leading-[30px] font-bold mt-8">
                    The Call for ‘Twin Engines’ of Reform
                  </h2>
                  <p className="mt-2 text-[20px] leading-[30px]">
                    To help stabilize the economy and safeguard the future of
                    small businesses, COSBOA’s pre-budget submission focuses on
                    two key areas for reform:
                  </p>
                  <ol className="mt-8">
                    <li>
                      <strong className=" text-[25px] leading-[30px] font-bold mt-8 ">
                        1. Tax Reform
                      </strong>
                      :
                      <ul className="list-disc ml-5 text-[20px] leading-[30px] mt-3">
                        <li>
                          Update the tax system to reward entrepreneurs and help
                          them retain more of their income.
                        </li>
                        <li>
                          Reinstate the Technology Investment Boost to support
                          cyber resilience and innovation.
                        </li>
                        <li>
                          Push for national leadership on payroll tax, including
                          harmonizing rates and raising thresholds to support
                          small business employment.
                        </li>
                        <li className="mb-8">
                          Make the Instant Asset Write-Off permanent and
                          increase the threshold to $150,000 to encourage
                          investment.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <strong className="text-[25px] leading-[30px] font-bold mt-8">
                        2. Red Tape Reduction
                      </strong>
                      :
                      <ul className="list-disc ml-5 text-[20px] leading-[30px] mt-3">
                        <li>
                          Introduce mandatory small business impact statements
                          for new policies before they are brought to cabinet.
                        </li>
                        <li>
                          Set up a “small business flying squad” to streamline
                          outdated or unnecessary regulations.
                        </li>
                        <li>
                          Simplify government processes, including those with
                          the ATO and Fair Work Commission, to make them more
                          user-friendly for small business owners.
                        </li>
                        <li>
                          Ensure that the industrial relations framework doesn’t
                          penalize casuals, contractors, or the self-employed.
                        </li>
                      </ul>
                    </li>
                  </ol>
                  <h2 className="text-[25px] leading-[30px] font-bold mt-8">
                    Why Action is Critical
                  </h2>
                  <p className="mt-2 text-[20px] leading-[30px]">
                    COSBOA stresses that inaction will have dire consequences.
                    “Without urgent reforms, we risk ‘baked-in’ inflation and
                    declining productivity,” Achterstraat warned.
                  </p>
                  <h2 className="text-[25px] leading-[30px] font-bold mt-8">
                    Supporting Small Business
                  </h2>
                  <p className="mt-2 text-[20px] leading-[30px]">
                    In addition to the reforms, COSBOA calls for greater
                    recognition of the critical role small businesses play in
                    Australia’s economy. The submission recommends:
                  </p>
                  <ul className="list-disc ml-5 text-[20px] leading-[30px] mt-3">
                    <li>
                      Restoring funding to the Australian Small Business and
                      Family Enterprise Ombudsman (ASBFEO) to ensure vital
                      support and mediation services.
                    </li>
                    <li>
                      Introducing Prime Minister’s Small Business Champion
                      Awards to celebrate entrepreneurs.
                    </li>
                    <li>
                      Delivering a quarterly Small Business Statement in
                      Parliament to track the sector’s progress and outline
                      government support.
                    </li>
                  </ul>
                  <p className="mt-4 text-[20px] leading-[30px]">
                    Achterstraat challenged political leaders to take bold,
                    visionary steps in supporting small businesses. “Small
                    businesses are the engine room of the economy. We need
                    reforms to ensure their survival and the prosperity of all
                    Australians,” he concluded.
                  </p>
                  <p className="mt-4 text-[20px] leading-[30px]">
                    Without these necessary changes, the future of small
                    businesses and the broader economy could be at risk, costing
                    Australians in the form of higher prices and fewer
                    opportunities for entrepreneurs.
                  </p>
                  <p className="mt-4 text-[20px] leading-[30px]">
                    <span className="text-[#dc2626] cursor-pointer">
                      The full COSBOA pre-budget submission can be accessed
                      here.
                    </span>
                    Keep up to date with our stories on{" "}
                    <span className="text-[#dc2626] cursor-pointer">
                      LinkedIn
                    </span>
                    ,{" "}
                    <span className="text-[#dc2626] cursor-pointer">
                      Twitter
                    </span>
                    ,{" "}
                    <span className="text-[#dc2626] cursor-pointer">
                      Facebook
                    </span>{" "}
                    and{" "}
                    <span className="text-[#dc2626] cursor-pointer">
                      Instagram
                    </span>
                    .
                  </p>
                </div>
              </main>
              <aside className="w-full  lg:w-2/5 mt-7 lg:mt-0 pb-8 ">
                <div className="flex  flex-col space-y-5 lg:ml-4">
                  <h2 className="text-3xl font-bold ">DB Brand Accounts</h2>
                  {articles.map((article, index) => (
                    <article
                      key={index}
                      className="flex items-stretch space-x-3 flex-wrap lg:flex-nowrap"
                    >
                      {/* Image Section */}
                      <div className="feature-image bg-gray-200 w-3/6 flex-shrink-0 rounded-md lg:rounded-none overflow-hidden">
                        <div className="relative w-full h-24 sm:h-32 md:h-40 bg-gray-500">
                          <Image
                            alt="Auto Insurance"
                            src={article.imageUrl}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="content flex flex-col justify-center py-2 w-full lg:w-4/6">
                        <Link
                          href="/category/brand-account"
                          className="text-sm text-[#dc2626] md:text-base font-medium text-dynamic-red hover:underline"
                        >
                          DB Brand Account
                        </Link>
                        <Link href={article.link}>
                          <h3 className="font-bold text-lg sm:text-xl md:text-2xl my-1 line-clamp-2 hover:underline">
                            {article.title}
                          </h3>
                        </Link>
                        <p className="hidden sm:block sm:line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          {/* Article Content */}
          {/* <div 
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        /> */}
        </article>
      </main>
    </>
  );
}
