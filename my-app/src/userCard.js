import React, { Component } from 'react';

class UserCard extends Component {
    constructor(props){
        super();
        this.state = {
            userData: props
        }
    }
    render() {
        console.log("2nd Render:", this.state);
        return (
            <div className="userCard">
                <h1>UserCard</h1>
                <h2>{`Login: ${this.state.login}`}</h2>
            </div>
        )
    }   
}
export default UserCard;