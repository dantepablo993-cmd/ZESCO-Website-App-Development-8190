import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotification } from '../context/NotificationContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiCheck, FiAlertTriangle, FiInfo } = FiIcons;

const NotificationSystem = () => {
  const { notifications, removeNotification } = useNotification();

  const getIcon = (type) => {
    switch (type) {
      case 'success': return FiCheck;
      case 'warning': return FiAlertTriangle;
      case 'error': return FiAlertTriangle;
      default: return FiInfo;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case 'success': return 'bg-green-500 text-white';
      case 'warning': return 'bg-yellow-500 text-white';
      case 'error': return 'bg-red-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className={`p-4 rounded-lg shadow-lg max-w-sm ${getColors(notification.type)}`}
          >
            <div className="flex items-start space-x-3">
              <SafeIcon icon={getIcon(notification.type)} className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium">{notification.title}</h4>
                {notification.message && (
                  <p className="text-sm opacity-90 mt-1">{notification.message}</p>
                )}
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <SafeIcon icon={FiX} className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationSystem;