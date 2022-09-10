import React from "react";
import Home from "./Component/Home/Home";
import "./App.css";
import Survey from "./Component/Survey/Survey";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/servey" element={<Survey />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
