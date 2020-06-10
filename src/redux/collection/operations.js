import actions from "./actions";
import axios from "axios";
import { fetchCollectionsEndpoint } from "../../apiConfig";
//delete axios.defaults.headers.common["X-Requested-With"];

const fetchData = () => async (dispatch) => {
  try {
    dispatch(actions.fetchCollectionsPending());
    const fetchedData = await axios.get(fetchCollectionsEndpoint);
    console.log(fetchedData);
    dispatch(actions.fetchCollectionsSuccess(fetchedData.data.collections));
  } catch (err) {
    if (err) dispatch(actions.fetchCollectionsFailed({ message: "failed" }));
  }
};

export default {
  fetchData,
};
