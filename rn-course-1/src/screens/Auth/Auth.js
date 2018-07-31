import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    ImageBackground
} from "react-native";
import startTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInputStyles/DefaultInputStyles";
import DefaultHeading from "../../components/UI/DefaultHeadingStyles/DefaultHeadingStyles";
import DefaultButton from "../../components/UI/DefaultButtonStyles/DefaultButtonStyles";
import backgroundImage from "../../assets/bg.jpg";
class AuthScreen extends Component {
    loginHandler = () => {
        startTabs();
    };
    render() {
        return (
            <ImageBackground source = {backgroundImage} style = {styles.imageBackground}>
                <View style={styles.container}>
                    <DefaultHeading>Please Log In</DefaultHeading>
                    <DefaultButton onPress = {() => alert("clicked")}>Switch to Login</DefaultButton>
                    <View style={styles.inputContainer}>
                        <DefaultInput
                            style={styles.input}
                            placeholder="Your Email Address"
                        />
                        <DefaultInput placeholder="Password" />
                        <DefaultInput placeholder="Confirm Password" />
                    </View>
                    <DefaultButton onPress={this.loginHandler} >Submit</DefaultButton>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", // Vertical
        flex: 1,
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#ee3"
    },
    imageBackground: {
        width: "100%",
        flex: 1
    }
});

export default AuthScreen;
