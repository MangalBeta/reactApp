// ************ Container className *******
import React from 'react';
import List from './list.jsx';
import "./todo.css";
import ToDoStore from '../../stores/todostore.js';
import * as ToDoAction from '../../action/todoaction.js';
class Todo extends React.Component {
     constructor(){
          super();
          this.getTodos = this.getTodos.bind(this);
          this.state = {
               todos :ToDoStore.getAll()
          };
     }
     componentWillMount(){
          ToDoStore.on("change",this.getTodos);
          // console.log("count",ToDoStore.listenerCount("change"));
     }
     componentWillUnmount(){
          ToDoStore.removeListener("change",this.getTodos);
     }
     getTodos(){
          this.setState({
               todos :ToDoStore.getAll(),
          });
     }
     createToDo(e){
          e.preventDefault();
          let loginInput = this.refs.myInput;
          ToDoAction.createTodo(loginInput.value);
          loginInput.value = '';
     }

render() {
          const { todos } = this.state;
          const ToDoComponents = todos.map( (todo) => {
               return <List key ={todo.id} {...todo} />
          });
          return (
               <div className="container">
               <h1 className="head1">Todos</h1>
             <form  onSubmit={this.createToDo.bind(this)}>
            <input type="text" className="form-control add-todo" placeholder="Add todo" ref = "myInput" />
              </form>
          <table className="table">
               {ToDoComponents}
          </table>
               </div>
          );
     }
}

module.exports = Todo;
