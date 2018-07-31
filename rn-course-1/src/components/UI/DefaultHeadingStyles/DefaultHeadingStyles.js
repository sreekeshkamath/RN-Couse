import React from "react";
import { Text, StyleSheet } from "react-native";

const defaultHeadingStyles = props => (
    <Text
        {...props}
        style={[styles.textHeading, props.style]}
    >{props.children}</Text>
);

const styles = StyleSheet.create({
    textHeading : {
        fontSize : 32,
        fontWeight : "bold"
    }
});

export default defaultHeadingStyles;