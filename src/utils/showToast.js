import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";

const showToast = (text) => {
  return toast(text, {
    position: toast.POSITION.TOP_CENTER,
    className: css({
      background: "white !important",
      color: "blue",
      textAlign: "center",
      fontSize: "2rem",
    }),
  });
};
export default showToast;
