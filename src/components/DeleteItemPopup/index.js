import React from "react";
import Popup from "../Popup";
import { Button } from "react-bootstrap";
import "./deleteItemPopup.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { deleteItemEndpoint } from "../../apiConfig";
import showToast from "../../utils/showToast";
import { _allItems } from "../../redux/allItems";

const DeleteItemPopup = ({ handleClose, itemId, history }) => {
  const handleSubmit = () => {
    console.log(itemId);
    /*axios.get(deleteItemEndpoint + itemId).then((response) => {
      if (response.status === 200) {
        showToast("Item deleted Successfully!");
        history.push("/");
      }
    });*/
  };
  return (
    <Popup>
      <div className="deletePopup">
        <div onClick={handleClose} className="close">
          x
        </div>
        <p>Are you sure you want to delete this Item?</p>
        <Button onClick={handleSubmit} variant="danger">
          Delete
        </Button>
      </div>
    </Popup>
  );
};

export default withRouter(DeleteItemPopup);
