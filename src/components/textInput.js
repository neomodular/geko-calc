import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const TextInputTemplate = ({ placeHolder, secureEntry }) => {
  return (
    <View style={styles.action}>
      <TextInput
        keyboardType="email-address"
        placeholder={placeHolder}
        style={styles.textInput}
        secureTextEntry={secureEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CACACA",
    paddingBottom: 5,
    width: "80%",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    height: 36,
    fontSize: 16,
  },
});

export default TextInputTemplate;
