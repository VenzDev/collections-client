import React from "react";
import Popup from "../Popup";
import { Button } from "react-bootstrap";
import "./deletePopup.scss";

const DeletePopup = ({ closePopup }) => {
  const handleSubmit = () => {};
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

export default DeletePopup;
