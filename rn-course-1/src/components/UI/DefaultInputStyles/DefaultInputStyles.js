import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]} //place it as the last prop after ...props
  />
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1, 
        borderColor: "#000" ,
        padding: 5,
        margin: 8
    }
});

export default defaultInput;
