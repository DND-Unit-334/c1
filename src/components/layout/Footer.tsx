import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-neutral-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('app.title')}</h3>
            <p className="text-neutral-300 mb-4">{t('app.description')}</p>
            <div className="flex space-x-4">
              {/* Social media icons could go here */}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/test" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.test')}
                </a>
              </li>
              <li>
                <a href="/about" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-neutral-400" />
                <span className="text-neutral-300">г. Алматы, ул. Примерная, 123</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-neutral-400" />
                <a href="tel:+77777777777" className="text-neutral-300 hover:text-white transition-colors">
                  +7 (777) 777-77-77
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-neutral-400" />
                <a href="mailto:info@career-path.kz" className="text-neutral-300 hover:text-white transition-colors">
                  info@career-path.kz
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-700">
          <p className="text-center text-neutral-400 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};