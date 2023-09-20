import { boolean } from "yup";

// actions types
const LOGIN_MODAL = "LOGIN_MODAL";
const FORGOT_PASSWORD_MODAL = "FORGOT_PASSWORD_MODAL";
const EMAIL_SENT_VERIFICATION_MODAL = "EEMAIL_SENT_VERIFICATION_MODAL";

// initail state for the modal

const initailState = {
  isLoginModal: false,
  isForgotPasswordModal: false,
  isEmailSentVerificationModal: false,
};

const modalReducer = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_MODAL:
      return { ...state, isLoginModal: payload };
    case FORGOT_PASSWORD_MODAL:
      return { ...state, isForgotPasswordModal: payload };
    case EMAIL_SENT_VERIFICATION_MODAL:
      return { ...state, isEmailSentVerificationModal: payload };
    default:
      return state;
  }
};

export default modalReducer;
