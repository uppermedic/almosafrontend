import React, { useState } from 'react';
import cn from 'classnames';
import { i18n, withTranslation } from 'root/i18n';

/* 

// reusable dropdown accepts
- the dropdown title
- the dropdown items list
- the active item index
- the function will happen when the item click

*/

const ReusableDropdown = ({
  t,
  physicians,
  items,
  clickItemFun,
  activeItemIndex
}) => {
  // const [showDrop, setShowdrop] = useState(true);
  const { language } = i18n;

  return (
    <section className="reusable-dropdown">
      <div className="container">
        <ul className={cn('menu')}>
          {items &&
            items.map((item, index) => {
              return (
                <li
                  className={cn('', { active: item.id === activeItemIndex })}
                  key={index}
                  onClick={() => clickItemFun(item)}
                >
                  {/* <i className={item.iconClass}></i> */}
                  <span> {language && item[language].title} </span>
                </li>
              );
            })}
          {physicians && (
            <li
              className={cn('', { active: activeItemIndex === 'physicians' })}
              onClick={() => clickItemFun({ id: 'physicians' })}
            >
              {/* <i className={item.iconClass}></i> */}
              <span> {t('our physicians')}</span>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default withTranslation('common')(ReusableDropdown);
