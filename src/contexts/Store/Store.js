import React from 'react';
import R from 'ramda';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const StoreContext = React.createContext({});

class Provider extends React.Component {
  state = {
    cubeSize: width - 40,
    users: {
      x: {
        name: 'Player 1',
        key: 'x',
      },
      o: {
        name: 'Player 2',
        key: 'o',
      },
    },
    endGame: false,
    winner: null,
    currentUser: null,
    game: null,
  };

  start = ({ users }) => {
    this.setState({
      endGame: false,
      winner: null,
      currentUser: 'x',
      game: {
        table: [['', '', ''], ['', '', ''], ['', '', '']],
        full: {},
      },
    });
  };

  setSquare = ([row, square]) => {
    this.setState(prevState => {
      const newState = {
        currentUser: prevState.currentUser === 'x' ? 'o' : 'x',
        game: {
          table: R.assocPath([row, square], prevState.currentUser, prevState.game.table),
          full: R.assoc(`${row}-${square}`, prevState.currentUser, prevState.game.full),
        },
      };

      return this.checkGame(newState)
    });
  };

  checkGame = state => {
    return {
      ...state,
      endGame: Object.keys(state.game.full).length === 9,
    }
  };

  render() {
    const value = {
      ...this.state,
      start: this.start,
      setSquare: this.setSquare,
    };

    return <StoreContext.Provider value={value}>{this.props.children}</StoreContext.Provider>;
  }
}

export const Store = {
  Provider,
  Consumer: StoreContext.Consumer,
};
