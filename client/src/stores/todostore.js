import { EventEmitter } from "events";
import dispatcher  from "../dispatcher/dispatcher.js";
class ToDoStore extends EventEmitter {
     constructor(){
          super();

          this.todos = [
               {
                    id : 111,
                    name :"mangal singh"
               },
               {
                    id : 222,
                    name :"vishesh mangasll"
               },
               {
                    id : 333,
                    name :"rohan fsdf"
               },
               {
                    id : 444,
                    name :"jay"
               }
          ]
     }

     createToDo(text){
          const id = Date.now();
          this.todos.push({
               id:id,
               name:text
          })
          this.emit("change");
     }

     deleteToDo(id){
          Object.keys(this.todos).map( (key, index) => {
               if(this.todos[key].id == id ){
                    this.todos.splice(index,1);
                    this.emit("change");
               }
          });
     }
     getAll(){
          return this.todos;
     }
     /*********** handel All Action ************/
     handleAction(action){
          switch(action.type){
               case "CREATE_TODO" :{
                    this.createToDo(action.text)
               }
               case "DELETE_TODO" :{
                    this.deleteToDo(action.id)
               }
          }

     }
}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
