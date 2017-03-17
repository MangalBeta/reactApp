// ************ Container className *******
import React from 'react';
import AuthStore from '../../stores/AuthStore.js';
import * as AuthAction from '../../action/AuthAction.js';
import { Link } from 'react-router';
import UserList from '../list/userlist.js';
class Home extends React.Component {
     constructor(props){
          super(props)
          this.getUserList = this.getUserList.bind(this);
          this.state = {
               users: []
          }
     }

     componentDidMount() {
          this.getUserList();
     }

     componentWillMount(){
          AuthStore.addChangeListener(this.getUserList)
     }

     getUserList(){
          AuthStore.userList().then(response => {
               this.setState({
                    users: response.usersArr
               });
          });
     }
     deleteUser(e){
          e.preventDefault();
          //console.log(e.target.value)
          AuthAction.deleteUser(e.target.value);
     }

     render() {
          const { users } = this.state
          const UserComponents = users.map( (user,index) => {
               return  (
                    <tr key={user._id}>
                         <td>{index+1}</td>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td><Link className="btn btn-primary" to={"/edit/"+ user._id}>Edit</Link></td>
                         <td><Link className="btn btn-primary" to={"/profile/"+ user._id}>View</Link></td>
                         <td><button className="btn btn-danger" value ={user.id} onClick= {this.deleteUser.bind(this)}>Delete</button></td>
                    </tr>
               )
          });
          return (
               <div className="center-container">
                    <div className="center-row">
                         <div className="container">
                              <h1 className="head1">Hii Mangal How are you</h1>
                         </div>
                    </div>
                    <UserList  users={UserComponents} />
                    <br/>
                         <br/>     <br/>     <br/>
               </div>
          );
     }
}

module.exports = Home;
