import React, { setState, Component } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './userCard';

class App extends Component {
  constructor(){
    super();
    console.log("Constructor Function")
    this.state = {
      userData: {}
    }
  }
  componentDidMount(){ 
    axios.get("https://api.github.com/users/sage-jordan")
      .then((res) => {
        this.setState({ userData: res.data });
        console.log("CDM: Axios call, setState", this.state);
      })
      .catch(err => console.log(err));
  }
  render (){
    console.log("Render", this.state);
    return (
      <div className="App">
        <h1>"My GitHub App"</h1>
        <UserCard userData={this.state.userData}/>
      </div>
    );
  }
}
export default App;
