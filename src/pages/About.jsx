import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiTarget, FiEye, FiAward, FiUsers, FiTrendingUp, FiGlobe, FiShield } = FiIcons;

const About = () => {
  const stats = [
    { label: 'Years of Service', value: '50+', icon: FiAward },
    { label: 'Customers Served', value: '2.5M+', icon: FiUsers },
    { label: 'Generation Capacity', value: '3,000MW', icon: FiZap },
    { label: 'Coverage Area', value: '752,614km²', icon: FiGlobe }
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for excellence in all our operations and service delivery.'
    },
    {
      icon: FiShield,
      title: 'Reliability',
      description: 'Providing consistent and dependable electricity supply to our customers.'
    },
    {
      icon: FiUsers,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'Embracing new technologies and innovative solutions for the future.'
    }
  ];

  const milestones = [
    {
      year: '1970',
      title: 'ZESCO Established',
      description: 'Zambia Electricity Supply Corporation was established as a statutory corporation.'
    },
    {
      year: '1977',
      title: 'Kariba South Expansion',
      description: 'Completion of Kariba South Power Station expansion project.'
    },
    {
      year: '1984',
      title: 'Rural Electrification',
      description: 'Launch of the rural electrification program to extend power to rural areas.'
    },
    {
      year: '2000',
      title: 'Kafue Gorge Lower',
      description: 'Commencement of the Kafue Gorge Lower hydroelectric project.'
    },
    {
      year: '2015',
      title: 'Solar Integration',
      description: 'Beginning of solar power integration into the national grid.'
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'Launch of comprehensive digital transformation initiatives.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ZESCO</h1>
          <p className="text-xl text-gray-600">Powering Zambia's development for over 50 years</p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg card-shadow overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                The Zambia Electricity Supply Corporation (ZESCO) Limited is Zambia's national electricity utility company, 
                established in 1970 as a statutory corporation. We are responsible for the generation, transmission, 
                and distribution of electricity throughout Zambia.
              </p>
              <p className="text-gray-600 mb-6">
                Over the decades, ZESCO has grown to become a cornerstone of Zambia's infrastructure, powering homes, 
                businesses, and industries across the nation. Our commitment to reliable electricity supply has been 
                instrumental in driving economic growth and improving the quality of life for millions of Zambians.
              </p>
              <p className="text-gray-600">
                Today, we continue to evolve and adapt to meet the changing energy needs of our customers while 
                embracing sustainable and innovative solutions for the future.
              </p>
            </div>
            <div className="bg-gradient-to-br from-zesco-primary to-zesco-secondary p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <SafeIcon icon={stat.icon} className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg card-shadow p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-zesco-primary p-3 rounded-lg mr-4">
                <SafeIcon icon={FiTarget} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable, affordable, and sustainable electricity supply to all our customers 
              while contributing to Zambia's economic development and improving the quality of life 
              for all Zambians through innovative energy solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg card-shadow p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-zesco-primary p-3 rounded-lg mr-4">
                <SafeIcon icon={FiEye} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading electricity utility in Africa, recognized for excellence in service delivery, 
              operational efficiency, and commitment to sustainable energy solutions that power economic 
              growth and social development.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg card-shadow p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-zesco-primary p-4 rounded-lg w-fit mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg card-shadow p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-zesco-primary text-white px-4 py-2 rounded-lg font-bold min-w-fit">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Message */}
        <div className="mt-12 bg-gradient-to-r from-zesco-primary to-zesco-secondary rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Leadership Message</h2>
          <p className="text-lg mb-6 max-w-4xl mx-auto">
            "At ZESCO, we are committed to powering Zambia's future through reliable electricity supply, 
            innovative solutions, and exceptional customer service. Our dedicated team works tirelessly 
            to ensure that every Zambian has access to the electricity they need to thrive."
          </p>
          <p className="text-xl font-semibold">- ZESCO Management Team</p>
        </div>
      </div>
    </div>
  );
};

export default About;