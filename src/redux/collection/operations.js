import actions from "./actions";
import items from "../../utils/collection.json";

const fetchData = () => (dispatch) => {
  try {
    dispatch(actions.fetchCollectionsPending());
    const fetchedData = items.collections;
    dispatch(actions.fetchCollectionsSuccess(fetchedData));
  } catch (err) {
    if (err) dispatch(actions.fetchCollectionsFailed({ message: "failed" }));
  }
};

export default {
  fetchData,
};
