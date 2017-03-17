import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './component/home/home.jsx';
import Login from './component/login/login.jsx';
import Signup from './component/signup/signup.jsx';
import Todo from './component/todo/todo.jsx';
import UserProfile from './component/profile/userprofile.jsx';
import UserProfileEdit from './component/profile/editprofile.jsx';
import { Router, Route, Link, browserHistory, IndexRoute,hashHistory  } from 'react-router'

/***** Protect the route ***************/
const requireAuth = (nextState, replace) => {
     let userToken = JSON.parse(localStorage.getItem('token'));
    if (!userToken) {
        // Redirect to Home page if not an Admin
        replace({ pathname: '/login' })
   }
}
ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Login} />
         <Route path = "/home" component = {Home} onEnter= {requireAuth}/>
         <Route path = "/login" component = {Login} />
         <Route path = "/signup" component = {Signup} />
         <Route path = "/profile/:id" component = {UserProfile} onEnter= {requireAuth} />
            <Route path = "/edit/:id" component = {UserProfileEdit} onEnter= {requireAuth}/>
         <Route path = "/todo" component = {Todo} onEnter= {requireAuth}/>
      </Route>
   </Router>),
      document.getElementById('react-app'));
