import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
import DefaultInput from "../../components/UI/DefaultInputStyles/DefaultInputStyles";
import DefaultHeading from "../../components/UI/DefaultHeadingStyles/DefaultHeadingStyles";
class AuthScreen extends Component {
    loginHandler = () => {
        startTabs();
    }
    render() {
        return (
            <View style={styles.container}>
                <DefaultHeading>Please Log In</DefaultHeading>
                <Button title="Switch to Login" />
                <View style={styles.inputContainer}>
                    <DefaultInput style = {styles.input} placeholder="Your Email Address" />
                    <DefaultInput placeholder="Password" />
                    <DefaultInput placeholder="Confirm Password" />
                </View>
                <Button title="Submit" onPress={this.loginHandler} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", // Vertical
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        width: "80%"
    }, 
    input: {
        backgroundColor: "#ee3",
    }
});

export default AuthScreen; 
