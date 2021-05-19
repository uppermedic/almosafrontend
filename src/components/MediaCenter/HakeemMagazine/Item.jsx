import React from "react";
import { i18n, Link, withTranslation } from "root/i18n";
export default function Service({ item }) {
  return (
    <Link href="#">
      <a>
        <div className="card-item">
          <div className={`text-center ribbon`}>
            <h3>{item.title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
