import React from "react";
import Popup from "../Popup";
import { Button } from "react-bootstrap";
import "./deletePopup.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { deleteCollectionEndpoint } from "../../apiConfig";
import showToast from "../../utils/showToast";
import { useDispatch } from "react-redux";
import { _collections } from "../../redux/collection";

const DeletePopup = ({ closePopup, collectionId }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    axios.get(deleteCollectionEndpoint + collectionId).then((response) => {
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
          Delete
        </Button>
      </div>
    </Popup>
  );
};

export default withRouter(DeletePopup);
