import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Office from "../../layouts/office/Office";
import loadNews from "../../redux/actions/newsAction";
// import classes from "../../style.module.scss";
import NewItem from "./modules/NewItem";

const News = () => {
  //  DISPATCH
  const dispatch = useDispatch();
  // Api-data
  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);
  // Date-news
  const news = useSelector((state) => state.news.news);

  return (
    <Office>
      {news.map((newsCard, inx) => {
        return <NewItem data={newsCard} key={inx} />;
      })}
    </Office>
  );
};

export default News;
