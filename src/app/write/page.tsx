'use client';
import { useState } from "react";
import Image from "next/image";
import { FaImage, FaVideo, FaLink, FaTimes, FaBold, FaItalic, FaListUl, FaQuoteRight, FaHeading } from "react-icons/fa";

export default function WritePage() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
    category: 'business',
    coverImage: null as string | null,
    tags: [] as string[]
  });

  const [currentTag, setCurrentTag] = useState('');

  const handleAddTag = () => {
    if (currentTag && !formData.tags.includes(currentTag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag]
      }));
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Writing Tips Section */}
        <div className="mb-8 bg-white p-6 shadow-sm border-l-4 border-red-600">
          <h2 className="text-lg font-semibold mb-3">Writing Tips</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Start with a compelling headline that grabs attention</li>
            <li>• Include relevant images to break up text and engage readers</li>
            <li>• Keep paragraphs short and focused</li>
            <li>• Use subheadings to organize your content</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg">
          {/* Cover Image Section */}
          <div className="relative h-[300px] bg-gray-100 group">
            {formData.coverImage ? (
              <>
                <Image
                  src={formData.coverImage}
                  alt="Cover"
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setFormData(prev => ({ ...prev, coverImage: null }))}
                  className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTimes />
                </button>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <label className="cursor-pointer flex flex-col items-center">
                  <FaImage className="w-12 h-12 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">Add Cover Image</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setFormData(prev => ({ ...prev, coverImage: url }));
                      }
                    }}
                  />
                </label>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Category Selection */}
              <div className="flex gap-4">
                {['business', 'technology', 'finance', 'marketing', 'startups'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFormData(prev => ({ ...prev, category: cat }))}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      formData.category === cat
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              {/* Title Input */}
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full text-4xl font-bold focus:outline-none placeholder-gray-300"
              />

              {/* Subtitle Input */}
              <input
                type="text"
                placeholder="Subtitle (optional)"
                value={formData.subtitle}
                onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                className="w-full text-xl text-gray-600 focus:outline-none placeholder-gray-300"
              />

              {/* Writing Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>Words: {formData.content.split(/\s+/).filter(Boolean).length}</span>
                <span>•</span>
                <span>Characters: {formData.content.length}</span>
                <span>•</span>
                <span>Reading time: {Math.ceil(formData.content.split(/\s+/).filter(Boolean).length / 200)} min</span>
              </div>

              {/* Tags Input */}
              <div className="flex flex-wrap gap-2 items-center">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="text-gray-500 hover:text-red-600"
                    >
                      <FaTimes className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  placeholder="Add a tag"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                  className="text-sm focus:outline-none placeholder-gray-400"
                />
              </div>

              {/* Enhanced Content Tools */}
              <div className="border rounded-lg p-2">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Bold">
                      <FaBold className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Italic">
                      <FaItalic className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Heading">
                      <FaHeading className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="w-px h-6 bg-gray-200" />
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Bullet List">
                      <FaListUl className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Quote">
                      <FaQuoteRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="w-px h-6 bg-gray-200" />
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Add Image">
                      <FaImage className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Add Video">
                      <FaVideo className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Add Link">
                      <FaLink className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Input with Placeholder */}
              <textarea
                placeholder="Start your story with an engaging introduction..."
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                className="w-full min-h-[400px] focus:outline-none placeholder-gray-300 resize-none text-gray-700 leading-relaxed"
              />

              {/* Publishing Options */}
              <div className="flex items-center justify-between border-t pt-6">
                <div className="flex items-center gap-4">
                  <button className="text-gray-600 hover:text-gray-900 text-sm">
                    Save as Draft
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 text-sm">
                    Preview
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                  >
                    Schedule
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-2 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors text-sm"
                  >
                    Publish Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Preview */}
          <div className="border-t bg-gray-50 p-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">SEO Preview</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-blue-600 hover:underline cursor-pointer line-clamp-1">
                  {formData.title || 'Your Article Title Will Appear Here'}
                </h4>
                <div className="text-sm text-green-700">
                  yourdomain.com/blog/{formData.title ? formData.title.toLowerCase().replace(/\s+/g, '-') : 'article-url'}
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {formData.content || 'Your article preview will appear here. Make sure to write a compelling introduction to attract readers.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 