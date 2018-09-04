import React from "react";
import { Link } from "react-router-dom";

const Header = ({ locale }) => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/notes">Notes</Link>
    </li>
    <li>
      <Link to="/products">Products</Link>
    </li>
  </ul>
);

export default Header;
