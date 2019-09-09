import React, { Component } from 'react';
import UserCard from './userCard';

class Followers extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        console.log("Followers:", this.props.userFollowers);
        const userFollowers = this.props.userFollowers;
        console.log("userFollowers:", userFollowers);
        return (
            <div className="followers">
                {Array.from(userFollowers).map(follower => <UserCard userData={follower}/> )}
            </div>
        )
    }
}

export default Followers;