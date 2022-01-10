import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Inter_900Black } from "@expo-google-fonts/inter";

import Home from "./src/screens/Home";
import Loading from "./src/screens/Loading";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  background-color: #e1e2e7;
  height: 100vh;
`;

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Poppins: require("./src/assets/font/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Container>
      <StatusBar style="auto" />
      <Home />
    </Container>
  );
}
