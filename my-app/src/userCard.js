import React, { Component } from 'react';

class UserCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        console.log("2nd Render:", this.props.userData);
        return (
            <div className="userCard">
                <h1>UserCard</h1>
                <h2>{`Login: ${this.props.userData.login}`}</h2>
            </div>
        )
    }   
}
export default UserCard;