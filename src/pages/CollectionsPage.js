import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./collectionPageStyle.scss";
import { useSelector, useDispatch } from "react-redux";
import { _collections } from "../redux/collection";
import CollectionCard from "../components/CollectionCard";
import Spinner from "../components/Spinner";

const CollectionsPage = () => {
  const dispatch = useDispatch();
  const { collections, loading } = useSelector((state) => state.collectionsReducer);

  useEffect(() => {
    dispatch(_collections.fetchData());
  }, [dispatch]);
  return loading ? (
    <Spinner />
  ) : (
    <Container>
      <Row className="justify-content-center">
        {collections.length > 0 &&
          collections.map((collection, id) => <CollectionCard collection={collection} key={id} />)}
      </Row>
    </Container>
  );
};

export default CollectionsPage;
