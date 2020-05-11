import types from "./types";

const FETCH_ALLITEMS_PENDING = () => ({ type: types.FETCH_ALLITEMS_PENDING, payload: true });
const FETCH_ALLITEMS_SUCCESS = (items) => ({ type: types.FETCH_ALLITEMS_SUCCESS, payload: items });
const FETCH_ALLITEMS_FAILED = (error) => ({ type: types.FETCH_ALLITEMS_FAILED, payload: error });

export default {
  FETCH_ALLITEMS_PENDING,
  FETCH_ALLITEMS_SUCCESS,
  FETCH_ALLITEMS_FAILED,
};
