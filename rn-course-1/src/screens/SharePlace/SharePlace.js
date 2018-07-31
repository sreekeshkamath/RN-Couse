import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Button,
    StyleSheet,
    Image
} from "react-native";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { connect } from "react-redux";
import { addPlace, deletePlace } from "../../store/actions/index";
import DefaultInput from "../../components/UI/DefaultInputStyles/DefaultInputStyles";
import DefaultButton from "../../components/UI/DefaultButtonStyles/DefaultButtonStyles";
import DefaultHeading from "../../components/UI/DefaultHeadingStyles/DefaultHeadingStyles";
import previewImage from "../../assets/uncle_sam.jpg";
class SharePlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    };

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };
    render() {
        return (
            // <View>
            //     <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            // </View>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <DefaultHeading style={{ color: "#000" }}>
                            Share a Place With Us
                        </DefaultHeading>
                    </View>
                    <View style={styles.placeHolder}>
                        <Image source = {previewImage} style = {{width: "100%", height: "100%" }} />
                    </View>
                    <DefaultButton>
                        Pick Image
                    </DefaultButton>
                    <View style={styles.placeHolder}>
                        <Text>Map</Text>
                    </View>
                    <DefaultButton>
                        Locate Me
                    </DefaultButton>
                    <DefaultInput style = {{width: "80%"}}>
                        Place Input
                    </DefaultInput>
                    <DefaultButton>
                        Share the place!
                    </DefaultButton>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeHolder: {
        width: "80%",
        height: 150,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName))
    };
};
export default connect(
    null,
    mapDispatchToProps
)(SharePlaceScreen);
