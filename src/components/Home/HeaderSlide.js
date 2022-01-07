import { FlatList, StyleSheet, Text, View } from "react-native";
import { SLIDER_DATA } from "../../config/constant";
import { BORDER_CIRCLE, FONT } from "../../config/theme";

export default function HeaderSlide() {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
      horizontal
      contentContainerStyle={{
        marginTop: 20,
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
    borderRadius: BORDER_CIRCLE,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: FONT,
  },
});
