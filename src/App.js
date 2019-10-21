import React, { Component } from 'react';
import './App.css';
import Userform from './components/Userform';
import { Provider } from 'react-redux';
import store from './store';

// import { Button } from 'antd';

export class App extends Component {
  state = {
    firstName: 'Adeniran'
  };
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Userform />
        </div>
      </Provider>
    );
  }
}

export default App;
