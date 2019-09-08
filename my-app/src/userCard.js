import React from 'react';

class UserCard extends React.Component(props) {
    constructor(props){
        super();
        console.log(props);
    }
    render(){
        return(
            <div>
                <h1>{props.name}</h1>
            </div>
        )
    }
}
export default UserCard;