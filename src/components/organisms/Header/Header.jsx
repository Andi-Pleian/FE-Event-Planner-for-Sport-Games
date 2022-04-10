import React from "react";
import { Link } from "react-router-dom";

import { HEADER } from "../../../utils/constants";

import "./Header.style.css";

export const mainClass = "header";

const Header = () => {
  return (
    <div className={mainClass}>
      <div className={`${mainClass}-title`}>
        <Link to="/">{HEADER.LOGO_TEXT}</Link>
      </div>
      <div className={`${mainClass}-author`}>
        <Link to="/author">{HEADER.AUTHOR}</Link>
      </div>
    </div>
  );
};

export default Header;
