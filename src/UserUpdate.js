import React, {Component} from 'react';

class UserUpdate extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    
    handleChange(ev){
        this.setState({name: ev.target.value})
    }

    handleUpdate(ev){
        ev.preventDefault()
        this.props.updateUser(this.state, this.props.id)
        .catch((err) => console.log(err))
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
                </div>
            </form>
        </div>
        )
    }
}


export default UserUpdate;