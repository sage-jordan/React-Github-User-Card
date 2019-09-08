import React, { setState } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './userCard';

class App extends React.Component() {
  constructor(){
    super();
    this.state = {
      
    }
  }
  componentDidMount(){
    axios.get("https://api.github.com/users/sage-jordan")
      .then(res => setState({
        user: res
      }))
      .catch(err => console.log(err));
  }
  render (){
    return (
      <div className="App">
        <h1>"My GitHub App"</h1>
        <UserCard user={this.state}/>
      </div>
    );
  }
}

export default App;
