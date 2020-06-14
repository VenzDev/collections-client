import actions from "./actions";
import axios from "axios";
import { fetchCollectionsEndpoint } from "../../apiConfig";
//delete axios.defaults.headers.common["X-Requested-With"];

const fetchData = () => async (dispatch) => {
  try {
    dispatch(actions.fetchCollectionsPending());
    const fetchedData = await axios.get(fetchCollectionsEndpoint);
    dispatch(actions.fetchCollectionsSuccess(fetchedData.data));
  } catch (err) {
    if (err) dispatch(actions.fetchCollectionsFailed({ message: "failed" }));
  }
};

export default {
  fetchData,
};
