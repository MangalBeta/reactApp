import React from 'react';
import Header from './component/header/header.jsx';
import Footer from './component/footer/footer.jsx';
import authStore from './stores/AuthStore';
import "./main.css";
class App extends React.Component {
   render() {
        let loginStatus = authStore.isAuthenticated();
      return (
         <div>
         <div id="wrap">
          <Header loginStatus={loginStatus}/>
       {this.props.children}
           </div>
           <br/>      <br/>
       <Footer />
         </div>
      );
   }
}

export default App
