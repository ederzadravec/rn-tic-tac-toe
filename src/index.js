import React from 'react';
import { Text, Dimensions } from 'react-native';
import styled from 'styled-components';

import { Store } from './contexts';
import { Table, Score, Start, Result } from './components';

const { height, width } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  padding-vertical: 20;
  padding-horizontal: 20;
  width: ${width};
  flex-direction: column;
  align-items: center;
`;

export const Game = () => {
  return (
    <Container>
      <Store.Provider>
        <Score />
        <Store.Consumer>
          {({ game, endGame }) => {
            if (endGame) return <Result />

            if (game) return <Table />;

            return <Start />;
          }}
        </Store.Consumer>
      </Store.Provider>
    </Container>
  );
};
