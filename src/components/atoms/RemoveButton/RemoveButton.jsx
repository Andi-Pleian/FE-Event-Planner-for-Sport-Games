import React from "react";
import PropTypes from "prop-types";
import "./RemoveButton.style.css";

import { REMOVE_TEXT } from "../../../utils/constants";

export const mainClass = "remove-button";

const RemoveButton = ({ onClickEvent = null, disabled = false }) => {
  return (
    <button
      className={mainClass}
      onClick={onClickEvent}
      disabled={disabled}
      data-testid={mainClass}
    >
      {REMOVE_TEXT}
    </button>
  );
};

RemoveButton.propTypes = {
  onClickEvent: PropTypes.func,
  disabled: PropTypes.bool,
};

export default RemoveButton;
