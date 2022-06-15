import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
        />

        <Input
          value={password}
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          onChangeText={setPassword}
          label="Password"
        />
      </Spacer>
      <Spacer>
        {errorMessage ? (
          <Text style={styles.errorsMessage}>{errorMessage}</Text>
        ) : null}
      </Spacer>
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorsMessage: {
    color: "red",
  },
});

export default AuthForm;
