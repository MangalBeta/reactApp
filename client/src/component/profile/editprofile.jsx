import React from 'react';
import AuthStore from '../../stores/AuthStore.js';
import * as AuthAction from '../../action/AuthAction.js';
class UserProfileEdit extends React.Component {
     constructor(props){
          super(props);
           this.userId =  this.getParamsId();
           this.getProfile = this.getProfile.bind(this);
           this.state = {
                user: '',
                file:''
           }
  this.onChange = this.onChange.bind(this);
  this.handleImageChange = this.handleImageChange.bind(this);
     }
     componentDidMount() {
      this.getProfile();
     }
     getParamsId(){
          return this.props.params.id;
     }
     getProfile(){
          AuthStore.userProfile(this.userId).then(response => {
          this.setState({user : response})
          })
     }
     updateProfile(e){
          e.preventDefault();
          let name = this.refs.name.value;
           let user = {};
            user['id'] = this.userId;
           user['name'] = name;
           user['image'] = this.state.file
           AuthAction.updateProfile(user);

     }
onChange(e){
          e.preventDefault();
          let value = e.target.value;
          this.setState({user:value})
     }

handleImageChange(e) {
   e.preventDefault();
   let reader = new FileReader();
   let files = e.target.files;
   var file = [];
   for (var key in files) {
       if (files.hasOwnProperty(key) && files[key]) {
           //console.log(files[key]);
          file.push(files[key]);
          //  formData.append(key, files[key]);
       }
   }
   this.setState({
        file: file
   });

 }
render(){
     return (
          <div className="container">
               <h1 className="head1">{this.state.user.name}</h1>
                    <div className="container">
                         <form  onSubmit={this.updateProfile.bind(this)} encType="multipart/form-data">
                              <input type="text" className="form-control" onChange={this.onChange} placeholder="Name" value={this.state.user.name} ref='name'/>
                              <input type="file" className="form-control"  placeholder="Image Upload" ref='image' onChange={this.handleImageChange} multiple/>
                              <br/>
                              <input type="submit" className="btn btn-success btn-lg" value="Update" />
                         </form>
                    </div>
          </div>
       )
  }
}
module.exports = UserProfileEdit;
