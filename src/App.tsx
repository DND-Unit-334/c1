import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { TestPage } from './pages/TestPage';
import { ResultsPage } from './pages/ResultsPage';
import { AboutPage } from './pages/AboutPage';
import { useUserStore } from './store/userStore';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const { language } = useUserStore();

  // Set language from store on initial load
  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;