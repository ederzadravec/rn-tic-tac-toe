import React from 'react';
import R from 'ramda';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const StoreContext = React.createContext({});

class Provider extends React.PureComponent {
  initGame = () => ({
    users: {
      x: {
        name: 'Player 1',
        key: 'x',
        score: 0,
      },
      o: {
        name: 'Player 2',
        key: 'o',
        score: 0,
      },
    },
    endGame: false,
    winner: null,
    currentUser: null,
    game: null,
  });

  state = {
    cubeSize: width - 40,
    ...this.initGame(),
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

  clear = () => {
    this.setState({
      ...this.initGame(),
    });
  };

  setSquare = ([row, square]) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        currentUser: prevState.currentUser === 'x' ? 'o' : 'x',
        game: {
          table: R.assocPath([row, square], prevState.currentUser, prevState.game.table),
          full: R.assoc(`${row}-${square}`, prevState.currentUser, prevState.game.full),
        },
      };

      const result = this.checkGame(newState);

      return result;
    });
  };

  checkWinner = state => {
    const matchs = [
      // rows
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],

      // columns
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],

      // diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    const {
      users,
      game: { table: game },
    } = state;

    const winner = R.reduceWhile(
      R.isNil,
      (acc, match) => {
        let player = null;
        let count = 0;

        match.forEach(([row, column]) => {
          player = game[row][column];

          if (player) count += player === users.x.key ? 1 : -1;
        });

        return count === 3 || count === -3 ? player : null;
      },
      null,
      matchs
    );

    return winner;
  };

  checkGame = state => {
    const winner = this.checkWinner(state);

    return {
      ...state,
      winner,
      ...this.updateScore(state, winner),
      endGame: !!winner || Object.keys(state.game.full).length === 9,
    };
  };

  updateScore = (state, winner) => {
    if (!winner) return {};

    return {
      users: {
        ...state.users,
        [winner]: {
          ...state.users[winner],
          score: ++state.users[winner].score,
        },
      },
    };
  };

  render() {
    const value = {
      ...this.state,
      start: this.start,
      clear: this.clear,
      setSquare: this.setSquare,
    };

    return <StoreContext.Provider value={value}>{this.props.children}</StoreContext.Provider>;
  }
}

export const Store = {
  Provider,
  Consumer: StoreContext.Consumer,
};
