import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher.js";
import request from 'superagent';
import { browserHistory} from 'react-router';
class AuthStore extends EventEmitter{
     /*********** emit change function *****/
     emitChange() {
          this.emit('change');
     }
     /*********** add  change listner function *****/
     addChangeListener(callback) {
          this.on('change', callback)
     }
     /********** remove change Listner ******/
     removeChangeListener(callback) {
          this.removeListener('change', callback)
     }

     /****** Sinup Form *********/
     signupForm(user){
          //event.preventDefault();
          request.post('/api/auth/register')
          .set('Content-Type', 'application/json')
          .send(JSON.stringify(user))
          .accept('application/json')
          .end((error, res)=>{
               console.log(res.body.data,"oooooooooo")
          })
     }

     /*********** login form ***********/
     loginForm(user){
          request.post('/api/auth/login')
          .set('Content-Type', 'application/json')
          .send(JSON.stringify(user))
          .accept('application/json')
          .end( (error, res) => {
               if(res.body.status == "success" ){
                    localStorage.setItem('profile', JSON.stringify(res.body.data.user));
                    localStorage.setItem('token', JSON.stringify(res.body.data.token));
                    browserHistory.replace('/home');
               }else{
                    browserHistory.replace('/login');
               }

          });
     }
     /******** logout function *********/
     logout(){
          localStorage.removeItem('profile');
          localStorage.removeItem('token');
     }
     /****** check if user is login *******/
     isAuthenticated() {
          if (localStorage.getItem('token')) {
               return true;
          }
          return false;
     }
     /************ user list ***************/
     userList(){
          let token = localStorage.getItem('token').replace(/"/g, "");
          return request.get('/api/user/list')
          .set('Authorization', 'BearerE '+token )
          .accept('application/json')
          .then((res) => {
               return res.body.data;
          })
          //this.emit('change');
     }
     /********** delete user from list *********/
     deleteUser(id){
          let token = localStorage.getItem('token').replace(/"/g, "");
          return request.get('/api/user/delete')
          .query('id='+id)
          .set('Authorization', 'BearerE '+token )
          .accept('application/json')
          .then((res) => {
               return res.body.data;
          })
     }
     /*********** get user profile ***********/
     userProfile(id){
          let token = localStorage.getItem('token').replace(/"/g, "");
          return request.get('/api/user/profile')
          .query('id='+id)
          .set('Authorization', 'BearerE '+token )
          .accept('application/json')
          .then((res) => {
               return res.body.data;
          })
     }
    uploadImage(imageObj){
         let token = localStorage.getItem('token').replace(/"/g, "");
         request.post('/api/user/update')
         .send(imageObj)
         .set('Authorization', 'BearerE '+token )
         .accept('application/json')
         .then((res) => {
              console.log(res.body)
              if(res.body.status == 'success'){
                   browserHistory.replace('/home');
              }else{
                   alert("some error occured")
              }
         })
    }
     updateProfile(user){
          var files = user.image;
          for (var key in files) {
               let imageFormData = new FormData();
               imageFormData.append('id',user.id);
               imageFormData.append('name',user.name);
            // is the item a File?
              if (files.hasOwnProperty(key) && files[key] instanceof File) {
                   console.log(files[key]);
                  imageFormData.append('imageFile', files[key]);
                  this.uploadImage(imageFormData);
              }
         }
          // imageFormData.append('imageFile',user.image);

     }
     /********* Handle All Action for Auth ********/
     handleActionAuth(action){
          switch (action.type) {
               case "CREATE_SIGNUP":{
                    this.signupForm(action.user)
               }
               case "CREATE_LOGIN":{
                    this.loginForm(action.user);
                    this.emitChange();
               }
               case "CREATE_LOGOUT":{
                    this.logout();
                    this.emitChange();
               }
               case "CREATE_DELETE_USER":{
                    this.deleteUser(action.id);
                    this.emitChange();

               }
               case "CREATE_USER_PROFILE":{
                    this.userProfile(action.id);
                    this.emitChange();

               }
               case "CREATE_UPDATE_USER":{
                    this.updateProfile(action.user);
                    this.emitChange();

               }

          }
     }
}
const authStore = new AuthStore;

dispatcher.register(authStore.handleActionAuth.bind(authStore));

export default authStore;
