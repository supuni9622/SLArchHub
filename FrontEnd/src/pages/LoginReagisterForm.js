import React, { Component } from 'react'
import LoginPage from '../components/LoginPage'
import RegisterForm from './RegisterForm';
import '../css/LoginRegister.css';

class LoginReagisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isLogginActive: true
        };
      }  

    componentDidMount() {
        //Add .right by default
        this.rightSide.classList.add("right");
      }
    
      changeState() {
        const { isLogginActive } = this.state;
    
        if (isLogginActive) {
          this.rightSide.classList.remove("right");
          this.rightSide.classList.add("left");
        } else {
          this.rightSide.classList.remove("left");
          this.rightSide.classList.add("right");
        }
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
      }
    render(){
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Sign Up" : "Login";
        const currentActive = isLogginActive ? "Login" : "Sign Up";
        return (
          <div className="loginBody">
            <div className="login">
              <div id="login-container" ref={ref => (this.container = ref)}>
                {isLogginActive && (
                  <LoginPage containerRef={ref => (this.current = ref)} />
                )}
                {!isLogginActive && (
                  <RegisterForm containerRef={ref => (this.current = ref)} />
                )}
              </div>
              <RightSide
                current={current}
                currentActive={currentActive}
                containerRef={ref => (this.rightSide = ref)}
                onClick={this.changeState.bind(this)}
              />
            </div>
          </div>
        );
      }
    }   

    const RightSide = props => {
        return (
          <div
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}
          >
            <div className="inner-container">
              <div className="text">{props.current}</div>
            </div>
          </div>
        );
      };

export default LoginReagisterForm
