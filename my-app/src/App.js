import React, { setState, Component } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './userCard';
import Followers from './Followers';

class App extends Component {
  constructor(){
    super();
    console.log("Constructor Function")
    // Declare State
    this.state = {
      userData: {},
      userFollowers: {}
    }
  }
  componentDidMount(){ 
    // User API call
    axios.get("https://api.github.com/users/sage-jordan")
      .then((res) => {
        this.setState({ userData: res.data });
        console.log("CDM: Axios call, setState", this.state);
      })
      .catch(err => console.log(err));
    // Followers API call
    axios.get("https://api.github.com/users/sage-jordan/followers")
    .then((res => {
      this.setState({ userFollowers: res.data });
      console.log("CDM: Axios call, setState: Followers", this.state);
    }))
    .catch(err => console.log(err));
  }
  render (){
    console.log("Render", this.state);
    return (
      <div className="App">
        <h1>"My GitHub App"</h1>
        <h1>UserCard</h1>
        <UserCard userData={this.state.userData}/>
        <h1>Followers</h1>
        <Followers userFollowers={this.state.userFollowers} />
      </div>
    );
  }
}
export default App;
