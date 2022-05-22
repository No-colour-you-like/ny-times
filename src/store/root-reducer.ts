import { combineReducers } from "redux";

import articlesReducer from "./reducers/articles";
import navigationReducer from "./reducers/navigation";

const rootReducer = combineReducers({
  articles: articlesReducer,
  navigation: navigationReducer
});

export default rootReducer;
