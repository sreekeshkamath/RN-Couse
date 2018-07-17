import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
// Register Screens
const store = configureStore();
Navigation.registerComponent("rncourse1.AuthScreen", () => AuthScreen);
Navigation.registerComponent(
  "rncourse1.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "rncourse1.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "rncourse1.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
// Start a App

Navigation.startSingleScreenApp({
  screen: {
    screen: "rncourse1.AuthScreen",
    title: "Login"
  }
});
