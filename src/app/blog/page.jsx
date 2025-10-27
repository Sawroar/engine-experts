'use client'
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Filter, ChevronRight, BookOpen, MessageCircle } from 'lucide-react';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: "Common Engine Problems and How to Identify Them Early",
      excerpt: "Learn to recognize the warning signs of major engine issues before they become costly repairs.",
      category: "maintenance",
      readTime: "8 min read",
      date: "2024-01-15",
      author: "Mike Johnson",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to Engine Oil Changes: Frequency and Best Practices",
      excerpt: "Everything you need to know about engine oil changes, from frequency to choosing the right oil for your vehicle.",
      category: "maintenance",
      readTime: "6 min read",
      date: "2024-01-10",
      author: "Sarah Chen",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Turbocharger vs Supercharger: Which is Right for Your Engine?",
      excerpt: "A comprehensive comparison of forced induction systems and their impact on engine performance.",
      category: "performance",
      readTime: "10 min read",
      date: "2024-01-08",
      author: "David Rodriguez",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 4,
      title: "Winter Engine Care: Protecting Your Vehicle in Cold Weather",
      excerpt: "Essential tips to keep your engine running smoothly during the winter months.",
      category: "seasonal",
      readTime: "5 min read",
      date: "2024-01-05",
      author: "Emily Watson",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Understanding Engine Diagnostics: What Those Check Engine Lights Really Mean",
      excerpt: "Decode common diagnostic trouble codes and understand when to seek professional help.",
      category: "diagnostics",
      readTime: "7 min read",
      date: "2024-01-03",
      author: "Mike Johnson",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Electric Vehicle Maintenance: What's Different About EV Engines?",
      excerpt: "Exploring the maintenance requirements for electric vehicle powertrains versus traditional combustion engines.",
      category: "innovation",
      readTime: "9 min read",
      date: "2023-12-28",
      author: "Sarah Chen",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: blogPosts.length },
    { id: 'maintenance', name: 'Maintenance', count: blogPosts.filter(post => post.category === 'maintenance').length },
    { id: 'performance', name: 'Performance', count: blogPosts.filter(post => post.category === 'performance').length },
    { id: 'diagnostics', name: 'Diagnostics', count: blogPosts.filter(post => post.category === 'diagnostics').length },
    { id: 'seasonal', name: 'Seasonal Care', count: blogPosts.filter(post => post.category === 'seasonal').length },
    { id: 'innovation', name: 'Innovation', count: blogPosts.filter(post => post.category === 'innovation').length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Engine Experts Blog</h1>
            <p className="text-xl opacity-90 mb-8">
              Expert insights, maintenance tips, and the latest in engine technology from our certified technicians.
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search blog articles..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl justify-center font-bold text-gray-900 mb-8 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-red-600 " />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                  <div className="h-48 bg-gradient-to-br from-red-600 to-gray-900 relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition duration-300">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-red-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition duration-300 ${
                        activeCategory === category.id
                          ? 'bg-red-100 text-red-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Popular Tags */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Engine Oil', 'Turbo', 'Diagnostics', 'Winter Care', 'Performance', 'Maintenance', 'EV', 'Hybrid'].map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-red-100 hover:text-red-700 cursor-pointer transition duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-gray-100 rounded-lg border border-red-100">
                  <h3 className="font-bold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-600 mb-3">Get the latest engine tips and news</p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold transition duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeCategory === 'all' ? 'All Articles' : categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <div className="text-sm text-gray-600">
                  Showing {filteredPosts.length} articles
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-red-600 to-gray-900 relative">
                      <div className="absolute top-3 left-3">
                        <span className="bg-white text-red-600 px-2 py-1 rounded-full text-xs font-semibold capitalize">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{post.author}</span>
                        </div>
                        <button className="flex items-center gap-1 text-red-600 font-semibold text-sm hover:text-red-700 transition duration-300">
                          Read More <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-white border border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center gap-2 mx-auto">
                  Load More Articles
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Have Engine Questions?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our certified technicians are here to help with any engine-related questions or concerns you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
              Ask Our Experts
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;