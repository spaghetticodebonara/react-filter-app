import React, { Component } from 'react';
import './Children.css';

class Children extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    this.props = { ...nextProps };
  }
  render() {
    if (this.props.users.length > 0) {
      return (
        <ul>
          {this.props.users.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      );
    }
    return <div>No Results!</div>;
  }
}

export default Children;
