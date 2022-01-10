import { View } from "react-native";
import { InputTodo } from "../components/";
import { fontSize, padding } from "../config/theme";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: ${padding}px;
`;

const Title = styled.Text`
  font-size: ${fontSize}px;
  font-family: ${({ theme }) => theme.main.font};
`;

const Subtitle = styled.Text`
  font-size: ${fontSize}px;
`;

export default function Home() {
  return (
    <Container>
      <View>
        <Title className="title">Save your time</Title>
        <Subtitle>now</Subtitle>
      </View>
      <InputTodo placeholder="Write text here" />
    </Container>
  );
}
