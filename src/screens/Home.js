import { StyleSheet, Text, View } from "react-native";
import { HeaderSlide, CoverContent, InputTodo } from "../components/";
import { fontSize, padding } from "../config/theme";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Save your time</Text>
        <Text style={styles.subTitle}>now</Text>
      </View>
      <InputTodo placeholder="Write text here" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: padding,
    flex: 1,
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
