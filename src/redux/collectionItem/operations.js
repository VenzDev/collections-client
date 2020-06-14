import actions from "./actions";
import axios from "axios";
import { fetchCollectionItemsEndpoint } from "../../apiConfig";

const fetchData = (collectionId) => async (dispatch) => {
  try {
    dispatch(actions.fetchCollectionItemsPending());
    console.log(collectionId);
    const fetchedData = await axios.get(fetchCollectionItemsEndpoint + collectionId);
    if (fetchedData) dispatch(actions.fetchCollectionItemsSuccess(fetchedData.data));
  } catch (err) {
    if (err) dispatch(actions.fetchCollectionItemsFailed({ message: "failed" }));
  }
};

const changeData = (newData) => (dispatch) => {
  try {
    dispatch(actions.fetchCollectionItemsPending());
    if (newData) dispatch(actions.fetchCollectionItemsSuccess(newData));
  } catch (err) {
    if (err) dispatch(actions.fetchCollectionItemsFailed());
  }
};

export default {
  fetchData,
  changeData,
};
