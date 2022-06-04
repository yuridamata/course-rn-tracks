import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from "../context/AuthContext";
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />

      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorsMessage}
        onSubmit={({ email, password }) => {
          signup({ email, password });
        }}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account? Sign in instead."
        routeName={"Signin"}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 180,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignupScreen;
