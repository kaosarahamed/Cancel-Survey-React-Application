import React, { useState } from "react";
import Style from "../Survey/Styles/Checkbox.module.css";
import { FiChevronDown, FiAlertTriangle, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Checkbox = () => {
  // Decrial All States Here
  const [state, setstate] = useState({
    checkbox: "",
    textarea: {
      feedback: "",
      better: "",
      fine: "",
    },
    products: [],
    qna: "",
  });

  const [isShown, setInshown] = useState({
    boxOne: false,
    boxTow: false,
    boxThree: false,
    boxFour: false,
    boxFive: false,
    boxSix: false,
    boxSeven: false,
  });

  const [btnshown, setBtnshown] = useState(false);

  // State Declaration End

  // All Function Decrial Here
  const onChange = (event) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });

    if (event.target.id === "checkbox") {
      setInshown({
        boxOne: true,
      });
    }
    if (event.target.id === "checkbox2") {
      setInshown({
        boxTow: true,
      });
    }
    if (event.target.id === "checkbox3") {
      setInshown({
        boxThree: true,
      });
    }
    if (event.target.id === "checkbox4") {
      setInshown({
        boxFour: true,
      });
    }
    if (event.target.id === "checkbox5") {
      setInshown({
        boxFive: true,
      });
    }
    if (event.target.id === "checkbox6") {
      setInshown({
        boxSix: true,
      });
    }
    if (event.target.id === "checkbox7") {
      setInshown({
        boxSeven: true,
      });
    }
  };

  const onClickBtn = () => {
    setBtnshown((pre) => !pre);
  };

  const onProductChange = (event) => {
    if (event.target.checked) {
      setstate((prev) => {
        return {
          ...prev,
          products: [...state.products, event.target.value],
        };
      });
    } else {
      const products = state.products.filter(
        (product) => product !== event.target.value
      );
      setstate((prev) => {
        return {
          ...prev,
          products,
        };
      });
    }
  };
  // Function Declaration End

  // Component Return Here
  return (
    <div>
      <div className={Style.checkbox}>
        {/* Input Box One */}
        <input
          type="radio"
          name="checkbox"
          value="I didn’t realize it was a recurring membership"
          id="checkbox"
          onChange={onChange}
        />
        <label htmlFor="checkbox">
          I didn’t realize it was a recurring membership
        </label>
        <textarea
          name="textarea"
          id="textareaone"
          style={{ display: isShown.boxOne ? "block" : "none" }}
          placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreciated!"
          onChange={onChange}
          value={state.textarea.feedback}
        ></textarea>
        {/* End */}

        {/* Input Box Tow */}
        <input
          type="radio"
          name="checkbox"
          value="Found a better solution"
          id="checkbox2"
          onChange={onChange}
        />
        <label htmlFor="checkbox2">Found a better solution</label>
        <textarea
          name="textarea"
          style={{ display: isShown.boxTow ? "block" : "none" }}
          placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreciated!"
          onChange={onChange}
          value={state.textarea.better}
        ></textarea>
        {/* End */}

        {/* Input Box Tree */}
        <input
          type="radio"
          name="checkbox"
          value="It’s too expensive"
          id="checkbox3"
          onChange={onChange}
        />
        <label htmlFor="checkbox3">It’s too expensive</label>
        <textarea
          name="textarea"
          style={{ display: isShown.boxThree ? "block" : "none" }}
          placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreciated!"
          onChange={onChange}
          value={state.textarea.fine}
        ></textarea>
        {/* End */}

        {/* Input Box Four */}
        <input
          type="radio"
          name="checkbox"
          value="Bugs, things not working properly"
          id="checkbox4"
          onChange={onChange}
        />
        <label htmlFor="checkbox4">Bugs, things not working properly</label>
        <div
          className={Style.bugs}
          style={{ display: isShown.boxFour ? "block" : "none" }}
        >
          <h2 className={Style.title}>
            Which product(s) did you have an issue with?
          </h2>
          <FiAlertTriangle />
          <fieldset onClick={onClickBtn}>
            <legend>Select Product(s)</legend>
            <div className={Style.btn}>
              <h2>{state.products.length} Product Selects</h2>
              <FiChevronDown />
            </div>
          </fieldset>
          <div
            className={Style.options}
            style={{ display: btnshown ? "block" : "none" }}
          >
            <input
              type="checkbox"
              id="product#1"
              name="products"
              value="product#1"
              checked={state.products.includes("product#1")}
              onChange={onProductChange}
            />
            <label htmlFor="product#1">product#1</label>
            <input
              type="checkbox"
              id="product#2"
              name="products"
              value="product#2"
              checked={state.products.includes("product#2")}
              onChange={onProductChange}
            />
            <label htmlFor="product#2">product#2</label>
          </div>

          <div className={Style.tab}>
            <h2 className={Style.QusTitle}>What was it?</h2>
            <div className={Style.tabs}>
              <span>
                <input
                  type="radio"
                  name="qna"
                  value="One Major Problem"
                  id="qna1"
                  onChange={onChange}
                />
                <label htmlFor="qna1">One Major Problem</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="qna"
                  value="Various things"
                  id="qna2"
                  onChange={onChange}
                />
                <label htmlFor="qna2">Various things</label>
              </span>
            </div>
          </div>

          <textarea
            name="textarea"
            placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreciated!"
            onChange={onChange}
            value={state.textarea.fine}
          ></textarea>
        </div>
        {/* End */}

        {/* Input Box Five */}
        <input
          type="radio"
          name="checkbox"
          value="I just want to pay for a single plugin"
          id="checkbox5"
          onChange={onChange}
        />
        <label htmlFor="checkbox5">
          I just want to pay for a single plugin
        </label>
        <textarea
          name="textarea"
          style={{ display: isShown.boxFive ? "block" : "none" }}
          placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreciated!"
          onChange={onChange}
          value={state.textarea.fine}
        ></textarea>
        {/* End */}

        {/* Input Box Six */}
        <input
          type="radio"
          name="checkbox"
          value="Not using WordPress anymore"
          id="checkbox6"
          onChange={onChange}
        />
        <label htmlFor="checkbox6">Not using WordPress anymore</label>
        <textarea
          name="textarea"
          style={{ display: isShown.boxSix ? "block" : "none" }}
          placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreciated!"
          onChange={onChange}
          value={state.textarea.fine}
        ></textarea>
        {/* End */}

        {/* Input Box Seven */}
        <input
          type="radio"
          name="checkbox"
          value="Other"
          id="checkbox7"
          onChange={onChange}
        />
        <label htmlFor="checkbox7">Other</label>
        <textarea
          name="textarea"
          style={{ display: isShown.boxSeven ? "block" : "none" }}
          placeholder="What is the better solution? If you don’t mind sharing. Your feedback is much appreciated!"
          onChange={onChange}
          value={state.textarea.fine}
        ></textarea>
        {/* End */}

        {/* Warning Start */}
        <p className={Style.warning}>
          {" "}
          <span className={Style.wrnicon}>!</span> Are you absolutely sure you
          want to cancel? If you do you'll lose access to so many cool things.
          And you'll lose the chance to stay on this plan at the same cost
          ongoing (regardless of future price increases).
        </p>
        {/* Warning End */}

        {/* Footer Buttons Start */}
        <div className={Style.buttons}>
          <button type="button" className={Style.back}>
            <FiArrowLeft /> <Link to="/">back</Link>
          </button>
          <button
            type="button"
            onClick={() => console.log(state)}
            className={Style.member}
          >
            Cancel Membership
          </button>
        </div>
        {/* Footer Buttons Start */}
      </div>
    </div>
  );
};

export default Checkbox;
