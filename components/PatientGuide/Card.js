import React, { useState, useEffect } from 'react';
import { Link } from 'root/i18n';
import { i18n, withTranslation } from 'root/i18n';

const PatientFeatures = ({ item, withShapes, withBg, withTwoBg, t }) => {
  const { language } = i18n;
  const [locale, setlocale] = useState('');

  useEffect(() => {
    setlocale(language);
  }, [language]);

  return (
    <div className="guide-card-item">
      <Link href={item.path ? `/${locale}/${item.path}` : '#'}>
        <div className={`text-center feature ${item.feature_color}`}>
          {withBg && <div className="card-overlay"></div>}
          {withShapes && (
            <>
              <div className="overlay-1">{SVG}</div>
              <div className="overlay-2">{SVG}</div>
            </>
          )}
          {withTwoBg && (
            <>
              <div className="top-bg"></div>
              <div className="bottom-bg"></div>
            </>
          )}
          <h3>{t(`patient_guide:${item.content}`)}</h3>
        </div>
      </Link>
    </div>
  );
};

const SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 603 906"
    width="100%"
    height="100%"
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="M-299 -169L1455 -169L1455 1073L-299 1073Z" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
        <path d="M602.91 905.09L0.34 905.09L0.34 0.75L602.91 0.75L602.91 905.09Z" />
      </clipPath>
    </defs>
    <g id="Page 1" clipPath="url(#cp1)">
      <g id="Mask" clipPath="url(#cp2)">
        <path
          id="Path 3"
          className="shp0"
          style={{ fill: '#fff' }}
          d="M691.82 550.7C694.71 501.41 687.27 451.54 669.34 405.11L603.18 430.65C629.35 498.42 627.52 575.4 598.18 641.85L598.24 641.87C577.5 659.96 555.81 678.01 533.5 696.31C462.49 754.54 385.24 817.9 326.6 895.68L326.6 582.14C474.86 363.28 687.74 186.27 930.12 81.18L901.91 16.12C824.72 49.59 750.38 90 679.91 136.47C692.89 44.16 722.3 -45.99 766.53 -127.93L704.12 -161.61C645.72 -53.41 611 67.91 603.14 190.66C499.71 268.63 406.3 360.09 326.6 461.87L326.6 189.15C453.71 -1.05 598.42 -181 756.79 -345.75L705.66 -394.89C640.52 -327.12 577.65 -256.82 517.31 -184.34C483.86 -284.7 445.82 -384.14 403.85 -480.84L338.8 -452.6C385.92 -344.02 427.99 -231.9 464.04 -118.94C400.91 -39.75 340.79 41.86 284.01 125.47C230.6 47.68 174.3 -28.34 115.37 -102.25C151.42 -215.21 193.49 -327.32 240.61 -435.92L175.56 -464.15C133.59 -367.45 95.55 -268.01 62.1 -167.65C1.76 -240.14 -61.11 -310.44 -126.25 -378.2L-177.37 -329.05C-18.02 -163.28 127.52 17.9 255.21 209.43L255.69 209.11L255.69 469.14C174.78 364.46 79.41 270.52 -26.44 190.7C-34.3 67.94 -69.02 -53.39 -127.43 -161.61L-189.84 -127.93C-145.6 -45.97 -116.19 44.18 -103.22 136.5C-173.69 90.02 -248.03 49.59 -325.22 16.12L-353.43 81.18C-107.98 187.61 107.22 367.79 255.69 590.49L255.69 903.24C196.42 821.99 116.48 756.42 43.19 696.31C20.87 678.01 -0.81 659.96 -21.55 641.87L-21.5 641.85C-50.84 575.4 -52.66 498.42 -26.5 430.65L-92.65 405.11C-110.58 451.54 -118.03 501.41 -115.14 550.7C-157.57 502.66 -190.54 451.47 -208.83 392.63L-276.55 413.68C-233.35 552.66 -121.93 652.61 -1.78 751.14C98.68 833.54 212.56 926.93 255.66 1052.33L255.69 1052.32L255.69 1123L326.6 1123L326.6 1037.3C373.33 919.4 482.06 830.21 578.47 751.14C698.62 652.61 810.05 552.66 853.24 413.68L785.51 392.63C767.23 451.47 734.26 502.66 691.82 550.7Z"
        />
      </g>
    </g>
  </svg>
);

export default withTranslation(['menu', 'patient_guide'])(PatientFeatures);
