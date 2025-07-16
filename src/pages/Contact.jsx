import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useNotification } from '../context/NotificationContext';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare } = FiIcons;

const Contact = () => {
  const { addNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    addNotification({
      type: 'success',
      title: 'Message Sent',
      message: 'Your message has been sent successfully. We will respond within 24 hours.'
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: ['+260 211 366000', '+260 211 366001'],
      description: 'Available 24/7 for emergencies'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['info@zesco.co.zm', 'customercare@zesco.co.zm'],
      description: 'We respond within 24 hours'
    },
    {
      icon: FiMapPin,
      title: 'Address',
      details: ['Stand 6949, Great East Road', 'Lusaka, Zambia'],
      description: 'Visit us during business hours'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 8:00 AM - 12:00 PM'],
      description: 'Emergency services available 24/7'
    }
  ];

  const offices = [
    {
      name: 'Lusaka Office',
      address: 'Stand 6949, Great East Road, Lusaka',
      phone: '+260 211 366000',
      email: 'lusaka@zesco.co.zm'
    },
    {
      name: 'Kitwe Office',
      address: 'Independence Avenue, Kitwe',
      phone: '+260 212 223456',
      email: 'kitwe@zesco.co.zm'
    },
    {
      name: 'Ndola Office',
      address: 'Buteko Avenue, Ndola',
      phone: '+260 212 334567',
      email: 'ndola@zesco.co.zm'
    },
    {
      name: 'Livingstone Office',
      address: 'Mosi-oa-Tunya Road, Livingstone',
      phone: '+260 213 445678',
      email: 'livingstone@zesco.co.zm'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our customer service team</p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg card-shadow p-6 text-center"
            >
              <div className="bg-zesco-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <SafeIcon icon={info.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
              <p className="text-sm text-gray-500">{info.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg card-shadow p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiMail} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiPhone} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="outage">Power Outage</option>
                    <option value="connection">New Connection</option>
                    <option value="technical">Technical Support</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-zesco-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-zesco-secondary transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Regional Offices */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg card-shadow p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Offices</h2>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={office.name} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{office.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 text-gray-500 mr-2 mt-0.5" />
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiPhone} className="w-4 h-4 text-gray-500 mr-2" />
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiMail} className="w-4 h-4 text-gray-500 mr-2" />
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Contact</h3>
          <p className="text-red-700 mb-4">
            For power outages, electrical emergencies, or urgent issues, contact our 24/7 emergency hotline:
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <SafeIcon icon={FiPhone} className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-900 font-semibold">+260 211 366000</span>
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiMail} className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-900 font-semibold">emergency@zesco.co.zm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;