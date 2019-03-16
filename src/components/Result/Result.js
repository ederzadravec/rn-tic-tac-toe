import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

import { Store } from '../../contexts';

const Container = styled.View`
  width: ${({ cubeSize }) => cubeSize};
  height: ${({ cubeSize }) => cubeSize};
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 1;
  shadow-radius: 5;
`;

const Winner = styled.Text`
  font-size: 40;
`;

const Clear = styled.Text`
  font-size: 40;
`;

const Restart = styled.Text`
  font-size: 40;
`;

export const Result = () => {
  return (
    <Store.Consumer>
      {({ start, clear, cubeSize }) => {
        return (
          <Container cubeSize={cubeSize} onPress={start}>
            <Winner>Vamos lá!</Winner>

            <TouchableHighlight onPress={start}>
              <Restart>Jogar Novamente</Restart>
            </TouchableHighlight>

            <TouchableHighlight onPress={clear}>
              <Restart>Zerar Score</Restart>
            </TouchableHighlight>
          </Container>
        );
      }}
    </Store.Consumer>
  );
};
