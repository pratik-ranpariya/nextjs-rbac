'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { ApiResponse, GetWithToken } from '@/common/axios/api';
import { API_GET } from '@/common/constant/api';

const categories = [
  {
    name: 'Business',
    slug: 'business',
    description: 'Latest business news and insights'
  },
  {
    name: 'Technology',
    slug: 'technology',
    description: 'Tech trends and innovations'
  },
  {
    name: 'Finance',
    slug: 'finance',
    description: 'Financial news and analysis'
  },
  {
    name: 'Marketing',
    slug: 'marketing',
    description: 'Marketing strategies and trends'
  },
  {
    name: 'Leadership',
    slug: 'leadership',
    description: 'Leadership and management insights'
  },
  {
    name: 'Startups',
    slug: 'startups',
    description: 'Startup news and resources'
  }
];
interface CategoryType {
    id: number,
    documentId: string,
    name: string,
    slug: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
    locale: string | null
}

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const CategoryList = async () => {
    try {
      const response = (await GetWithToken(API_GET.CATEGORIES)) as ApiResponse<any>;
      if(response?.status == 200){
        setCategories(response.data)
      }
    } catch (error) {
    } finally { }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    CategoryList();
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm transition-colors duration-200 text-gray-700 hover:text-red-600 font-semibold"
      >
        <span>READ</span>
        <FaChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-64 mt-2 bg-white shadow-lg z-50">
          <div className="py-2">
            <Link
              href="/blog"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              All Articles
            </Link>
            <div className="border-t my-1"></div>
            {categories.map((category) => (
              <Link
              onClick={() => setIsOpen(false)}
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className="block px-4 py-2 hover:bg-red-50"
              >
                <div className="text-sm font-medium text-gray-900 hover:text-red-600">
                  {category.name}
                </div>
                <div className="text-xs text-gray-500">
                  {category.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 