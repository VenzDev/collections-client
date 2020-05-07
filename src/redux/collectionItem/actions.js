import types from "./types";

const fetchCollectionItemsPending = () => ({
  type: types.FETCH_COLLECTION_ITEMS_PENDING,
  payload: true,
});
const fetchCollectionItemsSuccess = (collectionItems = {
  type: types.FETCH_COLLECTION_ITEMS_SUCCESS,
  payload: collectionItems,
});
const fetchCollectionItemsFailed = (error) => ({
  type: types.FETCH_COLLECTION_ITEMS_FAILED,
  payload: error,
});

export default {
  fetchCollectionItemsFailed,
  fetchCollectionItemsSuccess,
  fetchCollectionItemsPending,
};
