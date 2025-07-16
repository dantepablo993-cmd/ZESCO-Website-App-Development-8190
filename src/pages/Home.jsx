import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useData } from '../context/DataContext';
import { format } from 'date-fns';

const { FiZap, FiActivity, FiDollarSign, FiUsers, FiArrowRight, FiAlertCircle } = FiIcons;

const Home = () => {
  const { outages, news, systemStatus, lastUpdated } = useData();

  const stats = [
    {
      name: 'System Status',
      value: systemStatus === 'online' ? 'Online' : 'Offline',
      icon: FiActivity,
      color: systemStatus === 'online' ? 'text-green-500' : 'text-red-500'
    },
    {
      name: 'Active Outages',
      value: outages.filter(o => o.status === 'ongoing').length,
      icon: FiAlertCircle,
      color: 'text-yellow-500'
    },
    {
      name: 'Customers Served',
      value: '2.5M+',
      icon: FiUsers,
      color: 'text-blue-500'
    },
    {
      name: 'Current Base Tariff',
      value: 'K0.89/kWh',
      icon: FiDollarSign,
      color: 'text-green-500'
    }
  ];

  const services = [
    {
      name: 'New Connection',
      description: 'Apply for new electricity connection',
      icon: FiZap,
      href: '/services'
    },
    {
      name: 'Bill Payment',
      description: 'Pay your electricity bills online',
      icon: FiDollarSign,
      href: '/customer-portal'
    },
    {
      name: 'Report Outage',
      description: 'Report power outages in your area',
      icon: FiAlertCircle,
      href: '/outages'
    },
    {
      name: 'Check Tariffs',
      description: 'View current electricity tariffs',
      icon: FiActivity,
      href: '/tariffs'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powering Zambia's Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Reliable electricity supply for homes, businesses, and industries across Zambia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/customer-portal"
                className="bg-white text-zesco-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Customer Portal
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zesco-primary transition-colors"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg card-shadow hover-lift"
              >
                <SafeIcon icon={stat.icon} className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Services</h2>
            <p className="text-xl text-gray-600">Access our most popular services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg card-shadow hover-lift"
              >
                <SafeIcon icon={service.icon} className="w-10 h-10 text-zesco-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-zesco-primary hover:text-zesco-secondary transition-colors"
                >
                  Learn More
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Outages Alert */}
      {outages.filter(o => o.status === 'ongoing').length > 0 && (
        <section className="py-8 bg-yellow-50 border-l-4 border-yellow-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-yellow-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800">Current Power Outages</h3>
                <p className="text-yellow-700">
                  {outages.filter(o => o.status === 'ongoing').length} ongoing outages affecting multiple areas.
                </p>
              </div>
              <Link
                to="/outages"
                className="ml-auto bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
              <p className="text-xl text-gray-600">Stay updated with ZESCO announcements</p>
            </div>
            <Link
              to="/news"
              className="bg-zesco-primary text-white px-6 py-2 rounded-lg hover:bg-zesco-secondary transition-colors"
            >
              View All News
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(0, 3).map((article, index) => (
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
                  <div className="text-sm text-gray-500 mb-2">
                    {format(article.date, 'MMM dd, yyyy')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link
                    to={`/news`}
                    className="inline-flex items-center text-zesco-primary hover:text-zesco-secondary transition-colors"
                  >
                    Read More
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-4 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Last updated: {format(lastUpdated, 'PPp')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;