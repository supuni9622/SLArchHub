import React, { Component } from 'react'
import { VERIFY_USER } from './Events'

class ChatForm extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            name:"",
            error:""
        };
      }

      setUser = ({user, isUser})=>{

        console.log(user, isUser);
        
		if(isUser){
			this.setError("Please Enter Your Second Name")
		}else{
			this.setError("")
			this.props.setUser(user)
		}
    }
    
    handleSubmit = (e)=>{
		e.preventDefault()
		const { socket } = this.props
		const { name } = this.state
		socket.emit(VERIFY_USER, name, this.setUser)
	}

	handleChange = (e)=>{
		this.setState({name:e.target.value})
	}

	setError = (error)=>{
		this.setState({error})
	}

    render() {

        const { name, error } = this.state

        return (
            <div className="chatForm">
            <form onSubmit={this.handleSubmit} className="chat-form" >

                <label htmlFor="name">
                    <h5>Enter your name to start conversation..</h5>
                </label>
                <input
                    ref={(input)=>{ this.textInput = input }} 
                    type="text"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder={'Name'}
                    />
                    <div className="error">{error ? error:null}</div>

            </form>
        </div>
        )
    }
}

export default ChatForm
