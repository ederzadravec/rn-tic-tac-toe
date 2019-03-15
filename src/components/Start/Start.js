import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { Store } from '../../contexts';

const Container = styled.TouchableHighlight`
  width: ${({ cubeSize }) => cubeSize};
  height: ${({ cubeSize }) => cubeSize};
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: ${({ cubeSize }) => cubeSize / 2};
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 1;
  shadow-radius: 5;
`;

const Go = styled.Text`
  font-size: 40;
`;

export const Start = () => {
  return (
    <Store.Consumer>
      {({ start, cubeSize }) => {
        return (
          <Container cubeSize={cubeSize} onPress={start}>
            <Go>Vamos lá!</Go>
          </Container>
        );
      }}
    </Store.Consumer>
  );
};
