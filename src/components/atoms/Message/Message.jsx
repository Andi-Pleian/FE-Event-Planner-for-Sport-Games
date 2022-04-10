import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Message.style.css";

export const mainClass = "message-container";

const Message = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  return visible && <div className={`${mainClass} ${type}`}>{message}</div>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Message;
