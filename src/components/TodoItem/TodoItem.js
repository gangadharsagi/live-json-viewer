import * as React from 'react';
import * as PropTypes from 'prop-types';

export class TodoItem extends React.Component {
  removeItem(item, i) {
    this.props.removeTodo(item, i);
  }

  render() {
    const { onChange, addTask, inputValue, index, item } = this.props;
    return (
      <React.Fragment>
        <textarea
          className={'textArea'}
          onChange={onChange}
          value={inputValue}
        >
        </textarea>
        <div
          className='addButton'
          onClick={addTask}>
          +
        </div>
        <div
          className='removeButton'
          onClick={() => {
            this.removeItem(item, index)
          }}>
          -
        </div>
      </React.Fragment>
    );
  }
}

TodoItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  addTask: PropTypes.func,
  inputValue: PropTypes.string,
  index: PropTypes.number,
  item: PropTypes.string,
};
