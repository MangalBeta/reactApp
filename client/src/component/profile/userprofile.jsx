import React from 'react';
import AuthStore from '../../stores/AuthStore.js';
class UserProfile extends React.Component {
     constructor(props){
          super(props);
           this.userId =  this.getParamsId();
           this.getProfile = this.getProfile.bind(this);
           this.state = {
                username: '',
                profile:'',
                email: ''
           }
      }
 componentDidMount() {
      this.getProfile();
     }
     getParamsId(){
          return this.props.params.id;
     }
     getProfile(){
          AuthStore.userProfile(this.userId).then(response => {
               this.setState({username : response.name,profile:response.profilePic,email:response.email})
          })
     }
     render(){
          let profileUrl = this.state.profile;
          let $imagePreview = null;
          if(profileUrl){
           $imagePreview = profileUrl.map( (profile,index) => {
                let imgPath = profile.path
               return (
                    <ul key={index} >
                         <li ><img src={imgPath} /></li>
                    </ul>

               );
          });
     }
          //  let $imagePreview = null;
     //      if(profileUrl){
     //         $imagePreview = (<img src={profileUrl} />);
     //    }

     return (
          <div className="container">
               <h1 className="head1">{this.state.username}</h1>
                    <div className="container">
                         Hi My email id is {this.state.email}
                    </div>
                  {$imagePreview}
          </div>
       )
  }
}
module.exports = UserProfile;
