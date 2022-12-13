import React from "react";
import Image from "../../../components/ui/image";
import classes from "./../news.module.scss";

const NewItem = ({ data }) => {
  return (
    <div className={classes.news}>
      <Image sizeWidth="40%">
        <img src={data.img} alt="card-news" />
      </Image>
      <div className={classes.news__body}>
        <h1 className={classes.news__title}>{data.title}</h1>
        <div className={classes.news__subtitle}>{data.subtitle}</div>
        <div className={classes.news__text}>{data.text}</div>
      </div>
    </div>
  );
};

export default NewItem;
