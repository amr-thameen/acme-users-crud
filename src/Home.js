import React from 'react'

const Home = function(props){
    return (
        <div>
            <h2>Welcome to Acme Users! We have {props.users.length} users!</h2> 
        </div>
    )
}

export default Home;