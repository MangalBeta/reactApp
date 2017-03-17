import React from 'react';
import ReactDOM from 'react-dom';
import AuthStore from '../../stores/AuthStore.js';
import * as AuthAction from '../../action/AuthAction.js';
class Signup extends React.Component {
     constructor(){
          super();
          this.state = {
               users :{
                    name : '',
                    email:'',
                    password:''
               }
          };
     }
     createSignUp(e){
          e.preventDefault();
          let name = this.refs.name.value;
          let email = this.refs.email.value;
          let password = this.refs.password.value;
          let user = {};
          user['name'] = name;
          user['email'] = email;
          user['password'] = password;
          AuthAction.createSignUp(user);
     }

     render() {
          return (
               <div className="container">
                    <h1 className="head1">Hii My Signup  page</h1>
                    <form  onSubmit={this.createSignUp.bind(this)}>
                         <input type="text" className="form-control" placeholder="Name"  ref="name"/>
                         <br/>
                         <input type="email" className="form-control add-todo" placeholder="Email" ref="email" />
                         <br/>
                         <input type="password" className="form-control add-todo" placeholder="Passwword" ref="password"/>
                         <br/>
                         <input type="submit" className="btn btn-success btn-lg" value="Save" />
                    </form>
               </div>
          )
     }

}


module.exports = Signup;
