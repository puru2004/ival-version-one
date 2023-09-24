import React, { useEffect } from "react";
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
import { stage1DataRequest } from "./store/request";
import { ENUM_API_STATUS } from "../../utils/_gConstant";
import { handleAPIErrors } from "../../utils/_gFunctions/_handleAPI";
import { toastSuccess } from "../../components/ui-elements/_Toastify";
import { useSelector, useDispatch } from "react-redux";
import KendoButton from "../../components/button/ButtonComponent";
import { setStageOneFormData, fetchData } from "./state/_action";

// Define the data for your dropdown options
const lastNameOptions = ["Option 1", "Option 2", "Option 3"];
const booleanOptions = ["Yes", "No"];

// date picker options
const datepickerOptions = {
  format: "dd/MM/yyyy", // Customize the date format as needed
};

const Stage1 = ({ handleNextStep }) => {
  const formData = useSelector((state) => state.formData.stageOneFormData);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchData());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    console.log("Data Item stg 1:", e);
    console.log("event");

    if (e.isValid) {
      const res = await stage1DataRequest(e.values);
      if (res?.data?.status === ENUM_API_STATUS.ERROR) {
        handleAPIErrors(res?.data);
      } else {
        dispatch(setStageOneFormData(e.values));
        toastSuccess(res?.data?.message);
        handleNextStep();
      }
    } else {
      alert("validations error");
    }
  };

  return (
    <Form
      initialValues={{
        schemeName: formData["schemeName"],
        schemeAddress: formData["schemeAddress"],
        rateOfDelivery: formData["rateOfDelivery"],
        detailedPlanning: formData["detailedPlanning"],
        planningReference: formData["planningReference"],
        planningLink: formData["planningLink"],
        planningStatus: formData["planningStatus"],
        landElectionVAT: formData["landElectionVAT"],
        landOwnershipStatus: formData["landOwnershipStatus"],
        postCode: formData["postCode"],
        user: "c013243a-de92-4ec2-b4f6-c8cd9acaaec5",
      }}
      onSubmitClick={() => handleSubmit()}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: "100%",
            marginBottom: "8rem",
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
                id={"schemeName"}
                name={"schemeName"}
                label={"Scheme name *"}
                placeholder="Enter scheme name"
                component={FormInput}
                validator={nameValidator}
                style={{ width: "350px", lineHeight: 2 }}
              />
              <Field
                id={"schemeAddress"}
                name={"schemeAddress"}
                label={"Scheme address"}
                component={FormInput}
                validator={nameValidator}
                placeholder="Enter scheme address"
                style={{ width: "350px", lineHeight: 2 }}
              />
              <Field
                id={"postCode"}
                name={"postCode"}
                label={"Postcode"}
                type={"Postcode"}
                component={FormInput}
                placeholder="Enter postcode"
                style={{ width: "350px", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
              }}
            >
              <label className="">Local Authority *</label>
              <DropDownList
                name="localAuthority"
                data={lastNameOptions}
                defaultValue={formData.localAuthority} // Set the default selected value
                className="custom-dropdown"
                style={{ width: "350px" }}
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
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                }}
              >
                <label className="">Land Ownership Status *</label>
                <DropDownList
                  name="landOwnershipStatus"
                  data={booleanOptions}
                  defaultValue={formData.landOwnershipStatus} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "350px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                }}
              >
                <label className="">Land Election VAT </label>
                <DropDownList
                  name="landElectionVAT"
                  data={booleanOptions}
                  defaultValue={booleanOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "350px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  width: "350px",
                }}
              >
                <label className="">Land Completion/Acquisition Date</label>
                <DatePicker
                  name="dob"
                  {...datepickerOptions}
                  defaultValue={new Date()} // Set the default selected date
                  className="custom-datepicker" // Add a custom class to the DatePicker
                  style={{ width: "350px" }}
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
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                }}
              >
                <label className="">Planning Status</label>
                <DropDownList
                  name="planningStatus"
                  data={booleanOptions}
                  defaultValue={booleanOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "350px" }}
                />
              </div>

              <Field
                id={"planningLink"}
                name={"planningLink"}
                label={"Planning Link(if applicable)"}
                mask={"(999) 000-00-00-00"}
                component={FormMaskedTextBox}
                // validator={phoneValidator}
                style={{ width: "350px" }}
              />
              <Field
                id={"planningReference"}
                name={"planningReference"}
                label={"Planning Reference"}
                type={"text"}
                component={FormInput}
                // validator={emailValidator}
                style={{ width: "350px", lineHeight: 2 }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                width: "350px",
              }}
            >
              <label className="">RMA/Detailed Planning *</label>
              <DatePicker
                name="detailedPlanning"
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
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  width: "250px",
                }}
              >
                <label className="">Start On Site *</label>
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
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  width: "250px",
                }}
              >
                <label className="">GB Date *</label>
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
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  width: "250px",
                }}
              >
                <label className="">First Handover *</label>
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
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  width: "250px",
                }}
              >
                <label className="">Last Handover *</label>
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
              id={"rateOfDelivery"}
              name={"rateOfDelivery"}
              label={"Rate of Delivery *"}
              type={"text"}
              component={FormInput}
              // validator={emailValidator}
              style={{ width: "250px", lineHeight: 2 }}
            />
          </fieldset>
          <div className="container">
            <KendoButton
              type="submit"
              style={{
                padding: "0.75rem 1.25rem",
                textDecoration: "none",
                border: "none",
                marginRight: "6rem",
              }}
              // onClick={handleNextStep}
            >
              Save & Next
            </KendoButton>
          </div>
        </FormElement>
      )}
    />
  );
};

export default Stage1;
