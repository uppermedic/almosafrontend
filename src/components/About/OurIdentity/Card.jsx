import React from 'react'

export default function Card({
    item
}) {
    return (
        <div className='card-wrapper text-center' style={{backgroundImage:`url(${item.bg})`}}>
            <h2>
                {item.title}
            </h2>
            <span className="icon-wrapper">
                <i className={item.icon}></i>
            </span>
            <p>
                {item.description}
            </p>
        </div>
    )
}
