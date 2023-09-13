import { toastError } from "../../../components/ui-elements/_Toastify";
import siteConfig from "../../../services/_siteConfig"
import { ENUM_API_STATUS } from "../../../utils/_gConstant";
import { handlePostDataFromApi } from "../../../utils/_gFunctions/_handleAPI"
// import { apiResponse } from "../../../utils/_gTypes";

export const  stageDataRequest = async (body, isLoading) => {
    try {
        const res  = await handlePostDataFromApi(siteConfig.STAGE1, body, isLoading);
        return res;
    } catch (error) {
        // Handle any errors that occur during the API request
      console.error('Error creating ticket:', error);
      throw error; // Optional: Rethrow the error to the caller
    }
}