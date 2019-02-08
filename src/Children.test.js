import React from 'react';
import ReactDOM from 'react-dom';
import Children from './Children';

const users = ['Michal', 'Ania', 'Kasia'];
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Children users={users} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
