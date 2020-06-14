const michalUri = "https://collect-backend.mikart.dev/";

const fetchCollectionsEndpoint = michalUri + "api/Collections"; //working
const createItemEndpoint = michalUri + "api/Entries"; //working
const createCollectionEndpoint = michalUri + "api/Collections"; //working
const fetchItemsEndpoint = michalUri + "api/Entries"; //working
const fetchCollectionItemsEndpoint = michalUri + "api/Entries/Collection/";
const deleteCollectionEndpoint = michalUri + "api/Collections/"; //working
const deleteItemEndpoint = michalUri + "api/Entries/"; //working
const editItemEndpoint = michalUri + "api/Entries"; //working
const editCollectionEndpoint = michalUri + "api/Collections"; //working
const createCustomItemEndpoint = michalUri + "api/Entries/custom"; //working

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
