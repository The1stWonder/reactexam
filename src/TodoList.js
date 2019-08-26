import React from 'react';
import './App.css';

function TodoList(props) {
  return (
    <li onClick={() => props.trigger(props.index,props.task.isdone)}>
    { props.task.isdone &&
      <strike>{props.task.name}</strike>
    }
    { !props.task.isdone &&
      <a>{props.task.name}</a>
    }
    </li>
  );
}

export default TodoList;
