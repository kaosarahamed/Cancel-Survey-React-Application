import React from "react";
import Style from "../Home/Styles/Buttons.module.css";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className={Style.buttons}>
      <button className={Style.buttonOne}>
        <Link to="/">50 % OFF For 6 Months</Link>
      </button>
      <button className={Style.buttonTow}>
        <Link to="servey">No, thanks! I’ll cancel</Link>
      </button>
    </div>
  );
};

export default Buttons;
