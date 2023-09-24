import React from "react";
import "./common.css";
import KendoButton from "../../components/button/ButtonComponent";
import DropZone from "../../components/dropzone/DropZone";
import { stage3DataRequest } from "./store/request";
import { ENUM_API_STATUS } from "../../utils/_gConstant";
import { handleAPIErrors } from "../../utils/_gFunctions/_handleAPI";
import { toastSuccess } from "../../components/ui-elements/_Toastify";

const Stage3 = ({ handleNextStep }) => {
  const handleSubmit = async (dataItem) => {
    const res = await stage3DataRequest(dataItem);
    if (res?.data?.status === ENUM_API_STATUS.ERROR) {
      handleAPIErrors(res?.data);
    } else {
      toastSuccess(res?.data?.message);
    }
  };
  return (
    <>
      <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
      <div className="sub-sub-heading" style={{ paddingTop: "1.5rem" }}>
        Lorem ipsum dolor sit amet consectetur. Ac tellus ut quis vel et egestas
        pharetra porta cursus. Arcu dui elit integer arcu{" "}
      </div>
      <div style={{ paddingTop: "1.5rem" }}>
        <KendoButton
          style={{
            padding: "0.75rem 1.25rem",
            textDecoration: "none",
            border: "none",
          }}
        >
          Download Sample{" "}
        </KendoButton>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <DropZone />
      </div>
      <div className="container">
        <KendoButton
          type="submit"
          style={{
            padding: "0.75rem 1.25rem",
            textDecoration: "none",
            border: "none",
            marginRight: "6rem",
          }}
          onClick={handleNextStep}
        >
          Save & Next
        </KendoButton>
      </div>
    </>
  );
};

export default Stage3;
