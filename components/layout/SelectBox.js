import React from 'react';
import { i18n, withTranslation } from 'root/i18n';
const Selectbox = ({ options, handleChange, t, default_title, withoutAll }) => {
  const { language } = i18n;
  return (
    <label>
      <select required onChange={handleChange}>
        {!withoutAll && (
          <option value="all">
            {default_title ? t(default_title) : t('all')}
          </option>
        )}
        {options.map((opt, index) => (
          <option value={opt.id} key={index}>
            {opt[language]
              ? opt[language].title || opt[language].name
              : 'No Data'}
          </option>
        ))}
      </select>
      {/* <i className="fas fa-angle-down"></i> */}
      <i className="fas fa-caret-down"></i>
    </label>
  );
};

export default withTranslation('common')(Selectbox);
