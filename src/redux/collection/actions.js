import types from "./types";

const fetchCollectionsPending = () => ({
  type: types.FETCH_COLLECTIONS_PENDING,
  payload: true,
});
const fetchCollectionsSuccess = (collections) => ({
  type: types.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});
const fetchCollectionsFailed = (error) => ({
  type: types.FETCH_COLLECTIONS_FAILED,
  payload: error,
});
export default {
  fetchCollectionsFailed,
  fetchCollectionsSuccess,
  fetchCollectionsPending,
};
