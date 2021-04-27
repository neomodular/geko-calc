import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const InputNumberBtn = ({ number, pressingOptions }) => {
  return (
    <TouchableOpacity
      style={
        number == "="
          ? styles.actionEquals
          : number == "clear"
          ? styles.actionClear
          : styles.action
      }
      onPress={() => pressingOptions(number)}
    >
      <Text
        style={
          number == "="
            ? styles.textInputEquals
            : number == "clear"
            ? styles.textInputClear
            : number == "C" ||
              number == "%" ||
              number == "/" ||
              number == "X" ||
              number == "+" ||
              number == "-"
            ? styles.textInputOperators
            : styles.textInput
        }
      >
        {number}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
  },
  actionEquals: {
    flexDirection: "row",
    marginTop: 0,
    backgroundColor: "#009821",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 60,
    height: 60,
    color: "#FFFFFF",
  },
  actionClear: {
    flexDirection: "row",
    marginTop: 0,
    borderColor: "#009821",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    width: 60,
    height: 60,
    color: "#FFFFFF",
  },
  textInput: {
    color: "#A7A7A7",
    height: 36,
    fontSize: 30,
  },
  textInputEquals: {
    color: "#FFFFFF",
    height: 36,
    fontSize: 30,
  },
  textInputClear: {
    color: "#009821",
    height: 36,
    fontSize: 13,
    paddingTop: 10,
  },
  textInputOperators: {
    color: "#009821",
    height: 36,
    fontSize: 30,
  },
});

export default InputNumberBtn;
