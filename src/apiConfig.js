const uri = "https://collection-server.herokuapp.com/";
const michalUri = "https://collect-backend.mikart.dev/";
const devUri = "http://localhost:3000/";

const fetchCollectionsEndpoint = michalUri + "get/collections";
const createItemEndpoint = uri + "createItem";
const createCollectionEndpoint = uri + "createCollection";
const fetchItemsEndpoint = uri + "fetchItems";
const fetchCollectionItemsEndpoint = uri + "fetchCollectionItems?collectionId=";
const deleteCollectionEndpoint = devUri + "deleteCollection?collectionId=";
const deleteItemEndpoint = devUri + "deleteItem?itemId=";
const editItemEndpoint = devUri + "editItem";
const editCollectionEndpoint = devUri + "editCollection";

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
};
