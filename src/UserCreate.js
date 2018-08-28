import React, {Component} from 'react'

class UserCreate extends Component{
    constructor(){
        super()
        this.state = {
            user : ''
        }
    }


    render(){
        return(
            <div>
                <form className="form-group" >
                    <label>Name</label>
                    <div>
                    <input type="tex" value={this.state.user}/>
                    <button type="button" className="btn btn-success" disabled={this.state.user? true : true} >Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserCreate