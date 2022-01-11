import { useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
`;

const Input = styled.TextInput`
  padding: 10px 20px;
  width: 270px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 25px;
`;

export default function InputTodo({ placeholder }) {
  const [textInput, setTextInput] = useState("");
  const [submitValue, setSubmitValue] = useState("");

  // const handleSubmit = () => {

  // }

  return (
    <Container>
      <Input
        placeholder={placeholder}
        value={textInput}
        onChangeText={setTextInput}
        onSubmitEditing={setSubmitValue}
      />
    </Container>
  );
}
