import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { Inter_900Black } from "@expo-google-fonts/inter";

import Home from "./src/screens/Home";
import Loading from "./src/screens/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Poppins: require("./src/assets/font/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
