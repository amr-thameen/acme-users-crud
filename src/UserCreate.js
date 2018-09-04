import React, {Component} from 'react'

class UserCreate extends Component{
    constructor(){
        super()
        this.state = {
            name : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(ev){
        this.setState({name: ev.target.value})
    }

    handleSubmit(ev){
        ev.preventDefault()
        this.props.addUser({name: this.state.name})
        .catch((err) => this.setState({error: true}))
    }

    render(){
        const errorMessage = this.props.errorMessage
        console.log(errorMessage)
        return(
            <div>
                <h3>Create A User</h3>
                <form className="form-group" onSubmit={this.handleSubmit} >
                    <label>Name</label>
                    <div>
                    <input type="tex" value={this.state.user} onChange={this.handleChange}/>
                    <button className="btn btn-success" disabled={!this.state.name}>Create</button>
                    {errorMessage && this.state.name &&  <div className="alert alert-danger">{errorMessage}</div> }
                    </div>
                </form>
            </div>
        )
    }
}

export default UserCreate