import { FlatList, Text, View } from "react-native";
import { SLIDER_DATA } from "../config/constant";

export default function HeaderSlide() {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
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
