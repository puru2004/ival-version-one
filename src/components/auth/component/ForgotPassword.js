import React, { useState } from "react";
import lockImage from "../../../icons/lock_icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setForgotPasswordEmailAction } from "../state/_action";
import { Dialog } from "@progress/kendo-react-dialogs";
import EmailSentVerification from "../../../Pages/modals/EmailSentVerification";
import { loginModalAction } from "../../../state/commonActions/_commonActions";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
});
const initialValues = {
  email: "",
};

const ForgotPassword = ({
  setShowEmailVerification,
  setShowForgotPassword,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const dispatch = useDispatch();

  const toggleDialog = () => {
    setShowEmailVerification(true);
    setShowForgotPassword(false);
  };

  const onClose = () =>{
    setShowForgotPassword(false);
  }

  const formik = useFormik({
    initialValues,

    onSubmit: async (values, { setStatus, setSubmitting }) => {
      dispatch(setForgotPasswordEmailAction(values));

      console.log(values?.email);
      toggleDialog();
    },
  });
  return (
    <div style={{ margin: "32px" }}>
      <div style={{ textAlign: "right" }}>
        <button
          onClick={onClose} // Call the onClose prop when the close button is clicked
          style={{
            // position: "absolute",
            cursor: "pointer",
            color: "#1B3F58", // Change the color as needed
            fontSize: "24px", // Adjust the font size as needed
            backgroundColor:"transparent",
            border:"0px"
          }}
        >
          X {/* You can replace this with a close icon */}
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={lockImage} style={{}} />
      </div>

      <div
        style={{
          fontFamily: "Figtree",
          fontWeight: "600",
          fontSize: "24px",
          color: "#1B3F58",
          textAlign: "center",
          marginTop: "24px",
        }}
      >
        Forget your password?
      </div>
      <div
        style={{
          textAlign: "center",
          fontStyle: "Figtree",
          fontWeight: "500",
          fontSize: "16px",
          color: "#556877",
          marginTop: "10px",
          marginBottom: "24px",
        }}
      >
        Enter the email you signed up with wait for your <br /> recovery details
        to be sent over your email
      </div>
      <form onSubmit={formik.handleSubmit}>
        <label
          style={{
            fontWeight: "600",
            fontSize: "14px",
            color: "#556877",
          }}
        >
          Email
        </label>
        <div className="form-group" style={{ marginTop: "3px" }}>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
            style={{
              height: "48px",
              width: "100%",
              marginBottom: "24px",
              marginLeft: "",
              border: "1px solid #CED4DA",
              background: "#F9F9F9",
              padding: "10px",
            }}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error" style={{ color: "red" }}>
              {formik.errors.email}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            // disabled={loading}
            style={{
              width: "100%",
              height: "50px",
              background: "#F09021",
              border: "none",
              color: "white",
              
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            {"Submit"}
          </button>
        </div>
      </form>
      {showDialog && (
        <Dialog>
          <EmailSentVerification />
        </Dialog>
      )}
    </div>
  );
};

export default ForgotPassword;
