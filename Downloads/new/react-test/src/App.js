import React from 'react';
import './App.css';
import { UserList } from './UserList';

const users = [
  {
    name: 'Dasha',
    age: 18,
    sex: 'female',
  },
  {
    name: 'Masha',
    age: 20,
    sex: 'female',
  }
]

function App() {
  return (
    <div>
      <UserList items={users} />
    </div>
  );
}

export default App;