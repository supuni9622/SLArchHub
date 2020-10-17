import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
//import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import axios from 'axios';

function Comment(props){

    const user = useSelector(state => state.user)
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();


        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        const variables = {
            content: Comment,
            writer: user.userData._id,
            postId: props.postId
        }

        axios.post('http://localhost:5000/comment/saveComment', variables)
        .then(response => {
            if (response.data.success) {
                setComment("")
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to save Comment')
                console.log(response.data.err)
                
            }
        })
    }

    return(
        <>
            <h4 style={{color:'black', fontWeight:'bold'}}>Add your valuable thoughts here.....</h4>

            {/* Comments List*/ }
            {console.log(props.CommentLists)}

            {props.CommentLists && props.CommentLists.map((comment, index) =>(
                (!comment.responseTo &&
                    <React.Fragment>

                        {/*Single Comment */}
                        <SingleComment
                            comment = {comment}
                            postId = {props.postId}
                            refreshFunction={props.refreshFunction} 
                        />

                        {/*Reply Comment*/}
                         <ReplyComment 
                            CommentLists={props.CommentLists} 
                            postId={props.postId} 
                            parentCommentId={comment._id} 
                            refreshFunction={props.refreshFunction} 
                        />
                    </React.Fragment>
                )
            )
            )}

            {/*If there is no comment yet */}
            {props.CommentLists && props.CommentLists.length === 0 &&
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'140px'}} >
                    <h5 style={{color: 'blue'}}>Be the first one who shares your thought about this project</h5>
                </div>
            }

            {/* Root Comment Form */}
            <Form  onSubmit={onSubmit} style={{marginTop:'15px', color:'black'}}>
                <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        type="text" 
                        value= {Comment}
                        onChange={handleChange}
                      />
                  </Form.Group>

                  <br />
                <Button onClick={onSubmit} style={{color:'white'}}>Submit</Button>
            </Form>

        </>
    )
}

export default Comment