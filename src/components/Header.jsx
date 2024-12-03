import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { LanguageContext } from '../main';

const Header = () => {
  const { formatMessage } = useIntl();
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <header className="header">
      <h1>Weather App</h1>
      <div>
        <label>{formatMessage({ id: 'language' })}:</label>
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="am">አማርኛ</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
