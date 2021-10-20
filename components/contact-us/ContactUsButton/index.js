import React, { useEffect, useState } from 'react';
import { Link, withTranslation, i18n } from 'root/i18n';
import cn from 'classnames';
import { useRouter } from 'next/router';

const ContactUsButton = ({ t, phone }) => {
  const router = useRouter();
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <>
      <div
        className={cn('contact-us-button', 'd-none d-md-block', {
          hide: router.pathname === '/contact-us'
        })}
      >
        <Link href={`/${locale}/contact-us`}>
          <a>
            <ButtonSVG t={t} />{' '}
          </a>
        </Link>
      </div>
      <div
        className={cn('contact-us-button-mob', 'd-md-none', {
          hide: router.pathname === '/contact-us'
        })}
      >
        <Link href={`tel:${phone}`}>
          <a>
            {t('common:call_us')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80.083"
              height="41.338"
              viewBox="0 0 80.083 41.338"
            >
              <path
                id="Path_11"
                data-name="Path 11"
                d="M1767.363,475.182l38.51,19.575,33.816,17.189,6.377,3.242V475.182Z"
                transform="translate(-1767.136 -474.682)"
                fill="#55b047"
                stroke="#fff"
                stroke-width="1"
              />
            </svg>
          </a>
        </Link>
      </div>
    </>
  );
};

const ButtonSVG = ({ t }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    width="70"
    height="auto"
    viewBox="0 0 97.357 276.22"
  >
    <defs>
      <filter
        id="Path_10"
        x="0"
        y="0"
        width="97.357"
        height="276.22"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g
      id="Group_131"
      data-name="Group 131"
      transform="translate(-1828.893 -515.633)"
    >
      <g transform="matrix(1, 0, 0, 1, 1828.89, 515.63)" filter="url(#Path_10)">
        <path
          id="Path_10-2"
          data-name="Path 10"
          d="M1885.508,527.994l-79.357-32.812V712.148l79.357,41.254Z"
          transform="translate(-1797.15 -489.18)"
          fill="#0f425e"
        />
      </g>
      <g
        id="Group_14"
        data-name="Group 14"
        transform="translate(1847.893 706.811) rotate(-88)"
      >
        <text
          id="Blog"
          //transform="translate(0 40)"
          transform="translate(-15 38)"
          fill="#fff"
          font-size="35"
          font-family="DiodrumArabic-Medium, DiodrumArabic"
          font-weight="500"
        >
          <tspan x="0" y="0">
            {t('common:book_an_appointment')}
          </tspan>
        </text>
      </g>
      <path
        id="Path_11"
        data-name="Path 11"
        d="M1767.363,475.182l39.707,19.575,34.867,17.189,6.576,3.242V475.182Z"
        transform="translate(70.53 46.451)"
        fill="#55b047"
        stroke="#fff"
        stroke-width="1"
      />
    </g>
  </svg>
);

export default withTranslation(['common', 'menu'])(ContactUsButton);
