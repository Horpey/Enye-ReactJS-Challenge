import React, { Component } from 'react';
import { Tag } from 'antd';

export class UserTable extends Component {
  render() {
    return (
      <div className='usertable'>
        <h2 className='textColor'>Form Saved Successfuly</h2>
        <p>Your Details has been saved! </p>
        <p>{this.props.showForm}</p>
        <table className='userTable'>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Birthday</th>
              <th>Age</th>
              <th>Hobby</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userdetails.map(link => (
              <tr key={link.firstName}>
                <td>
                  {link.firstName} {link.lastName}
                </td>
                <td>{link.birthday}</td>
                <td>{link.age}</td>
                <td>
                  {link.hobby.map(hobb => (
                    <Tag color={'purple'} key={hobb}>
                      {hobb}
                    </Tag>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
