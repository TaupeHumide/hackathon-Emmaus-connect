import React from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import "./Buttons.css";

function Button({ onPrevious, onNext }) {
  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
  };
  return (
    <div className="button-container">
      <LeftOutlined className="fleche-gauche" onClick={handlePrevious} />
      <RightOutlined className="fleche-droite" onClick={handleNext} />
    </div>
  );
}

Button.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Button;
