import React from "react";
import sent_icon from "../../icons/sent.svg";

const verifyEmail = () => {
  return (
    <div style={{ width: "100%" }}>
      <img src={sent_icon} style={{ marginLeft: "40%", marginTop: "3%" }} />
      <div
        style={{
          fontFamily: "Figtree",
          fontWeight: "600",
          fontSize: "24px",
          color: "#1B3F58",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Verifying Your Account
      </div>
      <div
        style={{
          textAlign: "center",
          fontStyle: "Figtree",
          fontWeight: "500",
          fontSize: "16px",
          color: "#556877",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Sociis sed <br /> at imperdiet
        quam. Id molestie gravida etiam nisi
        <br /> suscipit leo nulla id scelerisque.
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{
          width: "100%",
          height: "50px",
          background: "#F09021",
          border: "none",
          color: "white",
          marginTop: "5px",
          marginBottom: "20px",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        Okay, Got It
      </button>
    </div>
  );
};

export default verifyEmail;
