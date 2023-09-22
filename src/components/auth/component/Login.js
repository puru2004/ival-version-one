import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { login, getUserByToken } from "../core/_request";
import LocalStorageServices from "../../../services/_localStorageServices";
import { useAuth } from "../core/Auth";
import siteConfig from "../../../services/_siteConfig";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUserSuccess } from "../state/_action";
// import { addUserData } from "../../../state/actions/loginActions";
import login_img from "../../../images/Frame91.svg";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Loader } from "@progress/kendo-react-indicators";

import ForgotPassword from "./ForgotPassword";
import {
  loginModalAction,
  forgotPasswordModalAction,
} from "../../../state/commonActions/_commonActions";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = ({ setShowForgotPassword, setShowLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const fPass = useSelector(
    (state) => state?.modalReducer?.isForgotPasswordModal
  );

  const toggleDialog = () => {
    setShowForgotPassword(true);
    setShowLogin(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await login(values.email, values.password);
        saveAuth(auth?.access);
        console.log(auth);

        const { data: user } = await getUserByToken(auth?.access);
        console.log(auth?.access);
        console.log(user);
        setCurrentUser(user);

        if (user?.id) {
          dispatch(fetchAuthUserSuccess(user));
        }

        setLoading(false);
      } catch (error) {
        console.error(error);

        // Handle any other errors, e.g., network issues, server errors, etc.
        saveAuth(undefined);
        setStatus("An error occurred during login");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegisterClick = () => {
    navigate("/signup");
    setShowLogin(false);
  };
  const handleCloseClick = () =>{
    setShowLogin(false)
  }
  return (
    <>
      <div>
        <div>
        <img src={login_img} style={{ width: "100%" }} />
        <button
          className="close-button"
          onClick={handleCloseClick}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            cursor: "pointer",
            color: "White", // Change the color as needed
            fontSize: "24px", // Adjust the font size as needed
            backgroundColor:"transparent",
            border:"0px"
          }}
        >
          X {/* You can replace this with a close icon */}
        </button>
        </div>
      </div>
      <div className="login-container" style={{ margin: "32px" }}>
        <form onSubmit={formik.handleSubmit}>
          <label
            style={{
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "19.6px",
              color: "#556877",
            }}
          >
            Email
          </label>
          <div
            className="form-group"
            style={{ width: "100%", marginTop: "5px" }}
          >
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
                marginBottom: "16px",
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
          </div>
          <label
            style={{
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "19.6px",
              color: "#556877",
            }}
          >
            Password
          </label>
          <div
            className="form-group"
            style={{ width: "100%", marginTop: "5px" }}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
              style={{
                height: "48px",
                width: "100%",
                // marginBottom: "15px",
                marginLeft: "",
                border: "1px solid #CED4DA",
                background: "#F9F9F9",
                padding: "10px",
              }}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error" style={{ color: "red" }}>
                {formik.errors.password}
              </div>
            )}
            <div
              className="forgot-password"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
              }}
              onClick={toggleDialog}
            >
              <div
                to="/forgot-password"
                style={{
                  color: "#F09021",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Forgot Password ?
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{
              width: "100%",
              height: "48px",
              background: "#F09021",
              border: "none",
              color: "white",
              marginTop: "24px",

              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            {loading ? <Loader type={"converging-spinner"} themeColor="white" /> : "Sign In"}
          </button>
        </form>
        <button
          style={{
            width: "100%",
            height: "48px",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
            border: "0px",
            backgroundColor: "transparent",
            color: "#1B3F58",
          }}
          onClick={handleRegisterClick}
        >
          Don’t have an account ?
          <span
            style={{ color: "#F09021", marginLeft: "10px", fontWeight: "600" }}
          >
            Register Now
          </span>
        </button>
      </div>
    </>
  );
};

export default Login;
