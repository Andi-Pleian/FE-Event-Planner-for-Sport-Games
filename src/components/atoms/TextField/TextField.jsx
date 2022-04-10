import React from "react";
import PropTypes from "prop-types";
import "./TextField.style.css";

import { TODO_PLACEHOLDER } from "../../../utils/constants";

export const mainClass = "text-field";

const TextField = ({ onChange, value }) => {
  return (
    <input
      className={mainClass}
      data-testid={mainClass}
      placeholder={TODO_PLACEHOLDER}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextField;
