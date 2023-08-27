import { Button, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function DisableInput() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="First Name"
          underlineColorAndroid="transparent"
          editable={!isDisabled}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Last Name"
          underlineColorAndroid="transparent"
          editable={!isDisabled}
        />
      </View>
      <Button
        title={isDisabled ? "Enable Input" : "Disable Input"}
        onPress={() => setIsDisabled(!isDisabled)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  inputContainer: {
    borderColor: "#000000",
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    height: 45,
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputs: {
    flex: 1,
    padding: 10,
  },
});
