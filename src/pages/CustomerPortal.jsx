import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useNotification } from '../context/NotificationContext';
import { dataService } from '../services/dataService';

const { FiUser, FiCreditCard, FiActivity, FiFileText, FiDollarSign, FiCalendar, FiBarChart3, FiSettings } = FiIcons;

const CustomerPortal = () => {
  const { addNotification } = useNotification();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [accountNumber, setAccountNumber] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerData, setCustomerData] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!accountNumber) {
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'Please enter your account number'
      });
      return;
    }

    try {
      const data = await dataService.getCustomerInfo(accountNumber);
      setCustomerData(data);
      setIsLoggedIn(true);
      addNotification({
        type: 'success',
        title: 'Login Successful',
        message: 'Welcome to your customer portal'
      });
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Login Failed',
        message: 'Please check your account number and try again'
      });
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!paymentAmount || paymentAmount <= 0) {
      addNotification({
        type: 'error',
        title: 'Invalid Amount',
        message: 'Please enter a valid payment amount'
      });
      return;
    }

    // Simulate payment processing
    addNotification({
      type: 'success',
      title: 'Payment Successful',
      message: `Payment of K${paymentAmount} has been processed successfully`
    });
    setPaymentAmount('');
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: FiBarChart3 },
    { id: 'bills', label: 'Bills', icon: FiFileText },
    { id: 'payments', label: 'Payments', icon: FiCreditCard },
    { id: 'usage', label: 'Usage', icon: FiActivity },
    { id: 'settings', label: 'Settings', icon: FiSettings }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg card-shadow p-8"
          >
            <div className="text-center mb-8">
              <div className="bg-zesco-primary p-4 rounded-lg w-fit mx-auto mb-4">
                <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Customer Portal</h1>
              <p className="text-gray-600">Access your account information and manage your electricity services</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="Enter your account number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-zesco-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-zesco-secondary transition-colors"
              >
                Login to Portal
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Demo Account</h3>
              <p className="text-sm text-blue-800">
                Use account number: <strong>DEMO123456</strong> to explore the portal features
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg card-shadow p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-zesco-primary p-3 rounded-lg">
                <SafeIcon icon={FiUser} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome, {customerData?.name}</h1>
                <p className="text-gray-600">Account: {customerData?.accountNumber}</p>
              </div>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg card-shadow mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-zesco-primary text-zesco-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <SafeIcon icon={tab.icon} className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Account Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg card-shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Current Balance</h3>
                  <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">K{customerData?.currentBalance}</div>
                <p className="text-sm text-gray-600 mt-2">Account in good standing</p>
              </div>

              <div className="bg-white rounded-lg card-shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Monthly Usage</h3>
                  <SafeIcon icon={FiActivity} className="w-6 h-6 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{customerData?.monthlyUsage} kWh</div>
                <p className="text-sm text-gray-600 mt-2">This month</p>
              </div>

              <div className="bg-white rounded-lg card-shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Last Payment</h3>
                  <SafeIcon icon={FiCalendar} className="w-6 h-6 text-purple-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">K{customerData?.currentBalance}</div>
                <p className="text-sm text-gray-600 mt-2">Jan 10, 2024</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg card-shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <button
                  onClick={() => setActiveTab('payments')}
                  className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <SafeIcon icon={FiCreditCard} className="w-5 h-5 text-zesco-primary" />
                  <span>Make Payment</span>
                </button>
                <button
                  onClick={() => setActiveTab('bills')}
                  className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <SafeIcon icon={FiFileText} className="w-5 h-5 text-zesco-primary" />
                  <span>View Bills</span>
                </button>
                <button
                  onClick={() => setActiveTab('usage')}
                  className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <SafeIcon icon={FiActivity} className="w-5 h-5 text-zesco-primary" />
                  <span>Usage History</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <SafeIcon icon={FiSettings} className="w-5 h-5 text-zesco-primary" />
                  <span>Settings</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bills Tab */}
        {activeTab === 'bills' && (
          <div className="bg-white rounded-lg card-shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((bill) => (
                <div key={bill} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">January 2024</p>
                    <p className="text-sm text-gray-600">Due: Jan 31, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">K{(Math.random() * 500 + 100).toFixed(2)}</p>
                    <p className="text-sm text-green-600">Paid</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-lg card-shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Make a Payment</h3>
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Amount (ZMW)
                </label>
                <input
                  type="number"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent">
                  <option>Mobile Money</option>
                  <option>Bank Transfer</option>
                  <option>Credit Card</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-zesco-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-zesco-secondary transition-colors"
              >
                Process Payment
              </button>
            </form>
          </div>
        )}

        {/* Usage Tab */}
        {activeTab === 'usage' && (
          <div className="bg-white rounded-lg card-shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">This Month</h4>
                <p className="text-2xl font-bold text-zesco-primary">{customerData?.monthlyUsage} kWh</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Average Daily Usage</h4>
                <p className="text-2xl font-bold text-zesco-primary">{(customerData?.monthlyUsage / 30).toFixed(1)} kWh</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg card-shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Information
                </label>
                <input
                  type="email"
                  value={customerData?.email || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
                  placeholder="Phone number"
                />
              </div>
              <button className="bg-zesco-primary text-white px-6 py-2 rounded-lg hover:bg-zesco-secondary transition-colors">
                Update Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerPortal;