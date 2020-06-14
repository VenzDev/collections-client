import React, { useState } from "react";
import Popup from "../Popup";
import { Button, Spinner } from "react-bootstrap";
import "./deletePopup.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { deleteCollectionEndpoint } from "../../apiConfig";
import showToast from "../../utils/showToast";
import { useDispatch } from "react-redux";
import { _collections } from "../../redux/collection";

const DeletePopup = ({ closePopup, collectionId }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    axios.delete(deleteCollectionEndpoint + collectionId).then((response) => {
      if (response.status === 200) {
        showToast("Collection deleted Successfully!");
        dispatch(_collections.fetchData());
      }
    });
  };
  const handleClose = () => closePopup();
  return (
    <Popup>
      <div className="deletePopup">
        <div onClick={handleClose} className="close">
          x
        </div>
        <p>Are you sure you want to delete collection?</p>
        <Button onClick={handleSubmit} variant="danger">
          {isLoading ? "Loading... " : "Delete"}
          {isLoading && (
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          )}
        </Button>
      </div>
    </Popup>
  );
};

export default withRouter(DeletePopup);
