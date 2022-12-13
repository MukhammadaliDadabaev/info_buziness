const initState = {
  news: [],
  courses: [],
  searched: [],
  likes: 77,
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return { ...state, news: action.payload.news };
    default:
      return { ...state };
  }
};
export default newsReducer;
