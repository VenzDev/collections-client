import { combineReducers } from "redux";
import { collectionItemsReducer } from "./redux/collectionItem";

const initState = {
  status: "helloWorld",
};

const initReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  initReducer,
  collectionItemsReducer,
});

export default reducer;
