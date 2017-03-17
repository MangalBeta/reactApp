import dispatcher from "../dispatcher/dispatcher.js";

export function createSignUp(user){
     dispatcher.dispatch({
          type: 'CREATE_SIGNUP',
          user
     })
}

export function loginForm(user){
     dispatcher.dispatch({
          type: 'CREATE_LOGIN',
          user
     })
}

export function logoutUser(){
     dispatcher.dispatch({
          type: 'CREATE_LOGOUT'
     })
}
export function deleteUser(id){
     dispatcher.dispatch({
           type : "CREATE_DELETE_USER",
           id
     });
}
export function updateProfile(user){
     dispatcher.dispatch({
           type : "CREATE_UPDATE_USER",
           user
     });
}
