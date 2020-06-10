import actions from "./actions";
import axios from "axios";
import { fetchCollectionItemsEndpoint } from "../../apiConfig";

const fetchData = (collectionId) => async (dispatch) => {
  try {
    dispatch(actions.fetchCollectionItemsPending());
    const fetchedData = await fetch("https://collect-backend.mikart.dev/get/entries", {
      method: "GET",
      body: JSON.stringify({ collectionId: parseInt(collectionId) }),
    });
    console.log(fetchedData);
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
