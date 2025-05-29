import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore } from '../../store/userStore';
import { AIChat } from '../ai/AIChat';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const { setLanguage } = useUserStore();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'kk' : 'ru';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/test', label: t('nav.test') },
    { path: '/about', label: t('nav.about') }
  ];

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center"
            >
              <motion.span 
                className="text-primary-500 font-bold text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('app.title')}
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-neutral-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => setIsAIChatOpen(true)}
              className="flex items-center text-neutral-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              <Bot size={18} className="mr-1" />
              {t('nav.aiAssistant')}
            </motion.button>
            
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={toggleLanguage}
              className="flex items-center text-neutral-700 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              <Globe size={18} className="mr-1" />
              {i18n.language === 'ru' ? 'KZ' : 'RU'}
            </motion.button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700 hover:text-primary-500 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsAIChatOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 rounded-md transition-colors"
              >
                <Bot size={18} className="mr-2" />
                {t('nav.aiAssistant')}
              </button>
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-500 hover:bg-neutral-100 rounded-md transition-colors"
              >
                <Globe size={18} className="mr-2" />
                {i18n.language === 'ru' ? 'Қазақша' : 'Русский'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* AI Chat Modal */}
      <AnimatePresence>
        {isAIChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl"
            >
              <div className="relative">
                <button
                  onClick={() => setIsAIChatOpen(false)}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-neutral-100 transition-colors"
                >
                  <X size={20} />
                </button>
                <AIChat />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Year of Working Professions banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-accent-500 text-white py-2 text-center"
      >
        <p className="text-sm font-medium">{t('app.yearOfWorkingProfessions')}</p>
      </motion.div>
    </header>
  );
};