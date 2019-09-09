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
                <Card
                    image={user.avatar_url}
                    header={user.login}
                    meta={user.type}
                    description={user.bio}
                    extra={`User ID: ${user.id}`}
                />
            </div>
        )
    }   
}
export default UserCard;