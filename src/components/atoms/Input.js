import { StyleSheet, TextInput, View } from "react-native";

export default function InputTodo({ placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
  },
});
