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
        {/* <button
          className="dropdown-button"
          // onClick={() => {
          //   setShowdrop(!showDrop);
          // }}
        >
          <div className="button-content">
            <img src={title.icon && title.icon} alt="" />
            {title.text}
          </div>
          <div className="arrow">
            <i className="fas fa-sort-down"></i>
          </div>
          <div className="arrow">
            {showDrop ? (
              <i className="fas fa-sort-up"></i>
            ) : (
            )}
          </div>
        </button> */}
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
          {physicians && physicians[0] && (
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
