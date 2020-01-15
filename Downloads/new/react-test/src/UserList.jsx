import React from 'react'; // подключаем реакт
import { User } from './User'; // импортируем user

export class UserList extends React.Component { //класс-компонент
  render() {
    const items = this.props.items;
    

    return (
      <table className="user-list">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>sex</th>
          </tr>
        </thead>
        <tbody>
          { items.map(item => <User {...item} />) }
        </tbody>
      </table>
    );
  }
}