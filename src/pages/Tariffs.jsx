import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useData } from '../context/DataContext';
import { format } from 'date-fns';

const { FiDollarSign, FiHome, FiBuilding, FiTool, FiCalculator, FiInfo } = FiIcons;

const Tariffs = () => {
  const { tariffs } = useData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [calculatorUsage, setCalculatorUsage] = useState('');
  const [calculatorCategory, setCalculatorCategory] = useState('Residential');

  const categories = ['all', 'Residential', 'Commercial', 'Industrial'];

  const filteredTariffs = selectedCategory === 'all' 
    ? tariffs 
    : tariffs.filter(tariff => tariff.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Residential': return FiHome;
      case 'Commercial': return FiBuilding;
      case 'Industrial': return FiTool;
      default: return FiDollarSign;
    }
  };

  const calculateBill = () => {
    if (!calculatorUsage || calculatorUsage <= 0) return 0;
    
    const usage = parseFloat(calculatorUsage);
    const categoryTariffs = tariffs.filter(t => t.category === calculatorCategory);
    
    if (calculatorCategory === 'Residential') {
      if (usage <= 300) {
        return usage * 0.89;
      } else if (usage <= 800) {
        return (300 * 0.89) + ((usage - 300) * 1.15);
      } else {
        return (300 * 0.89) + (500 * 1.15) + ((usage - 800) * 1.45);
      }
    } else {
      const tariff = categoryTariffs[0];
      return tariff ? usage * tariff.rate : 0;
    }
  };

  const estimatedBill = calculateBill();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Electricity Tariffs</h1>
          <p className="text-xl text-gray-600">Current electricity rates and pricing structure</p>
        </div>

        {/* Bill Calculator */}
        <div className="bg-white rounded-lg card-shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <SafeIcon icon={FiCalculator} className="w-6 h-6 mr-2" />
            Bill Calculator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Usage (kWh)
              </label>
              <input
                type="number"
                value={calculatorUsage}
                onChange={(e) => setCalculatorUsage(e.target.value)}
                placeholder="Enter your usage"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={calculatorCategory}
                onChange={(e) => setCalculatorCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zesco-primary focus:border-transparent"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Bill
              </label>
              <div className="bg-zesco-primary text-white px-4 py-2 rounded-lg text-lg font-semibold">
                K{estimatedBill.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-zesco-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>

        {/* Tariffs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTariffs.map((tariff, index) => (
            <motion.div
              key={tariff.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg card-shadow hover-lift overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-zesco-primary p-3 rounded-lg mr-4">
                    <SafeIcon icon={getCategoryIcon(tariff.category)} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tariff.category}</h3>
                    <p className="text-sm text-gray-600">{tariff.subcategory}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-zesco-primary mb-2">
                    K{tariff.rate.toFixed(2)}
                  </div>
                  <p className="text-gray-600">per {tariff.unit}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">{tariff.description}</p>
                </div>

                <div className="text-sm text-gray-500">
                  <p>Effective from: {format(tariff.effectiveDate, 'PPP')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tariff Information */}
        <div className="bg-white rounded-lg card-shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <SafeIcon icon={FiInfo} className="w-6 h-6 mr-2" />
            Tariff Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Residential Tariff Structure</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">0 - 300 kWh</span>
                  <span className="font-semibold">K0.89/kWh</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">301 - 800 kWh</span>
                  <span className="font-semibold">K1.15/kWh</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Above 800 kWh</span>
                  <span className="font-semibold">K1.45/kWh</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Charges</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Service Charge</span>
                  <span className="font-semibold">K15.00/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Meter Rental</span>
                  <span className="font-semibold">K5.00/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">VAT</span>
                  <span className="font-semibold">16%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Important Notes:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Tariffs are subject to regulatory approval and may change</li>
              <li>• All rates are exclusive of VAT unless otherwise stated</li>
              <li>• Service charges apply to all customer categories</li>
              <li>• Bulk supply customers may have special negotiated rates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;