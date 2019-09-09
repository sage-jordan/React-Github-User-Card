import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class UserCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        console.log("2nd Render:", this.props.userData);
        const user = this.props.userData;
        return (
            <div className="userCard">
                <h1>UserCard</h1>
                <Card
                    image={user.avatar_url}
                    header={user.name}
                    meta={user.type}
                    description={user.bio}
                    extra={user.location}
                />
            </div>
        )
    }   
}
export default UserCard;