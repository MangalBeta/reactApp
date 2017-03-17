import React from 'react';
import ReactDOM from 'react-dom';
import AuthStore from '../../stores/AuthStore.js';
import * as AuthAction from '../../action/AuthAction.js';

class Login extends React.Component {
     constructor(props){
          super(props);
     }

     loginForm(e){
          e.preventDefault();
          let email = this.refs.email.value;
          let password = this.refs.password.value;
          let user = {};
          user['email'] = email;
          user['password'] = password;
          AuthAction.loginForm(user);
     }

     render() {
          return (
               <div className="container">
                    <h1 className="head1">Hii My Login  page</h1>
                    <form  onSubmit={this.loginForm.bind(this)}>
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

module.exports = Login;
