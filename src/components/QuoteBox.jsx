import React from "react";
import "./home.css";
import Spinner from "react-spinkit";

const QuoteBox = ({ quote, handleClick, loaded }) => {
  return (
    <div className="quote-box">
      <div className="quote-container">
        <div className="quote-content">
          {loaded ? (quote) : (<Spinner name="pacman" fadeIn={0} color="blue"/>)}
        </div>
      </div>
      {loaded && (
        <div className="button-refresh">
          <button className="btn btn-primary" onClick={handleClick}>
            GET NEW
          </button>
        </div>
      )}
    </div>
  );
};

export default QuoteBox;
