import React from 'react';
import { Text, Dimensions } from 'react-native';
import styled from 'styled-components';

import { Store } from './contexts';
import { Table } from './components';

const { height, width } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  padding-vertical: 20;
  padding-horizontal: 20;
  width: ${width};
  flex-direction: column;
  align-items: center;
`;

const Score = styled.View`
  margin-top: 20;
  margin-bottom: 20;
  height: 150;
  background: blue;
  width: ${width - 20};
`;

export const Game = () => {
  return (
    <Container>
      <Store.Provider>
        <Score>
          <Text>opa</Text>
        </Score>

        <Table />
      </Store.Provider>
    </Container>
  );
};
