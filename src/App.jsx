import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { NotificationProvider } from './context/NotificationContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Outages from './pages/Outages';
import Tariffs from './pages/Tariffs';
import News from './pages/News';
import Contact from './pages/Contact';
import About from './pages/About';
import CustomerPortal from './pages/CustomerPortal';
import './App.css';

function App() {
  return (
    <DataProvider>
      <NotificationProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/outages" element={<Outages />} />
              <Route path="/tariffs" element={<Tariffs />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/customer-portal" element={<CustomerPortal />} />
            </Routes>
          </Layout>
        </Router>
      </NotificationProvider>
    </DataProvider>
  );
}

export default App;