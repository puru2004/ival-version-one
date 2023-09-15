// import siteConfig from "../../../services/_apiservices";
import siteConfig from "../../../services/_siteConfig";
import { ENUM_API_STATUS} from "../../../utils/_gConstant/index.js";
import { handlePostDataFromApi } from "../../../utils/_gFunctions/_handleAPI";


export const forgetPasswordRequest = async (body, isLoading) => {
  let res = await handlePostDataFromApi(siteConfig.AUTH + "/forget-password", body, isLoading ? isLoading : undefined);

  if (res.data?.status === ENUM_API_STATUS.ERROR) {
    console.log(res?.data?.message, "toastify");
    return res;
  }

  return res;
};

export const forgetPasswordOTPCheckRequest = async (body, isLoading) => {
  let res = await handlePostDataFromApi(siteConfig.AUTH + "/forget-password/otp", body, isLoading ? isLoading : undefined);

  if (res.data?.status === ENUM_API_STATUS.ERROR) {
    console.log(res?.data?.message, "toastify");
    return res;
  }

  return res;
};

export const passwordResetRequest = async (body, isLoading) => {
  let res = await handlePostDataFromApi(siteConfig.AUTH + "/forgot-password/new-password", body, isLoading ? isLoading : undefined);

  if (res.data?.status === ENUM_API_STATUS.ERROR) {
    console.log(res?.data?.message, "toastify");
    return res;
  }

  return res;
};


