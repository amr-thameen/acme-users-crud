import React, {Component} from 'react';
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import UserUpdate from './UserUpdate'


const Users = function(props){
    const {users} = props
    return (
        <div>
            <h3>
                Users
            </h3>
            <ul>
                {
                    users.map(user => {
                    return(
                        <div key={user.id}>
                            <Link to={`/api/users/${user.id}`}><h4><li>{user.name}</li></h4></Link>
                            <button type="button" className="btn btn-danger" onClick={()=>props.removeUser(user)}>Remove</button>
                            <hr/>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}


export default Users;