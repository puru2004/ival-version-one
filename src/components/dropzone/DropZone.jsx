import * as React from "react";
import * as ReactDOM from "react-dom";
import "./DropZone.css";
import { ExternalDropZone, Upload } from "@progress/kendo-react-upload";
const uploadRef = React.createRef();
const hint = <span className="drop-zone-upload">Upload</span>;
const note = <span className="drop-zone-text">or drag and drop files here</span>;
const DropZone = () => {
  return (
    <div>
      <ExternalDropZone uploadRef={uploadRef} />
      <div
        style={{
          height: "50px",
        }}
      />
      <Upload
        ref={uploadRef}
        batch={false}
        multiple={true}
        defaultFiles={[]}
        withCredentials={false}
        saveUrl={"https://demos.telerik.com/kendo-ui/service-v4/upload/save"}
        removeUrl={
          "https://demos.telerik.com/kendo-ui/service-v4/upload/remove"
        }
      />
    </div>
  );
};
export default DropZone;
