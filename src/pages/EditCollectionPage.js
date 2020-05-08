import React from "react";
import { useSelector } from "react-redux";

const EditCollectionPage = (props) => {
  const { collections } = useSelector((state) => state.collectionsReducer);
  const id = props.match.params.id;
  const _currentCollection = collections.filter((collection) => collection.id === id);
  const currentCollection = _currentCollection[0];

  return <div>Todo Collection {currentCollection.name}</div>;
};

export default EditCollectionPage;
