import React from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const StoreContext = React.createContext({});

class Provider extends React.Component {
  state = {
    cubeSize: width - 40,
    users: {
      x: {
        name: 'Zadravec',
      },
      o: {
        name: 'Eder',
      },
    },
    currentUser: 0,
    game: {
      table: ['', '', '', '', '', '', '', '', ''],
    },
  };

  start = ({ users }) => {
    this.setState({
      users,
      currentUser: 0,
      game: {
        table: [['', '', ''], ['', '', ''], ['', '', '']],
      },
    });
  };

  render() {
    const value = {
      ...this.state,
      setStore: this.set,
    };

    return <StoreContext.Provider value={value}>{this.props.children}</StoreContext.Provider>;
  }
}

export const Store = {
  Provider,
  Consumer: StoreContext.Consumer,
};
