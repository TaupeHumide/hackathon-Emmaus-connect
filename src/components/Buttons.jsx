import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";

function Button({ onPrevious, onNext }) {
  return (
    <div className="button-container">
      <button className="previous-button" onClick={onPrevious}>
        Précédent
      </button>
      <button className="next-button" onClick={onNext}>
        Suivant
      </button>
    </div>
  );
}

Button.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Button;
