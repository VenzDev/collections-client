import types from "./types";

const initAllItemsState = {
  items: [],
  loading: false,
  error: { message: "" },
};

const allItemsReducer = (state = initAllItemsState, action) => {
  switch (action.type) {
    case types.FETCH_ALLITEMS_PENDING:
      return { ...state, loading: true, items: [], error: { message: "" } };
    case types.FETCH_ALLITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload, error: { message: "" } };
    case types.FETCH_ALLITEMS_FAILED:
      return { ...state, items: [], loading: false, error: { message: action.payload } };
    default:
      return state;
  }
};

export { allItemsReducer };
