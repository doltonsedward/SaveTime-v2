import { FlatList, StyleSheet, Text, View } from "react-native";
import { RECOMENDED_DATA } from "../../config/constant";
import { fontSize } from "../../config/theme";

export default function RecomendedList() {
  return (
    <View>
      <Text style={styles.title}>Recomended</Text>
      <FlatList data={RECOMENDED_DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize - 3,
  },
});
