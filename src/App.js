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
import UserUpdate from './UserUpdate'



class App extends Component {
    constructor (){
        super()
        this.state = {
            users : []
        }
        this.removeUser = this.removeUser.bind(this)
        this.addUser = this.addUser.bind(this)
        this.fetchUser = this.fetchUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    fetchUser(id){
        return axios.get(`/api/users/${id}`)
          .then( response => response.data);
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

    addUser(_user){
        console.log(_user)
        return axios.post('/api/users', _user)
        .then((response)=> response.data)
        .then((user) => this.setState({users: [...this.state.users, user]}))
        .catch(next)
    }

    updateUser(_user){
        return axios.put(`/api/users/${user.id}`, _user)
        .then((response) => response.data)
        .then( data => {
            console.log(data)
        const users = this.state.users.map(_user => _user !== data ? _user : data);
        this.setState({ users: users })})
    }

    render(){
        const {users} = this.state
        return (
            <div>
                <Link to={'/'}><button type="button" className="btn btn-primary"> 🏠 Home </button></Link>
                <Link to={'/api/users/'}><button type="button" className="btn btn-primary"> Users {users.length}  </button></Link>
                <Link to={'/api/users/create'}><button type="button" className="btn btn-primary"> + Add A User </button></Link>
                <Route exact path='/' render={()=> <Home users = {this.state.users} /> } />
                <Route path='/api/users' render = {() => <Users users = {this.state.users} removeUser = {this.removeUser}/> } />
                <Route path='/api/users/create' render = {() => <UserCreate addUser = {this.addUser}/> } />
                <Route path ='/api/users/:id' render ={()=> <UserUpdate updateUser = {this.updateUser} fetchUser = {this.fetchUser} />}/>
            </div>
        )
    }
}

const root = document.getElementById('root')
render(<Router><App/></Router>, root)