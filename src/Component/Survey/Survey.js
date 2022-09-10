import React from "react";
import CancelSurvey from "./CancelSurvey";
import Style from "../Survey/Styles/Survay.module.css";
import Form from "./Form";

const Survey = () => {
  return (
    <div className={Style.survey}>
      <CancelSurvey />
      <Form />
    </div>
  );
};

export default Survey;
