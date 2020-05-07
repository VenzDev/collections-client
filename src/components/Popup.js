import React from "react";

const Popup = (props) => {
  return (
    <div
      style={{
        top: "0",
        left: "0",
        position: "fixed",
        zIndex: "100",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0, .4)",
      }}
    >
      {props.children}
    </div>
  );
};

export default Popup;
