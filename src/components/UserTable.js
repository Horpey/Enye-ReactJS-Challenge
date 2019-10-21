import React, { Component } from 'react';
import { Tag } from 'antd';
import { useSelector } from 'react-redux';

export default function UserTable(props) {
  const users = useSelector(state => state.userTable);

  return (
    <div className='usertable'>
      <h2 className='textColor'>Form Saved Successfuly</h2>
      <p>Your Details has been saved! </p>
      <p>{props.showForm}</p>
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
          {users.map(link => (
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
