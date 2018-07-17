import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const placeDetail = props => {
  return (
    <View>
      <Image />
      <Text />
      <View style={styles.container}>
        <View>
          <Image source={props.selectedPlace.image} style={styles.placeImage} />
          <Text>{props.selectedPlace.name}</Text>
        </View>
        <View>
          {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          {/* <Button title="Close" onPress={props.onModalClosed} /> */}
        </View>
      </View>
    </View>
  );
};

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

export default placeDetail;
