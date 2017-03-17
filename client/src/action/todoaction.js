import dispatcher from "../dispatcher/dispatcher.js";

export function createTodo(text){
     dispatcher.dispatch({
           type : "CREATE_TODO",
           text
     })
}
export function deleteTodo(id){
     dispatcher.dispatch({
           type : "DELETE_TODO",
           id
     });
}

/******* Asych function using flux **********/
// export function reloadTodo(){
//      // axios("https://someurl.com/somedataendpoint").then((data) => {
//      //      console.log("got here")
//      // });
//      dispatcher.dispatch({
//            type : "FETCH_TODO",
//       });
//       setTimeout( () => {
//            dispatcher.dispatch({
//                     type : "RECEIVE_TODO",todos :[
//                      {
//                         id : 435345,
//                         name :"lllllllll singh"
//                    },
//                    {
//                      id : 345345345345,
//                      name :"iiiiiiiiiii singh"
//                 }]
//            });
//      },1000)
//
// }
