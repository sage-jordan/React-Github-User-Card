import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        console.log("UserCard: this.props:", this.props);
        const user = this.props.userData;
        console.log("User:", user.userData);
        return (
            <div className="userCard">
                <h1>UserCard</h1>
                <h2>{`Login: ${user.userData.login}`}</h2>
            </div>
        )
    }   
}
export default UserCard;