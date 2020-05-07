import types from "./types";

const initcollectionsState = {
  collections: [],
  loading: false,
  error: { message: "" },
};

const collectionsReducer = (state = initcollectionsState, action) => {
  switch (action.type) {
    case types.FETCH_COLLECTIONS_PENDING:
      return { ...state, loading: true, collections: [], error: { message: "" } };
    case types.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, loading: false, collections: action.payload, error: { message: "" } };
    case types.FETCH_COLLECTIONS_FAILED:
      return { ...state, collections: [], loading: false, error: { message: action.payload } };
    default:
      return state;
  }
};

export { collectionsReducer };
