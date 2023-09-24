import React, { useState} from "react";
import "./common.css";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { RadioButton, Checkbox } from "@progress/kendo-react-inputs";
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
import { ExternalDropZone, Upload } from "@progress/kendo-react-upload";
import DropZone from "../../components/dropzone/DropZone";
import KendoButton from "../../components/button/ButtonComponent";
import { stage4DataRequest } from "./store/request";
import { ENUM_API_STATUS } from "../../utils/_gConstant";
import { handleAPIErrors } from "../../utils/_gFunctions/_handleAPI";
import { toastSuccess } from "../../components/ui-elements/_Toastify";
import { useSelector, useDispatch } from "react-redux";


const Stage4 = ({handleNextStep}) => {
  const [buttonState, setButtonState] = useState("absolute");
  const formData = useSelector((state) => state.formData.stageTwoFormData);
  const dispatch = useDispatch();

  const handleButtonChange = (e) => {
   const newButtonState = e.target.textContent === "Absolute" ? "absolute" : "percentage";
   setButtonState(newButtonState);
  }

  const handleSubmit = async (dataItem) => {
    const res = await stage4DataRequest(dataItem);
    if (res?.data?.status === ENUM_API_STATUS.ERROR) {
      handleAPIErrors(res?.data);
    } else {
      toastSuccess(res?.data?.message);
      handleNextStep();
    }
  };

  return (
    <>
      <Form
        initialValues={{
          estateCharge: formData["estimateSchemeValue"],
        }}
        onSubmitClick={handleSubmit}
        render={(formRenderProps) => (
          <FormElement style={{ width: "100%", marginBottom: "8rem" }}>
            <fieldset className={"k-form-fieldset"}>
              <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                <div className="heading">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div
                  className="sub-sub-heading"
                  style={{ paddingTop: "1.5rem" }}
                >
                  Lorem ipsum dolor sit amet consectetur. Ac tellus ut quis vel
                  et egestas pharetra porta cursus. Arcu dui elit integer arcu{" "}
                </div>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  width: "100%",
                  paddingTop: "2rem",
                  paddingBottom: "3rem",
                }}
              >
                <div style={{ width: "50%" }}>
                  <Field
                    id={"Estimate Scheme Value"}
                    name={"estimateSchemeValue"}
                    label={"Estimate Scheme Value"}
                    placeholder="Enter here"
                    component={FormInput}
                    style={{ width: "75%", lineHeight: 2 }}
                  />
                </div>
                <div
                  className="class"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    marginLeft: "2rem",
                    flexDirection: "column",
                    width: "50%",
                  }}
                >
                  <Checkbox
                    label={"I confirm the details provided are accurate"}
                    style={{ padding: "0.50rem", fontSize: "2rem" }}
                  />
                  <Checkbox
                    label={"I have read and accept terms and conditions"}
                    style={{ padding: "0.50rem" }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                }}
              >
                <KendoButton
                  onClick={handleButtonChange}
                  style={{ padding: "0.75rem 1.25rem", textDecoration: "none" }}
                >
                  Absolute
                </KendoButton>
                <KendoButton
                onClick={handleButtonChange}
                  style={{ padding: "0.75rem 1.25rem", textDecoration: "none" }}
                >
                  Percentage
                </KendoButton>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: "50%",
                    border: "1px solid #CED4DA",
                    backgroundColor: "#F9F9F9",
                    marginRight: "2rem",
                  }}
                >
                  <div style={{ padding: "2rem" }}>
                    <div className="sub-heading"> Plans</div>
                    <div className="sub-sub-heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed.
                    </div>
                    <div
                      className=""
                      style={{ display: "flex", alignItems: "end" }}
                    >
                      <span style={{ fontSize: "1.25rem", color: "black" }}>
                        In {buttonState === 'absolute' ? "£" : "%"}
                      </span>
                      <div
                        className="input-wrapper"
                        style={{ marginLeft: "1rem" }}
                      >
                        <Field
                          id={"Plans"}
                          name={"plans"}
                          component={FormInput}
                          style={{ width: "100%", lineHeight: 2, margin: "0" }}
                          placeholder={ buttonState === 'absolute' ?  "£££" : "%%%" }
                        />
                        <div className="overlay-Step4">{ buttonState === 'absolute' ?  "£" : "%" }</div>
                      </div>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          color: "black",
                          marginLeft: "1rem",
                        }}
                      >
                        {" "}
                        In {buttonState === 'absolute' ? "%" : "£"}
                      </span>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          color: "#F09021",
                          marginLeft: "1rem",
                        }}
                      >
                        {" "}
                        Will Reflact Here
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "50%",
                    border: "1px solid #CED4DA",
                    backgroundColor: "#F9F9F9",
                  }}
                >
                  <div style={{ padding: "2rem" }}>
                    <div className="sub-heading">Specification</div>
                    <div className="sub-sub-heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed.
                    </div>
                    <div
                      className=""
                      style={{ display: "flex", alignItems: "end" }}
                    >
                      <span style={{ fontSize: "1.25rem", color: "black" }}>
                        {" "}
                        In {buttonState === 'absolute' ? "£" : "%"}
                      </span>
                      <div
                        className="input-wrapper"
                        style={{ marginLeft: "1rem" }}
                      >
                        <Field
                          id={"Specification"}
                          name={"specification"}
                          component={FormInput}
                          style={{ width: "100%", lineHeight: 2, margin: "0" }}
                          placeholder={ buttonState === 'absolute' ?  "£££" : "%%%" }
                        />
                        <div className="overlay-Step4">%</div>
                      </div>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          color: "black",
                          marginLeft: "1rem",
                        }}
                      >
                        {" "}
                        In {buttonState === 'absolute' ? "%" : "£"}
                      </span>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          color: "#F09021",
                          marginLeft: "1rem",
                        }}
                      >
                        {" "}
                        Will Reflect Here
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "4rem",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    marginRight: "2rem",
                    border: "1px solid #CED4DA",
                    backgroundColor: "#F9F9F9",
                  }}
                >
                  <div style={{ padding: "2rem" }}>
                    <div className="sub-heading">S106</div>
                    <div className="sub-sub-heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed.
                    </div>
                    <div
                      className=""
                      style={{ display: "flex", alignItems: "end" }}
                    >
                      <span style={{ fontSize: "1.25rem", color: "black" }}>
                        {" "}
                        In {buttonState === 'absolute' ? "£" : "%"}
                      </span>
                      <div
                        className="input-wrapper"
                        style={{ marginLeft: "1rem" }}
                      >
                        <Field
                          id={"S106"}
                          name={"S106"}
                          component={FormInput}
                          style={{ width: "100%", lineHeight: 2, margin: "0" }}
                          placeholder={ buttonState === 'absolute' ?  "£££" : "%%%" }
                        />
                        <div className="overlay-Step4">{ buttonState === 'absolute' ?  "£" : "%" }</div>
                      </div>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          color: "black",
                          marginLeft: "1rem",
                        }}
                      >
                        {" "}
                        In {buttonState === 'absolute' ? "%" : "£"}
                      </span>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          color: "#F09021",
                          marginLeft: "1rem",
                        }}
                      >
                        {" "}
                        Will Reflect Here
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "50%",
                    border: "1px solid #CED4DA",
                    backgroundColor: "#F9F9F9",
                  }}
                >
                  <div style={{ padding: "2rem" }}>
                    <div className="sub-heading">Detailed Programme</div>
                    <div className="sub-sub-heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed.
                    </div>
                    <div
                      className=""
                      style={{ display: "flex", alignItems: "end" }}
                    >
                      <span style={{ fontSize: "1.25rem", color: "black" }}>
                        {" "}
                        In {buttonState ? "£" : "%"}
                      </span>
                      <div
                        className="input-wrapper"
                        style={{ marginLeft: "1rem" }}
                      >
                        <Field
                          id={"Detailed Programme"}
                          name={"detailedProgramme"}
                          component={FormInput}
                          style={{ width: "100%", lineHeight: 2, margin: "0" }}
                          placeholder={ buttonState === 'absolute' ?  "£££" : "%%%" }
                        />
                        <div className="overlay-Step4">{ buttonState === 'absolute' ?  "£" : "%" }</div>
                      </div>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          color: "black",
                          marginLeft: "1rem",
                        }}
                      >
                        {" "}
                        In {buttonState === 'absolute' ? "%" : "£"}
                      </span>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          color: "#F09021",
                          marginLeft: "1rem",
                        }}
                      >
                        {" "}
                        Will Reflect Here
                      </span>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default Stage4;
