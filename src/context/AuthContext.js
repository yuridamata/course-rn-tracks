import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {
        ...state,
        errorsMessage: action.payload,
      };
    case "signup":
      return { errorsMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
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
  { token: null, errorMessage: "" }
);
