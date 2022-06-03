import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer />
      <Spacer />
      <Input
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
      />
      <Spacer />
      <Input
        value={password}
        autoCapitalize="none"
        secureTextEntry
        autoCorrect={false}
        onChangeText={setPassword}
        label="Password"
      />
      <Spacer />
      <Spacer />
      {state.errorsMessage && (
        <Text style={styles.errorsMessage}>{state.errorsMessage}</Text>
      )}
      <Spacer>
        <Button
          title="Sign Ups"
          onPress={() => {
            signup({ email, password });
          }}
        />
      </Spacer>
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
  errorsMessage: {
    color: "red"
  }
});

export default SignupScreen;
