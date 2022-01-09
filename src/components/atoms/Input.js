import { TextInput, View } from "react-native";

export default function InputTodo({ placeholder }) {
  return (
    <View>
      <TextInput placeholder={placeholder} />
    </View>
  );
}
