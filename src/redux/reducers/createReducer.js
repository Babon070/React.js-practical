const initialState = {
  user: null,
};

const createReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE_USER":
      return { user: action };
    case "CREATE_NAME_WITH_GOOGLE":
      return { user: action };
    default:
      return state;
  }
};

export default createReducer;
