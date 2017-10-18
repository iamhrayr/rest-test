import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signout} from '../actions/user';
import {withRouter} from 'react-router-dom';

class Profile extends Component {

  logout(){
    // this.props.signout()
    //   .then(()=>{
    //     console.log('logout success')
    //     this.props.history.push('/login');
    //   })
  }

  render() {
    return (
        <div className="text-center" style={{paddingTop: 50}}>
          <button className="btn" onClick={this.logout.bind(this)}>Logout</button>
          <br /><br />
          <p style={{color:'#dbdbdb',fontSize:20}}>You are Loged in now. It iss your profile</p>
        </div>
    );
  }
}

export default connect(null, {signout})(withRouter(Profile));
