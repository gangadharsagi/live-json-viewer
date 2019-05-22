import React from 'react';
import { TodoItem } from '../TodoItem';
import { formatText } from '../../helpers/formatText';
import './todo-list.css';

export class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [''],
      inputValue: '',
    };
    this.jsonData = {data:[]};
  }


  // setup the add handler
  addTask = (event) => {
    event.preventDefault();
    var taskArray = this.state.tasks;
    // grab input text value
    var newTaskInput = this.state.inputValue;
    // add new text value to task array
    taskArray.push(newTaskInput);

    this.setState({
      tasks: taskArray,
      inputValue: '',
    });
  };

  // setup the remove handler
  removeTask = (name, i) => {
    var tasks = this.state.tasks.slice();
    // remove task at index
    tasks.splice(i, 1);
    this.jsonData.data[i] = '';
    //update task array
    this.setState({
      tasks,
    });
    this.renderHTML();
  };


  renderHTML = () => {
    var str = JSON.stringify(this.jsonData, undefined, 4);
    document.getElementById('data').innerHTML = formatText(str);
  };

  onChange = (event, index) => {
    this.setState({
      inputValue: event.target.value.replace(/(\r\n|\n|\r)/gm,"<br>"),
    });
    this.jsonData.data[index] = event.target.value.replace(/(\r\n|\n|\r)/gm,"<br>");
    this.renderHTML();
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className='json-viewer'>
        <div className='todo-container'>
          {
            tasks.map((item, index) => {
            return (
              <div
                className={tasks.length === 1 ?
                  'cards disabled' :
                  'cards'
                }>
                  <TodoItem
                    onChange={event => this.onChange(event, index)}
                    addTask={this.addTask}
                    item={item}
                    index={index}
                    removeTodo={this.removeTask}
                    key={item}
                  />
                </div>
            );
          })}
        </div>
        <pre id="data" />
      </div>
    );
  }
}
