import React, { useState } from "react";
import Popup from "../Popup";
import { Button, Spinner } from "react-bootstrap";
import "./deleteItemPopup.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { deleteItemEndpoint } from "../../apiConfig";
import showToast from "../../utils/showToast";

const DeleteItemPopup = ({ handleClose, itemId, history }) => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    axios.delete(deleteItemEndpoint + itemId).then((response) => {
      if (response.status === 200) {
        showToast("Item deleted Successfully!");
        history.push("/");
      }
    });
  };
  return (
    <Popup>
      <div className="deletePopup">
        <div onClick={handleClose} className="close">
          x
        </div>
        <p>Are you sure you want to delete this Item?</p>
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

export default withRouter(DeleteItemPopup);
