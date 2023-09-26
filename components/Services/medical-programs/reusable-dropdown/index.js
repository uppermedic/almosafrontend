import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

/* 

// reusable dropdown accepts
- the dropdown title
- the dropdown items list
- the active item index
- the function will happen when the item click

*/

const ReusableDropdown = ({
  physicians,
  items,
  clickItemFun,
  activeItemIndex
}) => {
const { t } = useTranslation('common');

  const router = useRouter();
  const { locale } = router;

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
                  <span> {locale && item[locale].title} </span>
                </li>
              );
            })}
          {physicians && (
            <li
              className={cn('', { active: activeItemIndex === 'physicians' })}
              onClick={() => clickItemFun({ id: 'physicians' })}
            >
              {/* <i className={item.iconClass}></i> */}
              <span> {t('our_physicians')}</span>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};
export default ReusableDropdown;
