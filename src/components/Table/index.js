import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import styled from 'styled-components';

import { Store } from '../../contexts';
import { Square } from '../';

const Content = styled.View`
  width: ${({ cubeSize }) => cubeSize};
  height: ${({ cubeSize }) => cubeSize};
  flex-wrap: wrap;
  flex-direction: row;
  background-color: red;
`;

export const Table = () => {
  return (
    <Store.Consumer>
      {({ cubeSize, game }) => {
        return (
          <Content cubeSize={cubeSize}>
            {game.table.map((square, key) => (
              <Square key={key + square} data={square} />
            ))}
          </Content>
        );
      }}
    </Store.Consumer>
  );
};
