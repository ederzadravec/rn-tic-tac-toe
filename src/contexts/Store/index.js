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
        name: 'Zadravec',
        key: 'x',
      },
      o: {
        name: 'Eder',
        key: 'o',
      },
    },
    currentUser: 'x',
    game: {
      table: [
        ['', '', ''], 
        ['', '', ''], 
        ['', '', '']
      ],
    },
  };

  start = ({ users }) => {
    this.setState({
      users,
      currentUser: 0,
      game: {
        table: R.assocPath(),
      },
    });
  };

  setSquare = ([row, square]) => {
    this.setState(prevState => ({
      currentUser: prevState.currentUser === 'x' ? 'o' : 'x',
      game: { 
        table: R.assocPath([row, square], prevState.currentUser, prevState.game.table), 
      } 
    }))
  }

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
