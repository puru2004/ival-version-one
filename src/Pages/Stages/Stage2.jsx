import React, { useState, useEffect } from "react";
import "./common.css";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { RadioButton } from "@progress/kendo-react-inputs";
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
import { stage2DataRequest } from "./store/request";
import { ENUM_API_STATUS } from "../../utils/_gConstant";
import { handleAPIErrors } from "../../utils/_gFunctions/_handleAPI";
import { toastSuccess } from "../../components/ui-elements/_Toastify";
import { useSelector, useDispatch } from "react-redux";
import { setStageTwoFormData } from "./state/_action";
import KendoButton from "../../components/button/ButtonComponent";

const Stage2 = ({ handleNextStep }) => {
  const formData = useSelector((state) => state.formData.stageTwoFormData);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState(
    formData?.radioButton || {
      epcRating: "epcRatingFirst",
      ash: "ashYes",
      pv: "pvFirst",
      zeroCarbon: "zeroCarbonYes",
    }
  );

  console.log("selectedddddd", selectedValue);

  // useEffect(() => {
  //   if (formData?.radioButton.epcRating === "epcRatingFirst")
  //     setSelectedValue(formData.radioButton);
  // }, [formData?.radioButton]);

  const handleChange = (e) => {
    setSelectedValue((prev) => ({ ...prev, [e.target.element.name]: e.value }));
  };

  const handleSubmit = async (dataItem) => {
    console.log("Stg2 data Item:", {
      ...dataItem,
      radioButton: { ...selectedValue },
    });

    const res = await stage2DataRequest(dataItem);
    if (res?.data?.status === ENUM_API_STATUS.ERROR) {
      handleAPIErrors(res?.data);
    } else {
      dispatch(
        setStageTwoFormData({ ...dataItem, radioButton: { ...selectedValue } })
      );
      toastSuccess(res?.data?.message);
      handleNextStep();
    }
  };

  return (
    <Form
      initialValues={{
        estateCharge: formData["estateCharge"],
        serviceChargeFlats: formData["serviceChargeFlats"],
      }}
      onSubmitClick={handleSubmit}
      render={(formRenderProps) => (
        <FormElement style={{ width: "100%" }}>
          <fieldset className={"k-form-fieldset"}>
            <h1 className="heading">Service charge & Ground rent</h1>
            <div className="field-container">
              <div className="input-wrapper">
                <Field
                  id={"Estate Charge"}
                  name={"estateCharge"}
                  label={"Estate Charge"}
                  component={FormInput}
                  placeholder="£££££££"
                  // validator={emailValidator}
                  style={{ width: "100%", lineHeight: 2 }}
                />
                <div className="overlay">per unit per annum</div>
              </div>
              <div className="input-wrapper" style={{ marginLeft: "2rem" }}>
                <Field
                  id={"Service Charge Flats"}
                  name={"serviceChargeFlats"}
                  label={"Service Charge Flats"}
                  component={FormInput}
                  placeholder="£££££££"
                  // validator={nameValidator}
                  style={{ width: "100%", lineHeight: 2 }}
                />
                <div className="overlay">per unit per annum</div>
              </div>
            </div>
            <h1 className="heading">Energy Efficiency</h1>
            <div
              className="field-container"
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div style={{ flexDirection: "coloumn" }}>
                <div>EPC Rating</div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>A</div>
                  <div>
                    <RadioButton
                      name="epcRating"
                      value="epcRatingFirst"
                      checked={selectedValue.epcRating === "epcRatingFirst"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>B</div>
                  <div>
                    <RadioButton
                      name="epcRating"
                      value="epcRatingSecond"
                      checked={selectedValue.epcRating === "epcRatingSecond"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>C</div>
                  <div>
                    <RadioButton
                      name="epcRating"
                      value="epcRatingthird"
                      checked={selectedValue.epcRating === "epcRatingthird"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      border: "1px solid #CED4DA",
                      padding: "10px",
                      width: "15rem",
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <div>D</div>
                    <div>
                      <RadioButton
                        name="epcRating"
                        value="epcRatingFourth"
                        checked={selectedValue.epcRating === "epcRatingFourth"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ flexDirection: "coloumn" }}>
                <div>ASH</div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>Yes</div>
                  <div>
                    <RadioButton
                      name="ash"
                      value="ashYes"
                      checked={selectedValue.ash === "ashYes"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>No</div>
                  <div>
                    <RadioButton
                      name="ash"
                      value="ashNo"
                      checked={selectedValue.ash === "ashNo"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div style={{ flexDirection: "coloumn" }}>
                <div>PV</div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>All</div>
                  <div>
                    <RadioButton
                      name="pv"
                      value="pvFirst"
                      checked={selectedValue.pv === "pvFirst"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>Houses Only</div>
                  <div>
                    <RadioButton
                      name="pv"
                      value="pvSecond"
                      checked={selectedValue.pv === "pvSecond"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>Apts Only</div>
                  <div>
                    <RadioButton
                      // name="pv #CED4DA"
                      name="pv"
                      value="pvThird"
                      checked={selectedValue.pv === "pvThird"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div style={{ flexDirection: "coloumn" }}>
                <div>Zero Carbon</div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>Yes</div>
                  <div>
                    <RadioButton
                      name="zeroCarbon"
                      value="zeroCarbonYes"
                      checked={selectedValue.zeroCarbon === "zeroCarbonYes"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #CED4DA",
                    padding: "10px",
                    width: "15rem",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <div>No</div>
                  <div>
                    <RadioButton
                      name="zeroCarbon"
                      value="zeroCarbonNo"
                      checked={selectedValue.zeroCarbon === "zeroCarbonNo"}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="heading">Additional Information</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "50%",

                  marginRight: "4rem",
                  border: "1px solid #CED4DA",
                  backgroundColor: "#F9F9F9",
                }}
              >
                <div style={{ padding: "2rem" }}>
                  <div className="sub-heading"> Plans</div>
                  <div className="sub-sub-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed.
                  </div>
                  <div className="drop-zone">
                    <DropZone />
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
                  <div className="drop-zone">
                    <DropZone />
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
                  marginRight: "4rem",
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
                  <div className="drop-zone">
                    <DropZone />
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
                  <div className="drop-zone">
                    <DropZone />
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
  );
};

export default Stage2;
