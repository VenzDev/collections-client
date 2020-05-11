import { combineReducers } from "redux";
import { collectionItemsReducer } from "./redux/collectionItem";
import { collectionsReducer } from "./redux/collection";
import { allItemsReducer } from "./redux/allItems";
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
  allItemsReducer,
});

export default reducer;
