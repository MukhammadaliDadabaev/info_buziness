import React from "react";
import Header from "../../routes/modules/Navigation/Header";
import Navbar from "../../routes/modules/Navigation/Navbar";
import classes from "../../style.module.scss";

const Office = ({ children }) => {
  return (
    <div className={classes.main}>
      <div className={classes.main__navigation}>
        <Navbar />
      </div>
      <div className={classes.main__content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Office;
