import React from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navigation}>
      <h3>SHOP</h3>
      <div>
        <Link to="/courses">Мои Курсы</Link>
      </div>
      <div>
        <Link to="/shop">Магазин</Link>
      </div>
      <div>
        <Link to="/news">Новости</Link>
      </div>
      <div>
        <Link to="/video">Videos</Link>
      </div>
    </div>
  );
};

export default Navbar;
