import React, {useEffect } from "react";
import * as ReactDOM from "react-dom";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import {
  FormDatePicker,
  FormNumericTextBox,
  FormInput,
  FormCheckbox,
  FormMaskedTextBox,
  FormTextArea,
} from "../../components/forminput/form-components";
import {
  termsValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
  guestsValidator,
  nightsValidator,
  arrivalDateValidator,
} from "../../components/forminput/validator";
import "./common.css";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { DatePicker } from "@progress/kendo-react-dateinputs";
// import Stage from "./_request"
import { stageDataRequest } from "./store/request";
import { ENUM_API_STATUS } from "../../utils/_gConstant";
import { handleAPIErrors } from "../../utils/_gFunctions/_handleAPI";
import { toastSuccess } from "../../components/ui-elements/_Toastify";
import { useSelector } from "react-redux";

// Define the data for your dropdown options
const lastNameOptions = ["Option 1", "Option 2", "Option 3"];

// date picker options
const datepickerOptions = {
  format: "dd/MM/yyyy", // Customize the date format as needed
};

const Stage1 = () => {
  const handleSubmit = async (dataItem) => {
    const res = await stageDataRequest(dataItem)
    if(res?.data?.status === ENUM_API_STATUS.ERROR){
      handleAPIErrors(res?.data)
    } else {
      toastSuccess(res?.data?.message)
    }
  };
  const data = useSelector((state)=>state.login);
    console.log(data,"redux-check");


  
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: "100%",
            marginBottom:'8rem'
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            <h1 className="heading">Scheme Details</h1>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Field
                id={"Scheme name *"}
                name={"Scheme name *"}
                label={"Scheme name *"}
                component={FormInput}
                // validator={nameValidator}
                style={{ width: "350px", lineHeight: 2 }}
              />
              <Field
                id={"Scheme address"}
                name={"Scheme address"}
                label={"Scheme address"}
                component={FormInput}
                // validator={nameValidator}
                style={{ width: "350px", lineHeight: 2 }}
              />
              <Field
                id={"Postcode"}
                name={"Postcode"}
                label={"Postcode"}
                type={"Postcode"}
                component={FormInput}
                // validator={emailValidator}
                style={{ width: "350px", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem", paddingBottom: "1.5rem",
              }}
            >
              <label className="">Local Authority *</label>
              <DropDownList
                name="Local Authority *"
                data={lastNameOptions}
                defaultValue={lastNameOptions[0]} // Set the default selected value
                className="custom-dropdown"
                style={{ width: "350px", lineHeight: 2 }}
              />
            </div>
            <h1 className="heading">Land Ownership</h1>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "1.5rem", paddingBottom: "1.5rem",
                }}
              >
                <label className="">Land Ownership Status *</label>
                <DropDownList
                  name="Land Ownership Status"
                  data={lastNameOptions}
                  defaultValue={lastNameOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "350px", lineHeight: 2 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "1.5rem", paddingBottom: "1.5rem",
                }}
              >
                <label className="">Land Election VAT </label>
                <DropDownList
                  name="Land Election VAT "
                  data={lastNameOptions}
                  defaultValue={lastNameOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "350px", lineHeight: 2 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "1.5rem", paddingBottom: "1.5rem",
                  width: "350px",
                }}
              >
                <label className="">Land Completion/Acquisition Date</label>
                <DatePicker
                  name="dob"
                  {...datepickerOptions}
                  defaultValue={new Date()} // Set the default selected date
                  className="custom-datepicker" // Add a custom class to the DatePicker
                  style={{ width: "350px", lineHeight: 2 }}
                />
              </div>
            </div>

            <h1 className="heading">Planning Position</h1>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "1.5rem", paddingBottom: "1.5rem",
                }}
              >
                <label className="">Last name</label>
                <DropDownList
                  name="lastName"
                  data={lastNameOptions}
                  defaultValue={lastNameOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "350px", lineHeight: 2 }}
                />
              </div>

              <Field
                id={"phoneNumber"}
                name={"phoneNumber"}
                label={"Phone Number"}
                mask={"(999) 000-00-00-00"}
                component={FormMaskedTextBox}
                validator={phoneValidator}
                style={{ width: "350px", lineHeight: 2 }}
              />
              <Field
                id={"email"}
                name={"email"}
                label={"Email"}
                type={"email"}
                component={FormInput}
                validator={emailValidator}
                style={{ width: "350px", lineHeight: 2 }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem", paddingBottom: "1.5rem",
                width: "350px",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "350px", lineHeight: 2 }}
              />
            </div>


            <h1 className="heading">Programme</h1>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem", paddingBottom: "1.5rem",
                width: "250px",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "250px", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem", paddingBottom: "1.5rem",
                width: "250px",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "250px", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem", paddingBottom: "1.5rem",
                width: "250px",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "250px", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem", paddingBottom: "1.5rem",
                width: "250px",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "250px", lineHeight: 2 }}
              />
            </div>
        
            </div>

            <Field
                id={"email"}
                name={"email"}
                label={"Email"}
                type={"email"}
                component={FormInput}
                validator={emailValidator}
                style={{ width: "250px", lineHeight: 2 }}
              />
          </fieldset>
          <button type="submit"> submit data</button>
          
        </FormElement>
      )}
    />
  );
};

export default Stage1;
