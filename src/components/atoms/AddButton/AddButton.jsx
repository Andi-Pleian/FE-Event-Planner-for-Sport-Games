import React from "react";
import PropTypes from "prop-types";
import "./AddButton.style.css";

export const mainClass = "add-button";

const AddButton = ({ text, onClickEvent = null, disabled = false }) => {
  return (
    <button
      className={mainClass}
      onClick={onClickEvent}
      disabled={disabled}
      data-testid={mainClass}
    >
      {text}
    </button>
  );
};

AddButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func,
  disabled: PropTypes.bool,
};

export default AddButton;
