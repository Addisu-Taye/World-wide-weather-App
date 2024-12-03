import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import App from './App'; // Ensure this is the correct path to your App component
import enMessages from './locales/en.json';
import esMessages from './locales/es.json';
import amMessages from './locales/am.json';
import './App.css';
import 'leaflet/dist/leaflet.css';


const messages = { en: enMessages, es: esMessages, am: amMessages };
export const LanguageContext = createContext();

const Main = () => {
  const [locale, setLocale] = useState('en');

  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <App />
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
