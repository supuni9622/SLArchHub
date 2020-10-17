import React,  { useEffect, useState } from 'react'
import Axios from 'axios'
import ImageGalleryItems from './ImageGallery';
import ProjectInfo from './ProjectInfo';
import {Row,Col} from 'react-bootstrap';
import NavBar from '../NavBar';
import Comment from '../Comment/Comment';
import 'antd/dist/antd.css';
import Favorite from '../Favorite/Favorite';
import Footer from '../Footer';

function DetailedProjectPage(props) {

    const projectId = props.match.params.projectId
    const [Project, setProject] = useState([])
    const [CommentLists, setCommentLists] = useState([])

    const projectVariable = {
        projectId : projectId
    }

    useEffect(() => {
        Axios.post('http://localhost:5000/archi-dashboard/projects/getProject', projectVariable)
            .then(response => {
                if (response.data.success) {
                   // console.log(response.data.project)
                    setProject(response.data.project)
                } else {
                    alert('Failed to get project Info')
                }
            })
        
            Axios.post('http://localhost:5000/comment/getComments', projectVariable)
            .then(response => {
                if (response.data.success) {
                    console.log('response.data.comments',response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get Comments')
                }
            })

    }, [])

    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

    return (
        <>
            <NavBar/>
            <div className="container" style={{ width: '100%', padding: '3rem 1rem' , marginTop: '150px', backgroundColor:'white',boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}>

                <div style={{ display: 'flex', justifyContent: 'center', fontWeight:'bold', color:'black' }}>
                    <h1>{Project.name}</h1> <h1> -  </h1> <h1>{Project.designCategory}</h1>
                </div>

                <Row style={{margin:'20px'}}>
                    <Col>
                        <ImageGalleryItems detail={Project} />
                    </Col>
                    <Col>
                        <ProjectInfo
                            detail={Project} />

                        {/*Add to Favourite*/}
                        <div>
                            <Favorite projectInfo={Project} projectId={projectId} userFrom={localStorage.getItem('userId')} />
                        </div>
                        
                    </Col>
                </Row>
                <Row style={{margin:'20px', color:'black'}}>
                    <p>{Project.description}</p>
                </Row>
            </div>

            {/*Comment Component */}
            <div className="container" style={{ width: '100%', padding: '3rem' , marginTop: '40px', marginBottom:'40px',backgroundColor:'white',boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}>

                <Comment CommentLists={CommentLists}  postId={Project._id} refreshFunction={updateComment}/>
            </div>
           <Footer/>
        </>
    )
}

export default DetailedProjectPage

