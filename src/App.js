import React from 'react';
import './App.css';
import Add from './Add';
import TaskString from './TaskString';
import TodoList from './TodoList';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      text: "",
      counttask: 0,
      donetask:0,
      tasks: []
    }
    this.textchange = this.textchange.bind(this);
    this.add = this.add.bind(this);
    this.trigger = this.trigger.bind(this);
  }
  add(){
    if(this.state.text==""){
      alert("Please input text");
      return;
    }
    this.setState({
        text: "",
        counttask: this.state.counttask+1,
        tasks: this.state.tasks.concat({ name: this.state.text, isdone: false})
    });
  }
  textchange(e){
    this.setState({
      text: e.target.value
  });
  }

  trigger(index,isdone){
    this.setState(state => {
      const list = state.tasks.map((item, j) => {
        if (j === index) {
          if(isdone){
             this.state.donetask= this.state.donetask-1;
          }else{
             this.state.donetask= this.state.donetask+1;
          }
          item.isdone = !item.isdone;
          return item;
        } else {
          return item;
        }
      });
      return {
        list,
      };
    });
}

  render(){
    return (
      <div className="App">
        <Add onbuttonclick={this.add}  ontextchange={this.textchange} text={this.state.text}/>
        <TaskString counttask={this.state.counttask} donetask={this.state.counttask - this.state.donetask}/>
        {this.state.tasks.map((value,index) => 
                <TodoList task={value} trigger={this.trigger} index={index} />
        )}
      </div>
    );
  }
}

export default App;
