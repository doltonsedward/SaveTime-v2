import { FlatList, Text, View } from "react-native";

const DATA = [{ id: 1, title: "How to do", color: "lightblue" }];

export default function HeaderSlide() {
  return (
    <FlatList
      data={DATA}
      horizontal
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.title}</Text>
          </View>
        );
      }}
    />
  );
}
