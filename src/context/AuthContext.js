import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {
        ...state,
        errorsMessage: action.payload,
      };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign in
    //Handle success
    // Handle failure by showing some error message
  };
};

const signout = (dispatch) => {
  // Somehow Sign out
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signout, signin, signup },
  { isSignedIn: false }
);
