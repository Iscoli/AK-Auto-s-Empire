import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">AK</span>
            </div>
            <h1 className="text-2xl font-bold text-white">A.k AUTO'S</h1>
          </motion.div>

          <ul className="hidden md:flex space-x-8">
            {['Home', 'Inventory', 'Services', 'Testimonials', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-900 rounded-b-lg shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              {['Home', 'Inventory', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const Hero = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800"
  >
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90" />
    </div>
    
    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Drive Your Dreams
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl md:text-2xl text-yellow-400 mb-8"
        >
          Premium Cars for Discerning Drivers
        </motion.p>
        <motion.div
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#inventory"
            className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
          >
            View Inventory
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition-colors"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

const InventoryCard = ({ image, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-xl bg-white shadow-xl"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative h-64 overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors"
      >
        View Details
      </motion.button>
    </div>
  </motion.div>
);

const App = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <Hero />
      
      {/* Inventory Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900"
          >
            Featured Vehicles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Sedan',
                description: 'Experience unmatched comfort and sophistication.',
                image: '/api/placeholder/400/300'
              },
              {
                title: 'Premium SUV',
                description: 'Elevate your family adventures.',
                image: '/api/placeholder/400/300'
              },
              {
                title: 'Executive Coupe',
                description: 'Performance meets luxury.',
                image: '/api/placeholder/400/300'
              }
            ].map((car, index) => (
              <InventoryCard key={index} {...car} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-blue-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Premium Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚗',
                title: 'Vehicle Sales',
                description: 'Find your perfect match from our premium selection.'
              },
              {
                icon: '🔄',
                title: 'Trade-In',
                description: 'Upgrade your ride with our hassle-free trade-in process.'
              },
              {
                icon: '🤝',
                title: 'Financing',
                description: 'Flexible financing options tailored to your needs.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">A.k AUTO'S</h3>
              <p className="text-blue-200">Your trusted partner in automotive excellence.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Inventory', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-blue-200 hover:text-yellow-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <address className="text-blue-200 not-italic">
                <p>20 Clinton Avenue</p>
                <p>Kado Estate, Abuja</p>
                <p className="mt-4">070 3249 5753</p>
                <p>090 3348 7805</p>
              </address>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>&copy; 2025 A.k AUTO'S EMPIRE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;