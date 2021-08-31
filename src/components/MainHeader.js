import React from "react";
import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <header>
      <nav>
        <u>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </u>
      </nav>
    </header>
  );
};

export default MainHeader;
