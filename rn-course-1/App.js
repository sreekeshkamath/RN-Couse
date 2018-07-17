import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
// Register Screens

Navigation.registerComponent("rncourse1.AuthScreen", () => AuthScreen);
Navigation.registerComponent("rncourse1.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("rncourse1.FindPlaceScreen", () => FindPlaceScreen);

// Start a App

Navigation.startSingleScreenApp({
  screen: {
    screen: "rncourse1.AuthScreen",
    title: "Login",
  }
});

