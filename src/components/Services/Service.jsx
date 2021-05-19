import React from "react";
import { i18n, Link, withTranslation } from "root/i18n";
export default function Service({ item: { url, bg, title, ribbon_class } }) {
  return (
    <Link href={url}>
      <a>
        <div className="service-card" style={{ backgroundImage: `url(${bg})` }}>
          <div className={`text-center ribbon ${ribbon_class}`}>
            <h3>{title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
