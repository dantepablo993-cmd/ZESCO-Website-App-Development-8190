import React, { createContext, useContext, useState, useEffect } from 'react';
import { dataService } from '../services/dataService';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    outages: [],
    news: [],
    tariffs: [],
    systemStatus: 'online',
    lastUpdated: new Date(),
    loading: false,
    error: null
  });

  const updateData = async () => {
    try {
      setData(prev => ({ ...prev, loading: true, error: null }));
      
      const [outages, news, tariffs, systemStatus] = await Promise.all([
        dataService.getOutages(),
        dataService.getNews(),
        dataService.getTariffs(),
        dataService.getSystemStatus()
      ]);

      setData(prev => ({
        ...prev,
        outages,
        news,
        tariffs,
        systemStatus,
        lastUpdated: new Date(),
        loading: false
      }));
    } catch (error) {
      setData(prev => ({
        ...prev,
        error: error.message,
        loading: false
      }));
    }
  };

  useEffect(() => {
    updateData();
    
    // Auto-update every 5 minutes
    const interval = setInterval(updateData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const value = {
    ...data,
    updateData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};