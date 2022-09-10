import React from "react";
import Header from "./Header";
import { BiX } from "react-icons/bi";
import Content from "./Content";
import Buttons from "./Buttons";
import Style from "../Home/Styles/Home.module.css";

class Home extends React.Component {
  render() {
    return (
      <div className={Style.mainContainer}>
        <div className={Style.container}>
          <div className={Style.close}>
            <BiX />
          </div>
          <Header />
          <Content />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Home;
