import { actionTypes } from "./_constant";

export const setStageOneFormData = (formData) => {
  return {
    type: actionTypes.SET_STAGE_ONE_FORM_DATA,
    payload: formData,
  };
};

export const setStageTwoFormData = (formData) => {
  return {
    type: actionTypes.SET_STAGE_TWO_FORM_DATA,
    payload: formData,
  };
};

export const setStageFourFormData = (formData) => {
  return {
    type: actionTypes.SET_STAGE_FOUR_FORM_DATA,
    payload: formData,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();

      dispatch(setStageOneFormData(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

//   export const fetchDataSuccess = (data) => {
//     return {
//       type: 'FETCH_DATA_SUCCESS',
//       payload: data,
//     };
//   };

//   export const fetchDataFailure = (error) => {
//     return {
//       type: 'FETCH_DATA_FAILURE',
//       payload: error,
//     };
//   };

//   export const fetchData = () => {
//     return async (dispatch) => {
//       try {
//         // You can use any API endpoint here
//         const response = await fetch('https://api.example.com/data');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         // Dispatch a success action with the fetched data
//         dispatch(fetchDataSuccess(data));
//       } catch (error) {
//         // Dispatch a failure action if there's an error
//         dispatch(fetchDataFailure(error));
//       }
//     };
//   };
