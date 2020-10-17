import React, { Component } from 'react'
import {login} from './UserFunctions';
import '../css/logReg.css';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
    constructor(){
        super()
        this.state ={
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push('/archi-dashboard')
            }
        })
    }

    render(){ 
    return (
        <div className="container log-container">
            <form noValidate onSubmit= {this.onSubmit} id="logform">
                <h1>SIGN IN</h1>
                <div className="input-container">
                    <i className="fas fa-user"></i>
                     <input
                        className='form-control'
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        onChange={this.onChange}
                        value={this.state.username}
                      />
                </div>
                
                <div className="input-container">
                     <i className="fas fa-unlock-alt"></i>
                     <input
                        className='form-control'
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.onChange}
                        value={this.state.password}
                      />
                </div>
                <div className="input-container">
                    <input
                       type="checkbox"
                       id="defaultcheck"
                       name="defaltcheck"
                       defaultValue
                    />
                    <label
                       className="form-check-label text-muted"
                       htmlFor="defaultcheck"
                    >
                        Remember username
                    </label>
                </div>

                <a  id ="forgetPassword" href="/">Forgot your password?</a>
                <Button variant="primary" size="md" block="block" type="submit"> Sign In </Button>
                
            </form>   
        </div>
    )
}

}

export default LoginForm;
