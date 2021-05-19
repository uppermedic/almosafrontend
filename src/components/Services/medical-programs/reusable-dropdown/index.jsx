import Reatc, { useState } from 'react';
import cn from 'classnames';

/* 

// reusable dropdown accepts
- the dropdown title
- the dropdown items list
- the active item index
- the function will happen when the item click

*/

const ReusableDropdown = ({ title, items, clickItemFun, activeItemIndex }) => {
  // const [showDrop, setShowdrop] = useState(true);
  console.log(title);

  return (
    <section className="reusable-dropdown">
      <div className="container">
        <button
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
          {/* <div className="arrow">
            {showDrop ? (
              <i className="fas fa-sort-up"></i>
            ) : (
            )}
          </div> */}
        </button>
        <ul className={cn('menu')}>
          {items &&
            items.map((item, index) => {
              return (
                <li
                  className={cn('', { active: index == activeItemIndex })}
                  key={index}
                  onClick={() => {
                    clickItemFun(index);
                    // setShowdrop(false);
                  }}
                >
                  <i className={item.iconClass}></i>
                  <span> {item.title} </span>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default ReusableDropdown;
