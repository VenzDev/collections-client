import types from "./types";

const initcollectionItemsState = {
  items: [],
  loading: false,
  error: { message: "" },
};

const collectionItemsReducer = (state = initcollectionItemsState, action) => {
  switch (action.type) {
    case types.FETCH_COLLECTION_ITEMS_PENDING:
      return { ...state, loading: true, items: [], error: { message: "" } };
    case types.FETCH_COLLECTION_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload, error: { message: "" } };
    case types.FETCH_COLLECTION_ITEMS_FAILED:
      return { ...state, loading: false, error: { message: action.payload } };
    default:
      return state;
  }
};

export { collectionItemsReducer };
