import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function InputTodo({ placeholder }) {
  const [textInput, setTextInput] = useState("");
  const [submitValue, setSubmitValue] = useState("");

  // const handleSubmit = () => {

  // }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={textInput}
        onChangeText={setTextInput}
        onSubmitEditing={setSubmitValue}
      />
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
    paddingHorizontal: 20,
    width: 270,
    backgroundColor: "#FFF",
    borderRadius: 25,
  },
});
