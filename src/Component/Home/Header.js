import React from "react";
import Style from "../Home/Styles/Header.module.css";
import Image from "../Home/Assets/Icon-discount.png";

const Header = () => {
  return (
    <div className={Style.header}>
      <img className={Style.quteimg} src={Image} alt="" />
      <h1>
        Before You Go...
        <br />
        Would 50% Off For 6 Months Help?
      </h1>
    </div>
  );
};

export default Header;
