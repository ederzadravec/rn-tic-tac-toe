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
  display: flex;
  justify-content: space-between;
  align-content: space-between;
`;

export const Table = () => {
  return (
    <Store.Consumer>
      {({ cubeSize, game }) => {
        return (
          <Content cubeSize={cubeSize}>
            {game.table.map((row, kRow) => 
              row.map((square, kSquare) => (
                <Square key={kRow + kSquare} data={square} pos={[kRow, kSquare]}/>
              ))
            )}
          </Content>
        );
      }}
    </Store.Consumer>
  );
};
