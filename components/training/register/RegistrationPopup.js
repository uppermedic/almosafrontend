import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Link from 'next/link';
import { MdPayment } from 'react-icons/md';
import { useRouter } from 'next/router';

const RegistrationPopup = ({ open, toggle }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="read-more-modal">
      <Modal
        isOpen={open}
        toggle={toggle}
        unmountOnClose={true}
        centered={true}
        className="registration-popup"
      >
        <ModalBody>
          <div className="svg">{SVG}</div>
          <div className="content">
            <MdPayment />
            <p>
              {(locale == 'en' && 'Now You will be directed to') ||
                'الآن سيتم توجيهك إلى'}
            </p>
            <Link href="#">
              <a>
                <span className="pay-getway-link">
                  {(locale == 'en' && 'The payment gateway') || 'بوابة الدفع '}
                </span>
              </a>
            </Link>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegistrationPopup;

const SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 325 404"
    width="100%"
    height="100%"
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="M-482 -421L1438 -421L1438 1286L-482 1286Z" />
      </clipPath>
    </defs>
    <style></style>
    <g id="dining" clip-path="url(#cp1)">
      <g id="Group 107">
        <path
          id="Path 149"
          className="shp0"
          d="M264.19 259.74C264.91 247.33 263.04 234.77 258.53 223.08L241.87 229.51C248.46 246.58 248 265.96 240.61 282.69L240.62 282.7C235.4 287.25 229.94 291.8 224.32 296.4C206.44 311.07 186.99 327.02 172.23 346.6L172.23 267.66C209.55 212.55 263.16 167.98 324.19 141.51L317.09 125.13C297.65 133.56 278.93 143.74 261.19 155.44C264.45 132.19 271.86 109.5 283 88.86L267.28 80.38C252.58 107.63 243.84 138.17 241.86 169.08C215.81 188.71 192.29 211.74 172.23 237.37L172.23 168.7C204.23 120.81 240.67 75.5 280.54 34.01L267.67 21.64C251.27 38.71 235.44 56.41 220.24 74.66C211.82 49.39 202.24 24.35 191.68 0L175.3 7.11C187.16 34.45 197.75 62.68 206.83 91.12C190.93 111.07 175.8 131.61 161.5 152.67C148.05 133.08 133.87 113.94 119.04 95.33C128.11 66.89 138.71 38.66 150.57 11.31L134.19 4.2C123.63 28.55 114.05 53.59 105.62 78.86C90.43 60.61 74.6 42.91 58.2 25.84L45.32 38.22C85.45 79.96 122.1 125.58 154.25 173.81L154.37 173.73L154.37 239.2C134 212.84 109.98 189.19 83.33 169.09C81.35 138.18 72.61 107.63 57.9 80.38L42.19 88.86C53.33 109.5 60.73 132.2 64 155.45C46.25 143.74 27.53 133.56 8.1 125.13L0.99 141.51C62.8 168.31 116.99 213.68 154.37 269.76L154.37 348.51C139.45 328.05 119.32 311.54 100.86 296.4C95.24 291.8 89.78 287.25 84.56 282.69L84.57 282.69C77.19 265.96 76.73 246.58 83.32 229.51L66.66 223.08C62.14 234.77 60.27 247.33 61 259.74C50.31 247.64 42.01 234.75 37.41 219.94L20.35 225.24C31.23 260.23 59.28 285.4 89.54 310.21C114.84 330.96 143.51 354.47 154.36 386.05L154.37 386.05L154.37 403.84L172.23 403.84L172.23 382.26C183.99 352.58 211.37 330.12 235.65 310.21C265.9 285.4 293.95 260.23 304.83 225.24L287.78 219.94C283.17 234.75 274.87 247.64 264.19 259.74Z"
        />
      </g>
    </g>
  </svg>
);
