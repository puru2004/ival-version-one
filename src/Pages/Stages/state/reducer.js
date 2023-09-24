import { actionTypes } from "./_constant";

const initialState = {
  stageOneFormData: {
    schemeName: "",
    schemeAddress: "",
    rateOfDelivery: null,
    detailedPlanning: null,
    planningReference: null,
    planningLink: null,
    planningStatus: null,
    landElectionVAT: null,
    landOwnershipStatus: "Yes",
    postCode: null,
    localAuthority: "option"
  },
  stageTwoFormData: {
    estateCharge: undefined,
    serviceChargeFlats: undefined,
    radioButton: {
      epcRating: "epcRatingFirst",
      ash: "ashYes",
      pv: "pvFirst",
      zeroCarbon: "zeroCarbonYes",
    },
  },
  stageFourFormData: {
    email: "",
  },
};

export const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STAGE_ONE_FORM_DATA:
      return {
        ...state,
        stageOneFormData: { ...action.payload },
      };

    case "SET_STAGE_TWO_FORM_DATA":
      return {
        ...state,
        stageTwoFormData: { ...action.payload, radioButton: {...action.payload.radioButton} },
      };

    case "SET_STAGE_FOUR_FORM_DATA":
      return {
        ...state,
        stageFourFormData: action.payload,
      };

    default:
      return state;
  }
};
