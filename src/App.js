import React, { Component } from 'react';
import './App.css';
import Children from './Children';

const users = ['Michal', 'Ania', 'Kasia'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredUsers: users, lastEvent: null };
  }

  render() {
    return (
      <div className="App">
        <input onInput={this.handleChange.bind(this)} />
        <Children users={this.state.filteredUsers} />
      </div>
    );
  }
  handleChange(e) {
    const text = e.currentTarget.value;
    this.setState({ lastEvent: e });
    this.getFilteredUsersForText(text).then(filteredUsers => {
      if (e === this.state.lastEvent) {
        this.setState({ filteredUsers });
      }
    });
  }

  getFilteredUsersForText(text) {
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
        const filteredUsers = users.filter(user =>
          user.toLowerCase().includes(text.toLowerCase()),
        );
        resolve(filteredUsers);
      }, time);
    });
  }
}

export default App;
