import React from 'react';
import "./todo.css";
import ToDoStore from '../../stores/todostore.js';
import * as ToDoAction from '../../action/todoaction.js';
class List extends React.Component {
     constructor(){
          super();
     }
deleteToDo(e){
       e.preventDefault();
        console.log(e.target.value)
        ToDoAction.deleteTodo(e.target.value);

     }
 render() {
return (
       <div className="container">
       <li className="ui-state-default">
       <div className="checkbox">
           <label>
             <input type="checkbox" />{this.props.name}</label>
             <label><button className ="btn btn-danger">Edit</button></label>
            <label><button  className ="btn btn-danger"  value ={this.props.id} onClick= {this.deleteToDo.bind(this)} > Delete</button></label>
     </div>
     </li>
      </div>
     );
 }
}
module.exports = List;
