const uri = "https://collection-server.herokuapp.com/";
const michalUri = "https://collect-backend.mikart.dev/";
const devUri = "http://localhost:3000/";

const fetchCollectionsEndpoint = michalUri + "get/collections";
const createItemEndpoint = michalUri + "add/entry";
const createCollectionEndpoint = michalUri + "add/collection";
const fetchItemsEndpoint = michalUri + "get/all/entries";
const fetchCollectionItemsEndpoint = michalUri + "get/entries?collectionId=";
const deleteCollectionEndpoint = michalUri + "remove/collection";
const deleteItemEndpoint = devUri + "deleteItem?itemId=";
const editItemEndpoint = devUri + "editItem";
const editCollectionEndpoint = michalUri + "update/collection";
const createCustomItemEndpoint = michalUri + "add/entry/custom";

export {
  fetchCollectionsEndpoint,
  createItemEndpoint,
  createCollectionEndpoint,
  fetchItemsEndpoint,
  fetchCollectionItemsEndpoint,
  deleteCollectionEndpoint,
  deleteItemEndpoint,
  editItemEndpoint,
  editCollectionEndpoint,
  createCustomItemEndpoint,
};
