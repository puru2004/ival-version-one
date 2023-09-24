import { FC } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./_toast.css";

function toastErrors(errors) {
  const errorValues = Object.values(errors);
  const flattenedErrors = errorValues?.flat();

  if (flattenedErrors?.length === 0) {
    return;
  }

  flattenedErrors?.forEach((message) => toast?.error(message));
}

function toastError(message) {
  toast?.error(message, { autoClose: 30000 });
}

function toastWarning(message) {
  toast?.warning(message, { autoClose: 3000 });
}

function toastInfo(message) {
  toast?.info(message, { autoClose: 2000 });
}

function toastSuccess(message) {
  toast?.success(message, {
    className: "toast-success"
  });
}

const Tostify = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export {
  Tostify,
  toastErrors,
  toastSuccess,
  toastInfo,
  toastWarning,
  toastError
};
