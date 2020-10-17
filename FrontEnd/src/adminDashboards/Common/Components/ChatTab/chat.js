import React, { Component } from 'react'
import { Form,Input, Button, Row, Col, } from 'antd';
import 'antd/dist/antd.css';
import io from "socket.io-client";
import { connect } from "react-redux";
import moment from "moment";
import { getChats, afterPostMessage } from "../../../../_actions/chat_actions"
import ChatCard from "./chatCard"
import Dropzone from 'react-dropzone';
import Axios from 'axios';

class Chat extends Component {
    state = {
        chatMessage: "",
    }

    //Socket.io configuration
    componentDidMount() {
        let server = "http://localhost:5000";

        //put all the chatting data in redux container
        this.props.dispatch(getChats());

        this.socket = io(server);

       this.socket.on("Output Chat Message", messageFromBackEnd => {
            console.log(messageFromBackEnd)
            //After posting the message we can see it in the screen fro  redux store
            this.props.dispatch(afterPostMessage(messageFromBackEnd));
        }) 
    }

    //Auto scrolling
    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }

    hanleSearchChange = (e) => {
        this.setState({
            chatMessage: e.target.value
        })
    }

    //Show chats in the cards
    renderCards = () =>
    this.props.chats.chats
    && this.props.chats.chats.map((chat) => (
        <ChatCard key={chat._id}  {...chat} />
    ));

    //ondrop function

    onDrop = (files) => {
        console.log(files)

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in first');
        }

        let formData = new FormData;

        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }

        formData.append("file", files[0])

        Axios.post('/api/chat/uploadfiles', formData, config)
            .then(response => {
                if (response.data.success) {
                    let chatMessage = response.data.url;
                    let userId = this.props.user.userData._id
                    let userName = this.props.user.userData.firstName;
                    let userImage = this.props.user.userData.profile_photo;
                    let nowTime = moment();
                    let type = "VideoOrImage"

                    this.socket.emit("Input Chat Message", {
                        chatMessage,
                        userId,
                        userName,
                        userImage,
                        nowTime,
                        type
                    });
                }
            })
    }


    submitChatMessage = (e) => {
        e.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in first');
        }

        let chatMessage = this.state.chatMessage
        let userId = this.props.user.userData._id
        let userName = this.props.user.userData.firstName;
        let userImage = this.props.user.userData.profile_photo;
        let nowTime = moment();
        let type = "Text"

        this.socket.emit("Input Chat Message", {
            chatMessage,
            userId,
            userName,
            userImage,
            nowTime,
            type
        });
        this.setState({ chatMessage: "" })
    }

    render() {
        return (
            <div style={{backgroundColor:'white', boxShadow:'3px 6px 6px 6px #888888', borderRadius:'10px', marginBottom:'10px'}}>
                <p style={{ fontSize: '1rem', textAlign: 'center', fontWeight:'bold', padding:'15px', backgroundColor:'rgb(1, 9, 48)', color:'white'}}> SLArchHub Community</p>

              <div style={{ maxWidth: '800px', margin: '0 auto',paddingLeft:'20px', paddingBottom:'20px'}}>
                      <div className="infinite-container" style={{ height: '360px', overflowY: 'scroll' }}>
                        {this.props.chats && (
                            this.renderCards()
                        )}
                        <div
                            ref={el => {
                                this.messagesEnd = el;
                            }}
                            style={{ float: "left", clear: "both" }}
                        />
                        </div>
                      
                       <div className="row">
                            <Form layout="inline" onSubmit={this.submitChatMessage}>
                                <div className="col-8">
                                <Input
                                    id="message"
                                    placeholder="Share you thoughts"
                                    type="text"
                                    value={this.state.chatMessage}
                                    onChange={this.hanleSearchChange}
                                />
                                </div>
                                <div className="col-2">
                                <Dropzone onDrop={this.onDrop}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <Button type="primary">
                                                     <i className="fas fa-upload" style={{ fontSize: '1rem', color: 'black', justifyContent: 'center' }}></i>
                                                </Button>
                                            </div> 
                                        </section>
                                    )}
                                    </Dropzone>
                                </div>
                                <div className="col-2">
                                    <Button type="primary"  onClick={this.submitChatMessage} htmlType="submit">
                                        <i class="fas fa-paper-plane" style={{ fontSize: '1rem', color: 'black'}}></i>
                                    </Button>
                                </div>
                            </Form>
                       </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
        chats: state.chat
    }
}

export default connect(mapStateToProps)(Chat);