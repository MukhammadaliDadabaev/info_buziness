import axios from "axios";
import { NET } from "../../network";

const loadNews = () => async (dispatch) => {
  const newsData = await axios.get(`${NET.API_URL}/news`);
  dispatch({
    type: "FETCH_NEWS",
    payload: {
      news: newsData.data,
    },
  });
};

export default loadNews;
