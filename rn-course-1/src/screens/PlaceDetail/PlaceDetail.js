import React, {Component} from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import {deletePlace} from '../../store/actions/index';

import Icon from "react-native-vector-icons/Ionicons";
class PlaceDetail extends Component {
    placeDeletedHandler = () => {
      this.props.onDeletePlace(this.props.selectedPlace.key);
      this.props.navigator.pop();
    }
    render() {
      return (
        <View>
          <Image />
          <Text />
          <View style={styles.container}>
            <View>
              <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
              <Text>{this.props.selectedPlace.name}</Text>
            </View>
            <View>
              {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
              <TouchableOpacity onPress={this.placeDeletedHandler}>
                <View style={styles.deleteButton}>
                  <Icon size={30} name="ios-trash" color="red" />
                </View>
              </TouchableOpacity>
              {/* <Button title="Close" onPress={props.onModalClosed} /> */}
            </View>
          </View>
        </View>
      );
    }
} 
const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};


export default connect(null, mapDispatchToProps) (PlaceDetail);
