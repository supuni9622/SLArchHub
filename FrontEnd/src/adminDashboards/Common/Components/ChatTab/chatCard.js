import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';
import 'antd/dist/antd.css';

function ChatCard(props) {

    const profile_photo = localStorage.getItem('profile_photo');

    return (
        <div style={{ width: '100%' }}>
            <Comment
                author={props.sender.firstName}
                avatar={
                    <Avatar
                        src= {`http://localhost:5000/${props.sender.profile_photo}`} alt={props.sender.firstName}
                    />
                }
                content= {
                        props.message.substring(0, 12) == "uploads\chats" ?
                            //this will be either video or image 
                            props.message.substring(props.message.length - 3, props.message.length) === 'mp4' ?
                                <video
                                    style={{ maxWidth: '200px' }}
                                    src={`http://localhost:5000/${props.message}`} alt="video"
                                    type="video/mp4" controls
                                />
                            : 
                                <img
                                    style={{ maxWidth: '200px' }}
                                    src={`http://localhost:5000/${props.message}`}
                                    alt="img"
                                />
                        
                        :
                        <p>
                            {props.message}
                        </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
        </div>
    )
}

export default ChatCard;

