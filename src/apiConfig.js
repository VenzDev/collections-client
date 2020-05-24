const uri = "https://collection-server.herokuapp.com/";

const fetchCollectionsEndpoint = uri + "fetchCollections";
const createItemEndpoint = uri + "createItem";
const createCollectionEndpoint = uri + "createCollection";
const fetchItemsEndpoint = uri + "fetchItems";
const fetchCollectionItemsEndpoint = uri + "fetchCollectionItems?collectionId=";
const deleteCollectionEndpoint = uri + "deleteCollection?collectionId=";
const deleteItemEndpoint = uri + "deleteItem?itemId=";
const editItemEndpoint = uri + "editItem";
const editCollectionEndpoint = uri + "editCollection";

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
