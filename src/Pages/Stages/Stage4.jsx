import * as React from "react";
import * as ReactDOM from "react-dom";
import "./common.css";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { RadioButton,Checkbox  } from "@progress/kendo-react-inputs";
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

const Stage4 = () => {
  const [selectedValue, setSelectedValue] = React.useState("first");
  const handleChange = React.useCallback(
    (e) => {
      setSelectedValue(e.value);
    },
    [setSelectedValue]
  );
  const handleSubmit = async(dataItem) => {
    const res = await stage4DataRequest(dataItem)
    if(res?.data?.status === ENUM_API_STATUS.ERROR){
      handleAPIErrors(res?.data)
    } else {
      toastSuccess(res?.data?.message)
    }
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement style={{ width: "100%", marginBottom: '8rem' }}>
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
              <div className=""style={{display:'flex', width:'100%', paddingTop:'2rem', paddingBottom:'3rem'}}>
                <div style={{ width:'50%'}}>
                <Field
                  id={"Service Charge Flats"}
                  name={"Service Charge Flats"}
                  label={"Service Charge Flats"}
                  component={FormInput}
                  style={{ width: "75%", lineHeight: 2 }}
                />
                </div>
                <div className="class" style={{display:'flex', justifyContent:'end',alignItems:'center',marginLeft:'2rem', flexDirection:'column', width:'50%'}}>
                <Checkbox label={"Unchecked state"} style={{padding:'0.50rem', fontSize:'2rem'}}/>
                <Checkbox label={"Unchecked state"} style={{padding:'0.50rem'}}/>
                </div>

              </div>

              <div style={{ display: 'flex', paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                <KendoButton style={{ padding: "0.75rem 1.25rem", textDecoration: 'none' }}>Download Sample</KendoButton>
                <KendoButton style={{ padding: "0.75rem 1.25rem", textDecoration: 'none' }}>Download Sample</KendoButton>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: "50%",
                    border: "1px solid #CED4DA",
                    backgroundColor: "#F9F9F9",
                    marginRight:'2rem'
                  }}
                >
                  <div style={{ padding: "2rem" }}>
                    <div className="sub-heading"> Plans</div>
                    <div className="sub-sub-heading">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed.
                    </div>
                    <div className="" style={{ display: 'flex', alignItems: 'end' }}>
                      <span style={{ fontSize: '1.25rem', color: 'black' }}> In %</span>
                      <div className="input-wrapper" style={{ marginLeft: '1rem' }}>
                        <Field
                          id={"Service Charge Flats"}
                          name={"Service Charge Flats"}
                          component={FormInput}
                          style={{ width: "100%", lineHeight: 2, margin: '0' }}
                        />
                        <div className="overlay-Step4">%</div>
                      </div>
                      <span style={{ fontSize: '1.25rem', color: 'black', marginLeft: '1rem' }}> In %</span>
                      <span style={{ fontSize: '1.25rem', color: '#F09021', marginLeft: '1rem' }}> Will Reflact Here</span>
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
                    <div className="" style={{ display: 'flex', alignItems: 'end' }}>
                      <span style={{ fontSize: '1.25rem', color: 'black' }}> In %</span>
                      <div className="input-wrapper" style={{ marginLeft: '1rem' }}>
                        <Field
                          id={"Service Charge Flats"}
                          name={"Service Charge Flats"}
                          component={FormInput}
                          style={{ width: "100%", lineHeight: 2, margin: '0' }}
                        />
                        <div className="overlay-Step4">%</div>
                      </div>
                      <span style={{ fontSize: '1.25rem', color: 'black', marginLeft: '1rem' }}> In %</span>
                      <span style={{ fontSize: '1.25rem', color: '#F09021', marginLeft: '1rem' }}> Will Reflact Here</span>
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
                    <div className="" style={{ display: 'flex', alignItems: 'end' }}>
                      <span style={{ fontSize: '1.25rem', color: 'black', }}> In %</span>
                      <div className="input-wrapper" style={{ marginLeft: '1rem' }}>
                        <Field
                          id={"Service Charge Flats"}
                          name={"Service Charge Flats"}
                          component={FormInput}
                          style={{ width: "100%", lineHeight: 2, margin: '0' }}
                        />
                        <div className="overlay-Step4">%</div>
                      </div>
                      <span style={{ fontSize: '1.25rem', color: 'black', marginLeft: '1rem' }}> In %</span>
                      <span style={{ fontSize: '1.25rem', color: '#F09021', marginLeft: '1rem' }}> Will Reflact Here</span>
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
                    <div className="" style={{ display: 'flex', alignItems: 'end' }}>
                      <span style={{ fontSize: '1.25rem', color: 'black', }}> In %</span>
                      <div className="input-wrapper" style={{ marginLeft: '1rem' }}>
                        <Field
                          id={"Service Charge Flats"}
                          name={"Service Charge Flats"}
                          component={FormInput}
                          style={{ width: "100%", lineHeight: 2, margin: '0' }}
                        />
                        <div className="overlay-Step4">%</div>
                      </div>
                      <span style={{ fontSize: '1.25rem', color: 'black', marginLeft: '1rem' }}> In %</span>
                      <span style={{ fontSize: '1.25rem', color: '#F09021', marginLeft: '1rem' }}> Will Reflact Here</span>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </FormElement>
        )}
      />
    </>
  );
};

export default Stage4;
