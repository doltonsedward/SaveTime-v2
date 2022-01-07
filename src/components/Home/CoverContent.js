import { StyleSheet, View } from "react-native";
import { BORDER_CIRCLE, BOX_HEIGHT } from "../../config/theme";

export default function CoverContent() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: BOX_HEIGHT,
    backgroundColor: "#5447B6",
    borderRadius: BORDER_CIRCLE / 2,
    marginTop: 30,
  },
});
