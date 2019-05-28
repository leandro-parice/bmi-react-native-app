import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Result = styled.View`
  flex: 5;
  background-color: powderblue;
  justify-content: center;
  align-items: center;
`;

export const ResultText = styled.Text`
  font-size: 50px;
  font-weight: bold;
`;

export const Inputs = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: skyblue;
  padding: 15px;
`;

export const Field = styled.TextInput`
  padding: 15px;
  width: 100%;
  background-color: white;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: steelblue;
`;

export const ButtonText = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;
