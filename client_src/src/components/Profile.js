import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signout} from '../actions/user';
import {addPost, getPosts} from '../actions/post';
import {withRouter} from 'react-router-dom';

class Profile extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      title:'',
      body: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getPosts();
  }

  logout(){
    // this.props.signout()
    //   .then(()=>{
    //     console.log('logout success')
    //     this.props.history.push('/login');
    //   })
  }

  onInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.addPost(this.state)
  }

  renderPosts(){
    return (
      <ul>
        {Object.keys(this.props.posts).map(key => {
          return (
            <li style={{marginBottom:30}}>
              <h3>{this.props.posts[key].title}</h3>
              <div>{this.props.posts[key].body}</div>
              <small>{this.props.posts[key].userId}</small>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
        <div className="text-center" style={{paddingTop: 50}}>
          <button className="btn" onClick={this.logout.bind(this)}>Logout</button>
          <br /><br />
          <p style={{color:'#dbdbdb',fontSize:20}}>You are Loged in now. It is your profile</p>

          <form onSubmit={this.onFormSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={this.onInputChange}/>
            <br />
            <textarea name="body" placeholder="Body" onChange={this.onInputChange}></textarea>
            <br />
            <button type="submit">Save</button>
          </form>

          {this.renderPosts()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {signout, addPost, getPosts})(withRouter(Profile));
