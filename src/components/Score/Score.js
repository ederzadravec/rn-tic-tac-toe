import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { Store } from '../../contexts';

const Container = styled.View`
  margin-top: 20;
  margin-bottom: 20;
  height: 150;
  background: blue;
  width: 100%;
`;

export const Score = () => {
  return (
    <Store.Consumer>
      {({ cubeSize, game, start }) => {
        return (
          <Container>
            <Text>opa</Text>
          </Container>
        );
      }}
    </Store.Consumer>
  );
};
