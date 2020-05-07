import { combineReducers } from "redux";
import { collectionItemsReducer } from "./redux/collectionItem";
import { collectionsReducer } from "./redux/collection";
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
  collectionsReducer,
});

export default reducer;
