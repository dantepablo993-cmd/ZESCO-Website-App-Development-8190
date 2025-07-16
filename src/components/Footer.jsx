import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-zesco-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-zesco-primary p-2 rounded-lg">
                <SafeIcon icon={FiZap} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ZESCO</h3>
                <p className="text-gray-300">Zambia Electricity Supply Corporation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Powering Zambia's development through reliable electricity supply and innovative energy solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/outages" className="text-gray-300 hover:text-white transition-colors">Power Outages</Link></li>
              <li><Link to="/tariffs" className="text-gray-300 hover:text-white transition-colors">Tariffs</Link></li>
              <li><Link to="/customer-portal" className="text-gray-300 hover:text-white transition-colors">Customer Portal</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News & Updates</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-zesco-accent mt-0.5" />
                <div>
                  <p className="text-gray-300">Stand 6949, Great East Road</p>
                  <p className="text-gray-300">Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-zesco-accent" />
                <p className="text-gray-300">+260 211 366000</p>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-zesco-accent" />
                <p className="text-gray-300">info@zesco.co.zm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zambia Electricity Supply Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;