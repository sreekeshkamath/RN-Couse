import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const defaultButtonStyles = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonStyles}>
            <Text>
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonStyles: {
        margin: 8,
        padding: 8,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 4
    }
});

export default defaultButtonStyles;
