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
        const {
            data: auth
        } = await login(values.email, values.password);
        saveAuth(auth?.access);
        console.log(auth);
        
        const {
           data: user 
        } = await getUserByToken(auth?.access);
        console.log(auth?.access);
        console.log(user);
        setCurrentUser(user);
        console.log(user.id);
        if(user?.id){
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
    <div className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            {...formik.getFieldProps("password")}
          />
          <button
            type="button"
            className="show-password-button"
            onClick={handleTogglePassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
      <div className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;