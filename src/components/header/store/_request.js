import {handleGetDataFromApi} from "../../../utils/_gFunctions/_handleAPI"
import {ENUM_API_STATUS} from "../../../utils/_gConstant/index"
import siteConfig from "../../../services/_siteConfig"
import {toastError} from "../../ui-elements/_Toastify"
export const getUserDetails = async (
    id,
    isLoading
) =>{
    let res = await handleGetDataFromApi(
        siteConfig.GET_USER_BY_ACCESSTOKEN_URL,
        isLoading ? isLoading : undefined
    );
    if(res?.data?.status ===ENUM_API_STATUS.ERROR){
        toastError(res?.data?.message);
        return res;
    }
    return res;
}