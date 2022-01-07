import { StyleSheet, Text, View } from "react-native";
import { HeaderSlide, CoverContent } from "../components/";
import { SPACING } from "../config/theme";

const fontSize = 25;

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose what</Text>
      <Text style={styles.subTitle}>to learn today</Text>
      <HeaderSlide />
      <CoverContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING,
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
