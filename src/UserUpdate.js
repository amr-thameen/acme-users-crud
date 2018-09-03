import React, {Component} from 'react';
import axios from 'axios'

class UserUpdate extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.fetchUser = this.fetchUser.bind(this)
    }

    fetchUser(id){
        this.props.fetchUser(id)
          .then( user => this.setState({ name: user.name }));
      }
    
    handleChange(ev){
        this.setState({name: ev.target.value})
    }

    handleUpdate(ev){
        ev.preventDefault()
        this.props.updateUser({name: this.state.name})
        .catch((err) => console.log(err))
    }

    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
          this.fetchUser(this.props.id);
        }
      }

    render(){
        return (
            <div>
            <h3>Update A User</h3>
            <form className="form-group" onSubmit={this.handleUpdate} >
                <label>Name</label>
                <div>
                <input type="tex" value={this.state.name} onChange={this.handleChange}/>
                <button className="btn btn-success" disabled={!this.state.name}>Update</button>
                {this.state.error? <div className="alert alert-danger"> <strong>User already exists!</strong> </div> : null}
                </div>
            </form>
        </div>
        )
    }
}


export default UserUpdate;