import React from 'react'
import { List, Avatar } from 'antd';

function Message(props) {

    const AvatarSrc = props.who ==='ArchiBot' ? <i style={{fontSize:'1rem', color:'black'}} class="fas fa-robot"></i> : <i class="far fa-smile-beam" style={{fontSize:'1rem', color:'black'}}></i> 

    return (
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={props.who}
                description={props.text}
            />
        </List.Item>
    )
}

export default Message