import Link from 'next/link';
import React from 'react';
export default function MedicalCenter({ item }) {
  return (
    <Link href={item.path ? item.path : ''}>
      <div
        className="center-card"
        style={{ backgroundImage: `url(${item.bg})` }}
      >
        <div className={`text-center overlay`}>
          <div className="icon">
            <img src={item.icon} alt="Icon" />
          </div>
          <div className="ribbon">
            <h3>{item.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
