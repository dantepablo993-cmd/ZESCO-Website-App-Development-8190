import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiHome, FiBuilding, FiTool, FiCreditCard, FiFileText, FiPhone, FiUsers } = FiIcons;

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'New Connection',
      description: 'Apply for new electricity connection for residential or commercial properties',
      icon: FiZap,
      features: ['Online application', 'Site inspection', 'Installation service', 'Connection certificate'],
      requirements: ['Valid ID', 'Property documents', 'Site plan', 'Application fee'],
      processing: '7-14 business days'
    },
    {
      id: 2,
      title: 'Residential Services',
      description: 'Comprehensive electricity services for homes and residential areas',
      icon: FiHome,
      features: ['Meter installation', 'Load upgrades', 'Fault repairs', 'Billing services'],
      requirements: ['Account verification', 'Property ownership', 'Safety compliance'],
      processing: '3-7 business days'
    },
    {
      id: 3,
      title: 'Commercial & Industrial',
      description: 'Specialized electricity solutions for businesses and industrial facilities',
      icon: FiBuilding,
      features: ['High voltage connections', 'Load management', 'Power quality monitoring', 'Emergency support'],
      requirements: ['Business registration', 'Load assessment', 'Technical specifications'],
      processing: '14-30 business days'
    },
    {
      id: 4,
      title: 'Maintenance & Repairs',
      description: 'Professional maintenance and repair services for electrical systems',
      icon: FiTool,
      features: ['Scheduled maintenance', 'Emergency repairs', 'System upgrades', 'Safety inspections'],
      requirements: ['Service request', 'Access permission', 'Safety clearance'],
      processing: '1-3 business days'
    },
    {
      id: 5,
      title: 'Bill Payment Services',
      description: 'Convenient payment options for electricity bills',
      icon: FiCreditCard,
      features: ['Online payments', 'Mobile money', 'Bank transfers', 'Payment plans'],
      requirements: ['Account number', 'Payment method', 'Valid identification'],
      processing: 'Instant processing'
    },
    {
      id: 6,
      title: 'Customer Support',
      description: '24/7 customer support for all your electricity needs',
      icon: FiPhone,
      features: ['Technical support', 'Billing inquiries', 'Service requests', 'Complaint resolution'],
      requirements: ['Account information', 'Contact details'],
      processing: 'Immediate response'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete the online application form with required documents'
    },
    {
      step: 2,
      title: 'Document Review',
      description: 'Our team reviews your application and documents'
    },
    {
      step: 3,
      title: 'Site Inspection',
      description: 'Technical team conducts site inspection if required'
    },
    {
      step: 4,
      title: 'Approval & Installation',
      description: 'Service approval and installation scheduling'
    },
    {
      step: 5,
      title: 'Service Activation',
      description: 'Connection activation and service commencement'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive electricity services for all your needs</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg card-shadow hover-lift overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-zesco-primary p-3 rounded-lg mr-4">
                    <SafeIcon icon={service.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-zesco-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-zesco-accent rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">
                    <strong>Processing Time:</strong> {service.processing}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg card-shadow p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-zesco-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-zesco-primary to-zesco-secondary rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg mb-6">
            Our customer service team is ready to assist you with any questions or concerns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <SafeIcon icon={FiPhone} className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Call Us</p>
              <p>+260 211 366000</p>
            </div>
            <div>
              <SafeIcon icon={FiFileText} className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Email</p>
              <p>info@zesco.co.zm</p>
            </div>
            <div>
              <SafeIcon icon={FiUsers} className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Visit Us</p>
              <p>Great East Road, Lusaka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;