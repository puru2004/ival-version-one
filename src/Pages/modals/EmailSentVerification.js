import React from 'react'
import sent_icon from "../../icons/sent.svg";
import { useSelector } from 'react-redux';


const EmailSentVerification = ({setShowEmailVerification ,setShowLogin }) => {
const forgot_mail = useSelector((state) => state.authReducer.forgotPassword?.email);
console.log(forgot_mail)
const toggleDialog = () =>{
  setShowLogin(true);
  setShowEmailVerification(false);
}
  
  return (
    <>
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
        Mail sent successfully !
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
        Instruction to rest password have been sent to 
      </div>
      <div style={{textAlign:"center", color:"#F09021", fontWeight:"500"}}>
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
          marginTop: "20px",
          marginBottom: "20px",
          fontWeight: "700",
          fontSize: "18px",
        }}
        onClick={toggleDialog}
      >
       Back to Login
      </button>

      <div style={{textAlign:"center", fontWeight:"700", fontSize:"18px",marginTop:"7px"}}>
      Haven’t received yet ? Send it again !
      </div>
    </div>
    </>
  )
}

export default EmailSentVerification