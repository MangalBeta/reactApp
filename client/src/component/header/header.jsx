// ************ header classNameNameName *******

import React from 'react';
import { Link,browserHistory } from 'react-router';
import AuthStore from '../../stores/AuthStore.js';
import * as AuthAction from '../../action/AuthAction.js';

class Header extends React.Component {
     constructor(props){
          super(props)
          this.state = {
              authenticated: AuthStore.isAuthenticated()
           }
          this.logout = this.logout.bind(this);
   }

logout(){
            AuthAction.logoutUser();
            this.setState({authenticated: false});
            browserHistory.replace('/login');
}
render() {
return (
<nav className="navbar  navbar-inverse  navbar-fixed-top">
  <div className="container">
  <button type="button" className="navbar-toggle"
  data-toggle="collapse"
  data-target=".navbar-collapse"
  >
  <span className="sr-only"> Toggle navigation</span>
  <span className="icon-bar"> </span>
  <span className="icon-bar"> </span>
  <span className="icon-bar"> </span>
  </button>
   <Link className="navbar-brand" to="/home"> Bootsnipp</Link>
       <div className="navbar-collapse collapse">
                { this.props.loginStatus ? (
                      <ul className="nav navbar-nav navbar-right">
                        <li> <Link to="/todo">Todo</Link> </li>
                     <li> <Link onClick={this.logout}>Logout</Link> </li>
                     </ul>
                ):(
                     <ul className="nav navbar-nav navbar-right">
               <li className=""><Link to="/signup">Signup</Link> </li>
                     <li> <Link to="/login">login</Link> </li>
          </ul>
                )
               }

       </div>
  </div>
</nav>
          );
     }
}

module.exports = Header;
