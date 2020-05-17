import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      type="Puff"
      color="blue"
    />
  );
};

export default Spinner;
