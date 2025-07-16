import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useData } from '../context/DataContext';
import { format } from 'date-fns';

const { FiCalendar, FiTag, FiSearch, FiFilter } = FiIcons;

const News = () => {
  const { news } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = ['all', 'tariffs', 'infrastructure', 'renewable', 'maintenance', 'corporate'];

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'tariffs': return 'bg-blue-100 text-blue-800';
      case 'infrastructure': return 'bg-green-100 text-green-800';
      case 'renewable': return 'bg-yellow-100 text-yellow-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      case 'corporate': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600">Latest news and announcements from ZESCO</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg card-shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
              />
            </div>
            <div className="relative">
              <SafeIcon icon={FiFilter} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="tariffs">Tariffs</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="renewable">Renewable Energy</option>
                <option value="maintenance">Maintenance</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg card-shadow hover-lift overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                    {format(article.date, 'MMM dd, yyyy')}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <button className="text-zesco-primary hover:text-zesco-secondary font-medium transition-colors">
                  Read Full Article
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <SafeIcon icon={FiTag} className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No news found</h3>
            <p className="text-gray-600">No news articles match your search criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-zesco-primary to-zesco-secondary rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter for the latest news and updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-zesco-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;