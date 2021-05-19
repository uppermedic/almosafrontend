import React from "react";
import { Link } from "root/i18n";

const Taps = ({ tap }) => {
  return (
    <div className="tap mx-1">
      <li>
        <Link href="#!">
          <a>{tap}</a>
        </Link>
      </li>
    </div>
  );
};

export default Taps;
