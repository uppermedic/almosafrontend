import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const Selectbox = ({ options, handleChange, default_title, withoutAll }) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

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
            {opt[locale]
              ? opt[locale].title || opt[locale].name
              : 'No Data'}
          </option>
        ))}
      </select>
      {/* <i className="fas fa-angle-down"></i> */}
      <i className="fas fa-caret-down"></i>
    </label>
  );
};

export default Selectbox;
