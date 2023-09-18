import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { login, getUserByToken } from "../core/_request";
import LocalStorageServices from "../../../services/_localStorageServices";
import { useAuth } from "../core/Auth";
import siteConfig from "../../../services/_siteConfig";
import { useDispatch } from "react-redux";
import { fetchAuthUserSuccess } from "../state/_action";
// import { addUserData } from "../../../state/actions/loginActions";
import login_img from "../../../images/Rectangle 79.png";

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

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

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
        console.log(user.id);
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

  return (
    <>
      <div style={{ width: "100%" }}>
        <img src={login_img} style={{ width: "100%" }} />
      </div>
      <div
        className="login-container"
        style={{ marginTop: "2rem", marginLeft: "2rem", marginRight: "2rem" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <label
            style={{
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "19.6px",
            }}
          >
            Email
          </label>
          <div
            className="form-group"
            style={{ width: "100%", marginTop: "3px" }}
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
          </div>
          <label
            style={{
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "19.6px",
            }}
          >
            Password
          </label>
          <div
            className="form-group"
            style={{ width: "100%", marginTop: "3px" }}
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
                marginBottom: "15px",
                marginLeft: "",
                border: "1px solid #CED4DA",
                background: "#F9F9F9",
                padding: "10px",
              }}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error" style={{color:"red"}}>{formik.errors.password}</div>
            )}
            <div
              className="forgot-password"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem",
              }}
            >
              <Link
                to="/forgot-password"
                style={{
                  color: "#F09021",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Forgot Password ?
              </Link>
            </div>
            
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
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
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
      <div
        style={{
          marginRight: "7rem",
          marginLeft: "7rem",
          fontWeight: "500",
          fontSize: "16px",
        }}
      >
        Don’t have an account ?
        <span style={{ color: "#F09021", marginLeft: "10px" }}>
          Register Now
        </span>
      </div>
    </>
  );
};

export default Login;
