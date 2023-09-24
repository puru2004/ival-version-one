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
      <ExternalDropZone
        uploadRef={uploadRef}
        customHint={hint}
        customNote={note}
        style={{
          height: "10rem",
          backgroundColor: "antiquewhite",
          border:'2px dashed #F09021'
        }}
      />
     
      
    </div>
  );
};
export default DropZone;
