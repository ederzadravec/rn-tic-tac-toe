import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { Store } from '../../contexts';

const Container = styled.View`
  margin-top: 20;
  margin-bottom: 20;
  height: 150;
  width: 100%;
`;

export const Score = () => {
  return (
    <Store.Consumer>
      {({ cubeSize, game, start, users }) => {
        return (
          <Container>
            <Text>opa</Text>
            {Object.keys(users).map(user => (
              <Text>{`${users[user].name}: ${users[user].score}`}</Text>
            ))}
          </Container>
        );
      }}
    </Store.Consumer>
  );
};
