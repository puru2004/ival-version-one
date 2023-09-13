const initialState = {
  data: null,
};

function loginReducer(state = initialState, action) {
    console.log('reducer' ,action.payload)
  switch (action.type) {
    case "USER_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default loginReducer;
