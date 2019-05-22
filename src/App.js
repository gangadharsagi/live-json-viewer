import React, { Component } from 'react';
import { TodoList } from './components/TodoList/TodoList';

class App extends Component {

  render() {
    return (
      <div className="app container">
        <h1 className='heading'>Live Json Viewer</h1>
          <TodoList />
      </div>
    );
  }
}

export default App;
