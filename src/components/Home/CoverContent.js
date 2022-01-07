import { StyleSheet, Text, View } from "react-native";

const boxWidth = 500;

export default function CoverContent() {
  return (
    <View style={styles.container}>
      <Text>Make your life simple</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
  },
});
