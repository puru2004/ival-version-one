import * as React from "react";
import * as ReactDOM from "react-dom";
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

const Stage2 = () => {
  const [selectedValue, setSelectedValue] = React.useState("first");
  const handleChange = React.useCallback(
    (e) => {
      setSelectedValue(e.value);
    },
    [setSelectedValue]
  );
  const handleSubmit = async (dataItem) => {
    const res = await stage2DataRequest(dataItem)
    if(res?.data?.status === ENUM_API_STATUS.ERROR){
      handleAPIErrors(res?.data)
    } else {
      toastSuccess(res?.data?.message)
    }
  }
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement style={{ width: "100%" }}>
          <fieldset className={"k-form-fieldset"}>
            <h1 className="heading">Service charge & Ground rent</h1>
            <div className="field-container">
              <div className="input-wrapper">
                <Field
                  id={"Service Charge Flats"}
                  name={"Service Charge Flats"}
                  label={"Service Charge Flats"}
                  component={FormInput}
                  // validator={nameValidator}
                  style={{ width: "100%", lineHeight: 2 }}
                />
                <div className="overlay">per unit per annum</div>
              </div>
              <div className="input-wrapper" style={{ marginLeft: "2rem" }}>
                <Field
                  id={"Estate Charge"}
                  name={"Estate Charge"}
                  label={"Estate Charge"}
                  component={FormInput}
                  // validator={emailValidator}
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
                  <div>First</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="first"
                      checked={selectedValue === "first"}
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
                  <div>Second</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="second"
                      checked={selectedValue === "second"}
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
                  <div>Third</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="third"
                      checked={selectedValue === "third"}
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
                    <div>Fourth</div>
                    <div>
                      <RadioButton
                        name="group1"
                        value="fourth"
                        checked={selectedValue === "fourth"}
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
                  <div>Third</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="third"
                      checked={selectedValue === "third"}
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
                  <div>Third</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="third"
                      checked={selectedValue === "third"}
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
                  <div>Third</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="third"
                      checked={selectedValue === "third"}
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
                  <div>Third</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="third"
                      checked={selectedValue === "third"}
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
                  <div>Third</div>
                  <div>
                    <RadioButton
                      name="group1 #CED4DA"
                      value="third"
                      checked={selectedValue === "third"}
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
                  <div>Third</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="third"
                      checked={selectedValue === "third"}
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
                  <div>Third</div>
                  <div>
                    <RadioButton
                      name="group1"
                      value="third"
                      checked={selectedValue === "third"}
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
                    <DropZone/>
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
                    <DropZone/>
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
                    <DropZone/>
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
                    <DropZone/>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          
        </FormElement>
      )}
    />
  );
};

export default Stage2;
