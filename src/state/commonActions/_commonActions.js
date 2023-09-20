export const loginModalAction = (data) => ({
    type: 'LOGIN_MODAL',
    payload: data,
});

export const forgotPasswordModalAction = (data) => ({
    type: 'FORGOT_PASSWORD_MODAL',
    payload: data,
});

export const emailSentVerificationModalAction = (data) => ({
    type: 'EMAIL_SENT_VERIFICATION_MODAL',
    payload: data,
})