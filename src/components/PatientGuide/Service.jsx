import React from 'react'
import { i18n, Link, withTranslation } from "root/i18n";
export default function Service({
    item
}) {
    return (
        <Link href={item.url}>
            <a>
                <div className="guide-card" style={{backgroundImage: `url(${item.bg})`}}>
                    <div className={`text-center ribbon ${item.ribbon_class}`}>
                        <h3>
                            {item.title}
                        </h3>
                    </div>
                </div>

            </a>
        </Link>
    )
}
