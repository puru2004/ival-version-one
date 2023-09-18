import React, { useState } from "react";
import background from "../../../images/signup_background.jpeg";
import { Button } from "@progress/kendo-react-buttons";
import * as ReactDOM from "react-dom";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
// import { Button } from "@progress/kendo-react-buttons";
import { Checkbox } from "@progress/kendo-react-inputs";
import {
  FormDatePicker,
  FormNumericTextBox,
  FormInput,
  FormCheckbox,
  FormMaskedTextBox,
  FormTextArea,
} from "../../forminput/form-components";
import {
  termsValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
  guestsValidator,
  nightsValidator,
  arrivalDateValidator,
  checkboxValidator,
} from "../../forminput/validator";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { signupRequest } from "../core/_request";
import { ENUM_API_STATUS } from "../../../utils/_gConstant";
import { handleAPIErrors } from "../../../utils/_gFunctions/_handleAPI";
import { toastSuccess } from "../../ui-elements/_Toastify";
import { Dialog } from "@progress/kendo-react-dialogs";

const Singup = () => {
  const [showDialog , setShowDialog] = useState(false);

  const openDialog = () =>{
    setShowDialog(true);
  }

  const closeDialog = () =>{
    setShowDialog(false);
  }
  const navigate = useNavigate();
  // const handleLoginClick = () => {
  //   navigate("/login");
  // };
  const handleSubmit = async (dataItem) => {
    const res = await signupRequest(dataItem);
    if (res?.data?.status === ENUM_API_STATUS.ERROR) {
      handleAPIErrors(res?.data);
    } else {
      toastSuccess(res?.data?.message);
    }
  };
  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "930px" }}>
        <div
          style={{
            width: "50%",
            backgroundImage: "../../../images/signup_background.jpeg",
            height: "100%",
          }}
        >
          <img
            src={background}
            style={{ width: "100%", height: "930px" }}
          ></img>
        </div>
        <div style={{ width: "50%", marginTop: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "1rem",
                font: "Figtree",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Already have an account ?
            </div>
            <div style={{ marginRight: "6rem" }}>
              <Button
                style={{
                  height: "40px",
                  width: "91px",
                  background: "#F09021",
                  border: "none",
                  color: "white",
                }}
                onClick={openDialog}
              >
                Login
              </Button>
              {showDialog && (
                <Dialog
                onClose={closeDialog} >
                <Login/>
              </Dialog>
              )}
              
            </div>
          </div>
          <div
            style={{
              marginRight: "5rem",
              marginLeft: "6rem",
              marginTop: "4rem",
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
                fontWeight: "600",
                fontSize: "32px",
                fontStyle: "Figtree",
                color: "#1B3F58",
                lineHeight: "44.8px",
              }}
            >
              Register for your <span style={{ color: "#F09021" }}>FREE</span>{" "}
              ival account
            </div>
            <div
              style={{
                fontStyle: "Figtree",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "25.2px",
              }}
            >
              All new accounts must be validated and you will receive an email
              to confirm your registration
            </div>
          </div>
          <div
            style={{
              marginRight: "6rem",
              marginLeft: "6rem",
              marginTop: "3rem",
            }}
          >
            <Form
              onSubmit={handleSubmit}
              render={(formRenderProps) => (
                <FormElement
                  style={
                    {
                      // width: 400,
                    }
                  }
                >
                  <fieldset className={"k-form-fieldset"}>
                    <label
                      style={{
                        fontSize: "14px",
                        fontStyle: "Figtree",
                        fontWeight: "600",
                        lineHeight: "19.6px",
                      }}
                    >
                      Full Name
                    </label>
                    <Field
                      id={"name"}
                      name={"name"}
                      component={FormInput}
                      // validator={nameValidator}
                      style={{ height: "48px", marginBottom: "1rem" }}
                    />

                    <label
                      style={{
                        fontSize: "14px",
                        fontStyle: "Figtree",
                        fontWeight: "600",
                        lineHeight: "19.6px",
                      }}
                    >
                      Email
                    </label>
                    <Field
                      id={"email"}
                      name={"email"}
                      type={"email"}
                      component={FormInput}
                      validator={emailValidator}
                      style={{ height: "48px", marginBottom: "1rem" }}
                    />
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "50%", marginRight: "1rem" }}>
                        <label
                          style={{
                            fontSize: "14px",
                            fontStyle: "Figtree",
                            fontWeight: "600",
                            lineHeight: "19.6px",
                          }}
                        >
                          Create Password
                        </label>
                        <Field
                          id={"createPassowrd"}
                          name={"createPassowrd"}
                          // label={"Create Passowrd"}
                          component={FormInput}
                          // validator={nameValidator}
                          style={{ height: "48px", marginBottom: "1rem" }}
                        />
                      </div>
                      <div style={{ width: "50%" }}>
                        <label
                          style={{
                            fontSize: "14px",
                            fontStyle: "Figtree",
                            fontWeight: "600",
                            lineHeight: "19.6px",
                          }}
                        >
                          Confirm Password
                        </label>
                        <Field
                          id={"confirmPassword"}
                          name={"confirmPassword"}
                          component={FormInput}
                          // validator={nameValidator}
                          style={{ height: "48px", marginBottom: "1rem" }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "50%", marginRight: "1rem" }}>
                        <label
                          style={{
                            fontSize: "14px",
                            fontStyle: "Figtree",
                            fontWeight: "600",
                            lineHeight: "19.6px",
                          }}
                        >
                          Phone Number
                        </label>
                        <Field
                          id={"phoneNumber"}
                          name={"phoneNumber"}
                          mask={"(999) 000-00-00-00"}
                          component={FormMaskedTextBox}
                          validator={phoneValidator}
                          style={{ height: "48px", marginBottom: "1rem" }}
                        />
                      </div>
                      <div style={{ width: "50%" }}>
                        <label
                          style={{
                            fontSize: "14px",
                            fontStyle: "Figtree",
                            fontWeight: "600",
                            lineHeight: "19.6px",
                          }}
                        >
                          Job Title
                        </label>
                        <Field
                          id={"jobTitle"}
                          name={"jobTitle"}
                          component={FormInput}
                          // validator={nameValidator}
                          style={{ height: "48px", marginBottom: "1rem" }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "50%", marginRight: "1rem" }}>
                        <label
                          style={{
                            fontSize: "14px",
                            fontStyle: "Figtree",
                            fontWeight: "600",
                            lineHeight: "19.6px",
                          }}
                        >
                          Developer Name
                        </label>
                        <Field
                          id={"developer_Name"}
                          name={"developer_Name"}
                          component={FormInput}
                          // validator={nameValidator}
                          style={{ height: "48px", marginBottom: "1rem" }}
                        />
                      </div>
                      <div style={{ width: "50%" }}>
                        <label
                          style={{
                            fontSize: "14px",
                            fontStyle: "Figtree",
                            fontWeight: "600",
                            lineHeight: "19.6px",
                          }}
                        >
                          Region
                        </label>
                        <Field
                          id={"region"}
                          name={"region"}
                          component={FormInput}
                          // validator={nameValidator}
                          style={{ height: "48px", marginBottom: "1rem" }}
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: "2rem" }}>
                      <Field
                        id={"terms"}
                        name={"terms"}
                        label={"I agree with terms and conditions"}
                        component={FormCheckbox}
                        validator={checkboxValidator}
                        kendo-checkbox-border={"#F09021"}
                      />
                    </div>
                    <div className="k-form-buttons" style={{ width: "100%" }}>
                      <Button
                        themeColor={"orange"}
                        type={"submit"}
                        disabled={!formRenderProps.allowSubmit}
                        style={{
                          width: "100%",
                          height: "50px",
                          background: "#F09021",
                          border: "none",
                          color: "white",
                        }}
                      >
                        Register you account
                      </Button>
                    </div>
                  </fieldset>
                </FormElement>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
