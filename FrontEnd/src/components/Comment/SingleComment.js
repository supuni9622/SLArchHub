import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import { Comment, Avatar, Input } from 'antd';
import Button from 'react-bootstrap/Button';
import LikeDislikes from './LikeDislikes';
import Axios from 'axios';

const { TextArea } = Input;

function SingleComment(props) {

    //Get current user's data from the redux state
    const user = useSelector(state => state.user);

    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            writer: user.userData._id,
            postId: props.postId,
            responseTo: props.comment._id,
            content: CommentValue
        }

        Axios.post('http://localhost:5000/comment/saveComment', variables)
        .then(response => {
            if (response.data.success) {
                setCommentValue("")
                setOpenReply(!OpenReply)
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to save Comment')
            }
        })
    }

    const actions = [
    <LikeDislikes comment commentId={props.comment._id} userId={localStorage.getItem('userId')} />,
    <span onClick={openReply} key="comment-basic-reply-to">Reply to </span>
    ]

    return (
        <div>
            {/*Show the related comments with writer*/}
             <Comment
                actions={actions}
                author={props.comment.writer.firstName}
                avatar={
                    <Avatar
                        src= {`http://localhost:5000/${props.comment.writer.profile_photo}`}
                        alt="image"
                    />
                }
                content={
                    <p style={{color:'black'}}>
                        {props.comment.content}
                    </p>
                }
            ></Comment>

            {/*Show and hide reply to input field*/}
            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    
                        <div className="col-9">
                        <TextArea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={handleChange}
                        value={CommentValue}
                        placeholder="write some comments"
                    />
                        </div>

                        <div className="col-3">
                        <Button onClick={onSubmit}>Submit</Button>
                        </div>
                  
                   
                   
                </form>
            }

        </div>
    )
}

export default SingleComment
