import actions from "./actions";
import items from "../../utils/items.json";

const fetchData = () => (dispatch) => {
  try {
    dispatch(actions.FETCH_ALLITEMS_PENDING());
    const fetchedData = items.items;
    console.log(fetchedData);
    if (fetchedData) dispatch(actions.FETCH_ALLITEMS_SUCCESS(fetchedData));
  } catch (err) {
    if (err) dispatch(actions.FETCH_ALLITEMS_FAILED());
  }
};

export default {
  fetchData,
};
