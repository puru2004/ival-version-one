import React, { useState } from "react";
import lockImage from "../../../icons/lock_icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setForgotPasswordEmailAction } from "../state/_action";
import { Dialog } from "@progress/kendo-react-dialogs";
import EmailSentVerification from "../../../Pages/modals/EmailSentVerification";

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

const ForgotPassword = () => {
  const [showDialog , setShowDialog] = useState(false);

  const openDialog = () =>{
    setShowDialog(true);
  }
  
  const closeDialog = () =>{
    setShowDialog(false);
  }
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    
    onSubmit: async(values,{setStatus, setSubmitting})=>{
      dispatch(setForgotPasswordEmailAction(values))

        console.log(values?.email);
        openDialog();
    }
  });
  return (
    <div style={{ width: "100%" }}>
      <img src={lockImage} style={{ marginLeft: "40%", marginTop: "3%" }} />
      <div
        style={{
          fontFamily: "Figtree",
          fontWeight: "600",
          fontSize: "24px",
          color: "#1B3F58",
          textAlign: "center",
          marginTop: "10px",
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
          marginBottom: "20px",
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
        <div className="form-group" style={{ width: "100%", marginTop: "3px" }}>
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
              marginBottom: "15px",
              marginLeft: "",
              border: "1px solid #CED4DA",
              background: "#F9F9F9",
              padding: "10px",
            }}
          />
          {formik.touched.email && formik.errors.email && (
              <div className="error" style={{color:"red"}}>{formik.errors.email}</div>
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
              marginTop: "5px",
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            {"Submit"}
          </button>
          
        </div>
      </form>
      {showDialog && (
                <Dialog
                onClose={closeDialog} >
                <EmailSentVerification/>
              </Dialog>
              )}
    </div>
  );
};

export default ForgotPassword;
