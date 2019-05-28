import React, { Component } from "react";

import {
  Container,
  Result,
  ResultText,
  Inputs,
  Field,
  Button,
  ButtonText
} from "./styles";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      resultText: 0
    };

    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate = () => {
    let imc = this.state.peso / (this.state.altura * this.state.altura);

    let state = this.state;
    state.resultText = imc.toFixed(2);
    this.setState(state);
  };

  render() {
    return (
      <Container>
        <Result>
          <ResultText>{this.state.resultText}</ResultText>
        </Result>
        <Inputs>
          <Field
            placeholder="Peso"
            keyboardType="numeric"
            onChangeText={peso => {
              this.setState({ peso: peso });
            }}
          />
          <Field
            placeholder="Altura"
            keyboardType="numeric"
            onChangeText={altura => {
              this.setState({ altura: altura });
            }}
          />
        </Inputs>
        <Button onPress={this.handleCalculate}>
          <ButtonText>Calcular</ButtonText>
        </Button>
      </Container>
    );
  }
}
