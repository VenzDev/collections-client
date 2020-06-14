const uri = "https://collection-server.herokuapp.com/";
const michalUri = "https://collect-backend.mikart.dev/";
const devUri = "http://localhost:3000/";

const fetchCollectionsEndpoint = michalUri + "api/Collections"; //working
const createItemEndpoint = michalUri + "add/entry";
const createCollectionEndpoint = michalUri + "api/Collections"; //working
const fetchItemsEndpoint = michalUri + "get/all/entries";
const fetchCollectionItemsEndpoint = michalUri + "get/entries?collectionId=";
const deleteCollectionEndpoint = michalUri + "api/Collections/"; //working
const deleteItemEndpoint = devUri + "deleteItem?itemId=";
const editItemEndpoint = devUri + "editItem";
const editCollectionEndpoint = michalUri + "api/Collections";
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
