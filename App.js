import React from "react";
import { Provider } from "react-redux";
import Navigation from "./src/navigations/navigator";
import store from "./store";
import { SafeAreaView, StyleSheet } from "react-native";

import constants from "./constans";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.topSafeArea} />
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: constants.THEME_COLOR,
  },
});
