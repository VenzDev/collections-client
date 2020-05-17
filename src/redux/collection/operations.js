import actions from "./actions";
import items from "../../utils/collection.json";
import axios from "axios";

const fetchData = () => async (dispatch) => {
  try {
    dispatch(actions.fetchCollectionsPending());
    const fetchedData = await axios.get("http://localhost:3001/fetchCollections");
    dispatch(actions.fetchCollectionsSuccess(fetchedData.data));
  } catch (err) {
    if (err) dispatch(actions.fetchCollectionsFailed({ message: "failed" }));
  }
};



export default {
  fetchData,
};
