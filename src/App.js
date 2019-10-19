import React, { Component } from 'react';
import './App.css';
import Userform from './components/Userform';

// import { Button } from 'antd';

export class App extends Component {
  state = {
    firstName: 'Adeniran'
  };
  render() {
    return (
      <div className='App'>
        {/* <Button type='primary'>Button</Button> */}
        <Userform />
      </div>
    );
  }
}

export default App;
