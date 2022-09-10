import React from "react";
import Style from "../Survey/Styles/CancelSurvey.module.css";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const CancelSurvey = () => {
  return (
    <div className={Style.cancel}>
      <AiOutlineLeft />
      <h2>
        <Link to="/">Cancellation Survey</Link>
      </h2>
    </div>
  );
};

export default CancelSurvey;
