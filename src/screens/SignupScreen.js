import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        title="Go to SignIn"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      />
      <Button
        title="Go to Man Flow"
        onPress={() => {
          navigation.navigate("mainFlow");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;