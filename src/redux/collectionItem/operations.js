import actions from "./actions";
import items from "../../utils/items.json";

const fetchData = () => (dispatch) => {
  try {
    dispatch(actions.fetchCollectionItemsPending());
    const fetchedData = items.items;
    dispatch(actions.fetchCollectionItemsSuccess(fetchedData));
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
