import { StyleSheet, TextInput, View } from "react-native";

export default function InputTodo({ placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: 200,
    backgroundColor: "#FFF",
  },
});
