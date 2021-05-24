import React from 'react';
import { Link, i18n, withTranslation } from 'root/i18n';

const Taps = ({ t, tap, handleClick, tapId }) => {
  const lang = i18n.language;
  return (
    <li className="tap mx-1" onClick={handleClick}>
      <a className={tapId === tap.id ? 'active' : ''}>
        {lang && tap[lang].title}
      </a>
    </li>
  );
};

export default withTranslation('common')(Taps);
