import { StyleSheet, View } from "react-native";

export default function CoverContent() {
  return (
    <View style={styles.container}>
      <Text>Make your life simple</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 500,
  },
});
