import React from 'react';
import logo from './logo.svg';
import './App.css';


import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateUser, apiRequest} from './actions/user.action'

class App extends React.Component {

  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentWillMount() {
    console.log("Componenet will mount");
    this.props.onApiRequest();
    setTimeout(()=>{this.props.onApiRequest()}, 5000);
    //setTimeout(this.props.onApiRequest(), 1000)

  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

render() {
  console.log("IN HERE !!!",this.props.user)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      
      <div><input onChange={this.onUpdateUser} type="text" value={this.props.user}/></div>
      <div>
      Your current name is {this.props.user} and Country is {this.props.country} 
      </div>
    </div>
  );
}
  
}

const mapStateToProps = (state, props) => {

  return {
    products:state.products,
    user:state.user,
    country: "II-"+props.country
  }
}


const mapDispatchToProps = {
    onUpdateUser : updateUser,
    onApiRequest : apiRequest
} 

/*
const mapDispatchToProps =(dispatch, props) => {
  return bindActionCreators({onUpdateUser : updateUser
  }, dispatch)
} 
  
const mergeProps = (mapStateToProps, mapDispatchToProps, ownProps) => {
  return {
    mapStateToProps,
    mapDispatchToProps,
    ownProps
  }
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(App);