import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ ...rest }) => {
  return (
    <input
      style={{
        width: 200,
        padding: 10,
        borderWidth: 1,
        borderColor: "red"
      }}
      {...rest}
    />
  );
};

TextInput.propTypes = {};

export default TextInput;
