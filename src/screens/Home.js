import { StyleSheet, Text, View } from "react-native";
import HeaderSlide from "../components/HeaderSlide";

export default function Home() {
  return (
    <View>
      <Text style={styles.title}>Choose what</Text>
      <Text>to learn today</Text>
      <HeaderSlide />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
