import { StyleSheet, Text, View } from "react-native";
import { HeaderSlide, CoverContent } from "../components/";
import { fontSize, padding } from "../config/theme";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Save your time</Text>
      <Text style={styles.subTitle}>now</Text>
      <HeaderSlide />
      <CoverContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: padding,
  },
  title: {
    fontSize,
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize,
  },
});
