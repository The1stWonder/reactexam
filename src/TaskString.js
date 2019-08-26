import React from 'react';
import './App.css';

function TaskString(props) {
  return (
    <h2>{props.donetask} remaining out of tasks {props.counttask}</h2>
  );
}

export default TaskString;
