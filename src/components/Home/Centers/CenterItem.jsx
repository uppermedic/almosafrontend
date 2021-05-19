import React from 'react';
import { i18n, Link, withTranslation } from 'root/i18n';
export default function CenterCards({ center }) {
  return (
    <div className="item center-caro-card">
      <img src={center.cover} alt="" srcSet="" />
      <div className="content">
        <h3>{center.name}</h3>
        <p>{center.description}</p>
        <Link href="#!">
          <a>Read More...</a>
        </Link>
      </div>
      <style jsx>{`
        .center-caro-card {
          height: 427.01px;
          background: #fff;
          position: relative;
          img {
            height: 69.81%;
            width: 100%;
            display: block;
          }

          .content {
            position: absolute;
            bottom: 6px;
            left: 50%;
            transform: translateX(-50%);
            // height: 244px;
            width: 80.17%;
            z-index: 2;
            box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.16);
            background: #fff;
            padding: 21px 14px;
            font-family: Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell,
              'Open Sans', 'Helvetica Neue', sans-serif;
            h3 {
              font-size: 20px;
              color: #537435;
              font-weight: medium;
            }
            p {
              margin: 20px 0;
              font-size: 15px;
              line-height: 31px;
              font-family: diodrum-arabic-light;
            }
            a {
              color: #5a3c19;
              font-size: 17px;
            }
          }
        }
      `}</style>
    </div>
  );
}
