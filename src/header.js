import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const header = ({ title, caption }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <h2>{caption}</h2>
    </Fragment>
  );
};

header.propTypes = {
  title: PropTypes.element
};

export default header;
