import { toast } from "react-toastify";
import ApiService from "../../services/_apiservices";
// import {
//   loadingFailedAction,
//   loadingSuccessAction
// } from "../../store/actions/_commonActions";
import { globalConstant } from "../_gConstant/index.js";
import { apiResponse } from "../_gTypes";
import {
  toastError,
  toastErrors
} from "../../components/ui-elements/_Toastify";

export const checkExpirationOfToken = (code) => {
  if (code === 401) return true;
  else return false;
};

export const handleGetDataFromApi = async (url, dispatch) => {
  let res;
  try {
    if (!dispatch) {
      res = await ApiService.get(url);
    } else {
      // dispatch(loadingSuccessAction());
      res = await ApiService.get(url);
      // dispatch(loadingFailedAction());
    }
  } catch (err) {
    console.log(err);
  }

  return res;
};

export const handlePostDataFromApi = async (
  url,
  body,
  dispatch
) => {
  let res;
  try {
    if (!dispatch) {
      res = await ApiService.post(url, body);
    } else {
      // dispatch(loadingSuccessAction());
      res = await ApiService.post(url, body);
      // dispatch(loadingFailedAction());
    }
  } catch (err) {
    console.log(err);
  }

  return res;
};

export const handlePutDataFromApi = async (
  url,
  body,
  dispatch
) => {
  let res;
  try {
    if (!dispatch) {
      res = await ApiService.put(url, body);
    } else {
      // dispatch(loadingSuccessAction());
      res = await ApiService.put(url, body);
      // dispatch(loadingFailedAction());
    }
  } catch (err) {
    console.log(err);
  }

  return res;
};

export const handlePatchDataFromApi = async (
  url,
  body,
  dispatch
) => {
  let res;
  try {
    if (!dispatch) {
      res = await ApiService.patch(url, body);
      console.log(res, "response");
    } else {
      // dispatch(loadingSuccessAction());
      res = await ApiService.patch(url, body);
      // dispatch(loadingFailedAction());
    }
  } catch (err) {
    console.log(err);
  }
  return res;
};
export const handleDeleteDataFromApi = async (url, dispatch) => {
  let res;
  try {
    if (!dispatch) {
      res = await ApiService.delete(url);
    } else {
      // dispatch(loadingSuccessAction());
      res = await ApiService.delete(url);
      // dispatch(loadingFailedAction());
    }
  } catch (err) {
    console.log(err);
  }

  return res;
};

export const handleAPIErrors = (res) => {
  try {
    const { hints, reason } = res;

    if (hints && Object.keys(hints)?.length) {
      toastErrors(hints);
    } else if (reason && reason?.length) {
      toastError(reason);
    } else {
      toastError("INTERNAL_SERVER_ERROR");
    }
  } catch (error) {
    toastError("INTERNAL_SERVER_ERROR");
    console.log(error);
  }
};
