import React from "react";
import Style from "../Survey/Styles/Form.module.css";
import Checkbox from "./Checkbox";

const Form = () => {
  return (
    <div className={Style.form}>
      <div className={Style.customPadding}>
        <h2>We’re sad to see you go... </h2>
        <h3>Can you tell us why you want to cancel your membership?</h3>
        <Checkbox />
      </div>
    </div>
  );
};

export default Form;
