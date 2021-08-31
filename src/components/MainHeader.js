import React from "react";
import { NavLink } from "react-router-dom";
import  classes  from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/welcome" className={classes.a}>Welcome</NavLink>
          </li>
          <li className={classes.li}>
            <NavLink activeClassName={classes.active} to="/products" className={classes.a}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
