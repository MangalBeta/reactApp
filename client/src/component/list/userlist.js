import React from 'react';
import AuthStore from '../../stores/AuthStore.js';
import * as AuthAction from '../../action/AuthAction.js';

class UserList extends React.Component {
     constructor(){
          super();
     }

     render(){
          return (
          <div className="container table-responsive">
                    <h2>User List</h2>
                    <p>List of All the Register Users</p>
<table className="table table-striped table-bordered">
<tr>
<td><b>Sr No</b></td>
<td><b>Name</b></td>
<td><b>Email</b></td>
<td><b>Edit</b></td>
<td><b>Delete</b></td>
</tr>
<tbody>
 {this.props.users}
</tbody>
</table>
</div>
)
}

}

module.exports = UserList;
