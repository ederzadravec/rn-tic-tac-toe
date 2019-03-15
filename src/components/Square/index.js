import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

import { Store } from '../../contexts';

const Container = styled.View`
  width: ${({ cubeSize }) => cubeSize / 3 - 2};
  height: ${({ cubeSize }) => cubeSize / 3 - 2 };
  padding-vertical: 5;
  padding-horizontal: 5;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 5;
  background-color: #eceff1;
`

const Item = styled.Text`
  font-size: 55;
  color: ${({ value }) => value === 'x' ? '#0095a8': '#4d2c91'};
`;

export const Square = ({ data, onPress, pos }) => {
  return (
    <Store.Consumer>
      {({ cubeSize, users, setSquare }) => {
        const value = data ? users[data].key : '';

        return (
          <TouchableOpacity onPress={() => !value && setSquare(pos)}>
            <Container cubeSize={cubeSize}>
              <Content>
                <Item value={value}>{value}</Item>
              </Content>
            </Container>
          </TouchableOpacity>
        );
      }}
    </Store.Consumer>
  );
};
