import React from 'react';
import styled from 'styled-components';

import { Store } from '../../contexts';

const Container = styled.View`
  flex: 1;
  background-color: #aaa;
  justify-content: center;
  align-items: center;
  width: ${({ cubeSize }) => cubeSize / 3};
  height: ${({ cubeSize }) => cubeSize / 3};
  background-color: yellow;
  border-color: black;
  border-width: 1;
`;

const Item = styled.Text`
  font-size: 20;
  color: blue;
`;

export const Square = ({ data }) => {
  return (
    <Store.Consumer>
      {({ cubeSize, users, setSquare }) => {
        const value = data ? users[data] : '';

        return (
          <Container cubeSize={cubeSize}>
            <Item>o</Item>
          </Container>
        );
      }}
    </Store.Consumer>
  );
};
