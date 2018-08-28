import React,{Component} from 'react'
import {render} from 'react-dom'
import Users from './Users'
import Home from './Home'
import Nav from './Nav'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {HashRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import UserCreate from './UserCreate'



class App extends Component {
    constructor (){
        super()
        this.state = {
            users : []
        }
        this.removeUser = this.removeUser.bind(this)
    }

    componentDidMount(){
        axios.get('/api/users')
        .then(response => response.data)
        .then(users => this.setState({users}))
    }

    removeUser(_user){
        axios.delete(`/api/users/${_user.id}`)
        this.setState({users : this.state.users.filter(user => user !== _user)})
    }

    render(){
        const {users} = this.state
        return (
            <div>
                <Link to={'/'}><button type="button" className="btn btn-primary"> 🏠 Home </button></Link>
                <Link to={'/api/users/'}><button type="button" className="btn btn-primary"> Users {users.length}  </button></Link>
                <Link to={'/api/users/'}><button type="button" className="btn btn-primary"> + Add A User </button></Link>
                <Route exact path='/' render={()=> <Home users = {this.state.users} /> } />
                <Route path='/api/users' render = {() => <Users users = {this.state.users} removeUser = {this.removeUser}/> } />
                <Route path='/api/users' component={UserCreate}/>

            </div>
        )
    }
}

const root = document.getElementById('root')
render(<Router><App/></Router>, root)