"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Article {
  title: string;
  description: string;
  url: string;
  image: string | null;
}

export default function FinancialLiteracy() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        if (data.articles) {
          setArticles(data.articles);
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="w-full px-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            Literasi Finansial
          </h2>
          <span className="text-sm font-semibold text-blue-500">
            Lihat Semua
          </span>
        </div>
        {/* Skeleton loader */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.07)] overflow-hidden animate-pulse"
            >
              <div className="w-full h-[160px] bg-gray-200" />
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-full mb-1" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-5 mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Literasi Finansial</h2>
        <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors">
          Lihat Semua
        </button>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[260px] bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.07)] overflow-hidden snap-start hover:shadow-md transition-shadow"
          >
            {/* Card Image */}
            <div className="relative w-full h-[160px] bg-gray-100">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gray-400"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                {article.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
