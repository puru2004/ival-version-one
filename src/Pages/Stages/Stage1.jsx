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
  const formData = useSelector((state) => state.formData?.stageOneFormData);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchData());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    console.log("Data Item stg 1:", e);
    console.log("event");

    if (e?.isValid) {
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
                width:"100%"
              }}
            >
              <Field
                id={"schemeName"}
                name={"schemeName"}
                label={"Scheme name *"}
                placeholder="Enter scheme name"
                component={FormInput}
                validator={nameValidator}
                style={{}}
              />
              <Field
                id={"schemeAddress"}
                name={"schemeAddress"}
                label={"Scheme address"}
                component={FormInput}
                validator={nameValidator}
                placeholder="Enter scheme address"
                style={{ }}
              />
              <Field
                id={"postCode"}
                name={"postCode"}
                label={"Postcode"}
                type={"Postcode"}
                component={FormInput}
                placeholder="Enter postcode"
                style={{ }}
              />
            </div>
            <div
              style={{
                width:"100%",
                paddingTop:"32px"
              }}
            >
              {/* <label className="">Local Authority *</label> */}
              <DropDownList
                name="localAuthority"
                data={lastNameOptions}
                label={"Local Authority"}
                defaultValue={formData.localAuthority} // Set the default selected value
                className="custom-dropdown"
                style={{  }}
              />
            </div>
            <h1 className="heading">Land Ownership</h1>
            <div
              style={{
                display: "flex",
                width:"100%"
              }}
            >
                <DropDownList
                  name="landOwnershipStatus"
                  label={"Land Ownership Status *"}
                  data={booleanOptions}
                  defaultValue={formData.landOwnershipStatus} // Set the default selected value
                  className="custom-dropdown"
                  style={{  }}
                />
              
              
                <DropDownList
                  name="landElectionVAT"
                  label={"Land Election VAT"}
                  data={booleanOptions}
                  defaultValue={booleanOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ }}
                />
             
              
                <DatePicker
                  name="dob"
                  {...datepickerOptions}
                  defaultValue={new Date()} // Set the default selected date
                  className="custom-datepicker"
                  label={"Land Completion/Acquisition Date"} // Add a custom class to the DatePicker
                  style={{ }}
                />
            </div>

            <h1 className="heading">Planning Position</h1>
            <div
              className=""
              style={{
                display: "flex",
              }}
            >
                <DropDownList
                  name="planningStatus"
                  label={"Planning Status"}
                  data={booleanOptions}
                  defaultValue={booleanOptions[0]} // Set the default selected value
                  // className="custom-dropdown"
                  style={{  }}
                />
              

              <Field
                id={"planningLink"}
                name={"planningLink"}
                label={"Planning Link(if applicable)"}
                // mask={"(999) 000-00-00-00"}
                component={FormMaskedTextBox}
                // validator={phoneValidator}
                style={{ }}
              />
              <Field
                id={"planningReference"}
                name={"planningReference"}
                label={"Planning Reference"}
                type={"text"}
                component={FormInput}
                // validator={emailValidator}
                style={{ }}
              />
            </div>
              <div style={{marginTop:"32px"}}>
              <DatePicker
              label={"RMA/Detailed Planning *"}
                name="detailedPlanning"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ }}
              />
             </div>

            <h1 className="heading">Programme</h1>
            <div
              className=""
              style={{
                display: "flex",
              }}
            >
              
                
                <DatePicker
                  name="dob"
                  label={"Start On Site *"}
                  {...datepickerOptions}
                  defaultValue={new Date()} // Set the default selected date
                 
                  style={{  }}
                />
                <DatePicker
                  name="dob"
                  label={"GB Date *"}
                  {...datepickerOptions}
                  defaultValue={new Date()} // Set the default selected date
                  
                />
                <DatePicker
                  name="dob"
                  label={"First Handover *"}
                  {...datepickerOptions}
                  defaultValue={new Date()} // Set the default selected date
                  
                  style={{  }}
                />
               
                <DatePicker
                  name="dob"
                  label={"Last Handover *"}
                  {...datepickerOptions}
                  defaultValue={new Date()} // Set the default selected date
                  style={{  }}
                />
            </div>
              <div style={{marginTop:"32px"}}>
            <Field
              id={"rateOfDelivery"}
              name={"rateOfDelivery"}
              label={"Rate of Delivery *"}
              type={"text"}
              component={FormInput}
              // validator={emailValidator}
              style={{ width: "250px", lineHeight: 2 }}
            />
            </div>
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
