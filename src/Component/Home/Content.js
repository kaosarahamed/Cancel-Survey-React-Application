import React from "react";
import Style from "../Home/Styles/Content.module.css";

const Content = () => {
  return (
    <div className={Style.content}>
      <p>
        We know things REALLY suck in the world right now - and many businesses{" "}
        <br />
        and freelancers are struggling to stay afloat during this COVID-19
        crisis.
      </p>
      <h5>So if you could use the extra cushion, grab 50% off for 6 months.</h5>
      <p>We hope you’re staying safe and healthy!</p>
    </div>
  );
};

export default Content;
