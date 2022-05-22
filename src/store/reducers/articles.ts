import axios from "axios";

const SET_ARTICLES = "SET_ARTICLES";
const SET_LATEST_NEWS = "SET_LATEST_NEWS";

const INITIAL_STATE = {
  articles: [],
  latestNews: []
};

const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: action.payload
      };
    default: {
      return state;
    }
  }
};

export default articlesReducer;

export const fetchArticles = () => {
  const apiKey = "9L0vbeTAkVrs94GueLbrNtH69sRanUHr";

  return (dispatch) => {
    axios
      .get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
      .then((resp) => {
        dispatch(setArticles(resp.data.results));
        dispatch(setLatestNews(resp.data.results));
      });
  };
};

export const setArticles = (articles: any[]) => {
  return {
    type: SET_ARTICLES,
    payload: articles
  };
};

export const setLatestNews = (articles) => {
  return {
    type: SET_LATEST_NEWS,
    payload: articles.splice(0, 2)
  };
};
