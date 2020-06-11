import actions from "./actions";
import axios from "axios";
import { fetchItemsEndpoint } from "../../apiConfig";

const fetchData = () => async (dispatch) => {
  try {
    dispatch(actions.FETCH_ALLITEMS_PENDING());
    const fetchedData = await axios.get(fetchItemsEndpoint);
    if (fetchedData) dispatch(actions.FETCH_ALLITEMS_SUCCESS(fetchedData.data));
  } catch (err) {
    //if (err) dispatch(actions.FETCH_ALLITEMS_FAILED());
  }
};

const sortData = (data) => (dispatch) => {
  dispatch(actions.FETCH_ALLITEMS_PENDING());
  dispatch(actions.FETCH_ALLITEMS_SUCCESS(data));
};

export default {
  fetchData,
  sortData,
};
