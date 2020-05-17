import actions from "./actions";
import axios from "axios";

const fetchData = () => async (dispatch) => {
  try {
    dispatch(actions.FETCH_ALLITEMS_PENDING());
    const fetchedData = await axios.get("http://localhost:3001/fetchItems");
    if (fetchedData) dispatch(actions.FETCH_ALLITEMS_SUCCESS(fetchedData.data));
  } catch (err) {
    if (err) dispatch(actions.FETCH_ALLITEMS_FAILED());
  }
};

export default {
  fetchData,
};
