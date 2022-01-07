import { FlatList, StyleSheet, Text, View } from "react-native";
import { SLIDER_DATA } from "../config/constant";
import { BORDER_TRENDY, ITEM_WIDTH, width, SPACING } from "../config/theme";

export default function HeaderSlide() {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
      horizontal
      contentContainerStyle={{
        padding: SPACING,
      }}
      decelerationRate={"fast"}
      renderItem={({ item }) => {
        return (
          <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
            <Text style={{ color: "white" }}>{item.title}</Text>
          </View>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    height: width / 2,
    borderRadius: BORDER_TRENDY,
    margin: 5,
    padding: SPACING,
  },
});
