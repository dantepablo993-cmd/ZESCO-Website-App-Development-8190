import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useData } from '../context/DataContext';

const { FiMenu, FiX, FiZap, FiRefreshCw } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { systemStatus, lastUpdated, updateData, loading } = useData();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Outages', href: '/outages' },
    { name: 'Tariffs', href: '/tariffs' },
    { name: 'News', href: '/news' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-zesco-primary p-2 rounded-lg">
              <SafeIcon icon={FiZap} className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-zesco-dark">ZESCO</h1>
              <p className="text-sm text-gray-600">Zambia Electricity Supply Corporation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-zesco-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* System Status & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`status-indicator status-${systemStatus}`}></div>
              <span className="text-sm text-gray-600">
                {systemStatus === 'online' ? 'System Online' : 'System Offline'}
              </span>
            </div>
            
            <button
              onClick={updateData}
              disabled={loading}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              title="Refresh Data"
            >
              <SafeIcon 
                icon={FiRefreshCw} 
                className={`w-5 h-5 text-gray-600 ${loading ? 'loading-spinner' : ''}`} 
              />
            </button>

            <Link
              to="/customer-portal"
              className="bg-zesco-primary text-white px-4 py-2 rounded-md hover:bg-zesco-secondary transition-colors"
            >
              Customer Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t"
          >
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-zesco-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/customer-portal"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-zesco-primary text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Customer Portal
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;