import React from "react";
import sent_icon from "../../icons/sent.svg";
import { useSelector } from "react-redux";

const EmailSentVerification = ({ setShowEmailVerification, setShowLogin }) => {
  const forgot_mail = useSelector(
    (state) => state.authReducer.forgotPassword?.email
  );
  console.log(forgot_mail);
  const toggleDialog = () => {
    setShowLogin(true);
    setShowEmailVerification(false);
  };

  const secondbuttonStyle = {
    color: "#1B3F58",
    fontFamily: "Figtree",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    backgroundColor: "transparent",
    border: "0px",
    width: "100%",
    height: "50px",
    /* 133.333% */
  };

  return (
    <>
      <div style={{ margin: "32px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={sent_icon} />
        </div>

        <div
          style={{
            fontFamily: "Figtree",
            fontWeight: "600",
            fontSize: "24px",
            color: "#1B3F58",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          Mail sent successfully !
        </div>
        <div
          style={{
            textAlign: "center",
            fontStyle: "Figtree",
            fontWeight: "500",
            fontSize: "16px",
            color: "#556877",
            marginTop: "12px",
          }}
        >
          Instruction to rest password have been sent to
        </div>
        <div
          style={{
            textAlign: "center",
            color: "#F09021",
            fontWeight: "500",
            marginBottom: "32px",
            fontSize:"16px"
          }}
        >
          {forgot_mail}
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
            fontWeight: "700",
            fontSize: "18px",
          }}
          onClick={toggleDialog}
        >
          Back to Login
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          style={secondbuttonStyle}
          onClick={toggleDialog}
        >
          Haven’t received yet ? Send it again !
        </button>
      </div>
    </>
  );
};

export default EmailSentVerification;
