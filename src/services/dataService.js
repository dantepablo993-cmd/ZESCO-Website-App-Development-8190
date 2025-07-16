import axios from 'axios';

class DataService {
  constructor() {
    this.baseURL = 'https://api.zesco.co.zm';
    this.fallbackData = this.getFallbackData();
  }

  getFallbackData() {
    return {
      outages: [
        {
          id: 1,
          area: 'Lusaka Central',
          district: 'Lusaka',
          startTime: new Date('2024-01-15T08:00:00'),
          endTime: new Date('2024-01-15T16:00:00'),
          reason: 'Planned maintenance on transmission lines',
          status: 'scheduled',
          affectedCustomers: 15000
        },
        {
          id: 2,
          area: 'Ndola Industrial',
          district: 'Ndola',
          startTime: new Date('2024-01-14T14:30:00'),
          endTime: new Date('2024-01-14T18:00:00'),
          reason: 'Equipment failure at substation',
          status: 'resolved',
          affectedCustomers: 8500
        },
        {
          id: 3,
          area: 'Kitwe Residential',
          district: 'Kitwe',
          startTime: new Date('2024-01-16T06:00:00'),
          endTime: new Date('2024-01-16T14:00:00'),
          reason: 'Transformer replacement',
          status: 'ongoing',
          affectedCustomers: 12000
        }
      ],
      news: [
        {
          id: 1,
          title: 'ZESCO Announces New Tariff Structure for 2024',
          excerpt: 'New electricity tariffs will be implemented starting February 2024 to improve service delivery.',
          content: 'The Zambia Electricity Supply Corporation (ZESCO) has announced a new tariff structure that will come into effect from February 1, 2024. The new tariffs are designed to ensure sustainable electricity supply while maintaining affordability for consumers.',
          date: new Date('2024-01-10'),
          category: 'tariffs',
          image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
        },
        {
          id: 2,
          title: 'Major Infrastructure Upgrade Completed in Copperbelt',
          excerpt: 'ZESCO completes major transmission line upgrade improving power stability in mining areas.',
          content: 'ZESCO has successfully completed a major infrastructure upgrade in the Copperbelt Province, installing new transmission lines and upgrading substations to improve power reliability for mining operations and residential areas.',
          date: new Date('2024-01-08'),
          category: 'infrastructure',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop'
        },
        {
          id: 3,
          title: 'Solar Power Integration Project Launched',
          excerpt: 'ZESCO partners with renewable energy companies to integrate solar power into the national grid.',
          content: 'In line with Zambia\'s commitment to renewable energy, ZESCO has launched a comprehensive solar power integration project that will add 200MW of clean energy to the national grid by 2025.',
          date: new Date('2024-01-05'),
          category: 'renewable',
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop'
        }
      ],
      tariffs: [
        {
          id: 1,
          category: 'Residential',
          subcategory: 'Domestic (0-300 kWh)',
          rate: 0.89,
          currency: 'ZMW',
          unit: 'kWh',
          effectiveDate: new Date('2024-01-01'),
          description: 'Standard residential tariff for monthly consumption up to 300 kWh'
        },
        {
          id: 2,
          category: 'Residential',
          subcategory: 'Domestic (301-800 kWh)',
          rate: 1.15,
          currency: 'ZMW',
          unit: 'kWh',
          effectiveDate: new Date('2024-01-01'),
          description: 'Residential tariff for monthly consumption between 301-800 kWh'
        },
        {
          id: 3,
          category: 'Commercial',
          subcategory: 'Small Commercial',
          rate: 1.45,
          currency: 'ZMW',
          unit: 'kWh',
          effectiveDate: new Date('2024-01-01'),
          description: 'Commercial tariff for small businesses and offices'
        },
        {
          id: 4,
          category: 'Industrial',
          subcategory: 'Large Industrial',
          rate: 0.95,
          currency: 'ZMW',
          unit: 'kWh',
          effectiveDate: new Date('2024-01-01'),
          description: 'Industrial tariff for large manufacturing and mining operations'
        }
      ]
    };
  }

  async makeRequest(endpoint, fallbackData) {
    try {
      // Simulate API call with fallback data
      await new Promise(resolve => setTimeout(resolve, 500));
      return fallbackData;
    } catch (error) {
      console.warn(`API call failed for ${endpoint}, using fallback data`);
      return fallbackData;
    }
  }

  async getOutages() {
    return this.makeRequest('/outages', this.fallbackData.outages);
  }

  async getNews() {
    return this.makeRequest('/news', this.fallbackData.news);
  }

  async getTariffs() {
    return this.makeRequest('/tariffs', this.fallbackData.tariffs);
  }

  async getSystemStatus() {
    return this.makeRequest('/status', 'online');
  }

  async getCustomerInfo(accountNumber) {
    return this.makeRequest(`/customer/${accountNumber}`, {
      accountNumber,
      name: 'John Doe',
      address: '123 Main Street, Lusaka',
      currentBalance: 250.50,
      lastPayment: new Date('2024-01-10'),
      monthlyUsage: 450,
      status: 'active'
    });
  }
}

export const dataService = new DataService();