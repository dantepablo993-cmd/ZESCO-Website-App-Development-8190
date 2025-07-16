import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useData } from '../context/DataContext';
import { format } from 'date-fns';

const { FiAlertCircle, FiClock, FiMapPin, FiUsers, FiSearch, FiFilter } = FiIcons;

const Outages = () => {
  const { outages } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOutages = outages.filter(outage => {
    const matchesSearch = outage.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         outage.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || outage.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return 'bg-red-100 text-red-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ongoing': return FiAlertCircle;
      case 'scheduled': return FiClock;
      case 'resolved': return FiUsers;
      default: return FiAlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Power Outages</h1>
          <p className="text-xl text-gray-600">Current and scheduled power outages across Zambia</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg card-shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by area or district..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
              />
            </div>
            <div className="relative">
              <SafeIcon icon={FiFilter} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
              >
                <option value="all">All Statuses</option>
                <option value="ongoing">Ongoing</option>
                <option value="scheduled">Scheduled</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Outages List */}
        <div className="space-y-6">
          {filteredOutages.map((outage, index) => (
            <motion.div
              key={outage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg card-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <SafeIcon 
                      icon={getStatusIcon(outage.status)} 
                      className="w-6 h-6 text-gray-600" 
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{outage.area}</h3>
                      <p className="text-gray-600">{outage.district} District</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(outage.status)}`}>
                    {outage.status.charAt(0).toUpperCase() + outage.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiClock} className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Start Time</p>
                      <p className="font-medium">{format(outage.startTime, 'PPp')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiClock} className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">End Time</p>
                      <p className="font-medium">{format(outage.endTime, 'PPp')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUsers} className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Affected Customers</p>
                      <p className="font-medium">{outage.affectedCustomers.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Reason</h4>
                  <p className="text-gray-700">{outage.reason}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredOutages.length === 0 && (
          <div className="text-center py-12">
            <SafeIcon icon={FiAlertCircle} className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No outages found</h3>
            <p className="text-gray-600">No power outages match your search criteria.</p>
          </div>
        )}

        {/* Report Outage */}
        <div className="mt-12 bg-zesco-primary rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Report a Power Outage</h3>
          <p className="text-lg mb-6">
            Help us improve our service by reporting power outages in your area
          </p>
          <button className="bg-white text-zesco-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Report Outage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Outages;