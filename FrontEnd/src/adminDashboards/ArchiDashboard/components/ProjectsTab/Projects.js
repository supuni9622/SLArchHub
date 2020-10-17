import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ImageSlider from '../../utils/ImageSlider';

//const { Meta } = Card;

function Projects(){
    const user = useSelector(state => state.user)

    const [Projects, setProjects] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(4)
    const [PostSize, setPostSize] = useState()
   // const [SearchTerms, setSearchTerms] = useState("")

   /* const [Filters, setFilters] = useState({
        designCategory: [],
        style: [],
        budget: [],
        area: []
    }) */

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProjects(variables)

    }, [])

    const getProjects = (variables) => {
        Axios.post('http://localhost:5000/archi-dashboard/projects/', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProjects([...Projects, ...response.data.projects])
                    } else {
                        setProjects(response.data.projects)
                    }
                   // setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch project datas')
                }
            })
    }

    const deleteProject = () => {
        Axios.delete('http://localhost:5000/archi-dashboard/projects/delete-project/' + project._id)
            .then((res) => {
                console.log('Project successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }


    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            //filters: Filters,
           // searchTerm: SearchTerms
        }
        getProjects(variables)
        setSkip(skip)
    }

    const renderCards = Projects.map((project, index) => {
        return <div className="col-lg-3 col-md-4 col-s-6">
 
        <Card style={{ width: '18rem', height: '17rem', padding: '10px', margin: '10px' }}>
            {<a href={`/projects/${project._id}`} > <ImageSlider images={project.images} /></a>}
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Title>{project.designCategory}</Card.Title>
                <Button>
                    <Link id="edit" className="edit-link" to={"/archi-dashboard/projects/edit-project/" + project._id}>
                       <i class="fas fa-edit"></i>   Edit
                    </Link>
                    </Button>
                    <Button id="delete" onClick={deleteProject} size="sm" variant="primary"> 
                    <i class="fas fa-trash-alt"></i> Delete</Button>
            </Card.Body>
        </Card>
    </div>    
    })
/*
const updateSearchTerms = (newSearchTerm) => {

    const variables = {
        skip: 0,
        limit: Limit,
        filters: Filters,
        searchTerm: newSearchTerm
    }

    setSkip(0)
    setSearchTerms(newSearchTerm)

    getProjects(variables)
} */

return(
    <>
    <NavBar/>
    <div style={{ width: '75%', margin: '9rem auto' }}>
        <div style={{ textAlign: 'center', margin: '2rem' }}>
            <h2>  ALL PROJECTS   </h2>
        </div>

        {/* Search  */}
       {/*} <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>
            <SearchFeature
                refreshFunction={updateSearchTerms}
            />
            </div> */}

        { Projects.length === 0?
            <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                <h2>No projects yet...</h2>
            </div> :
            <div className="row" style={{margin:'5px'}}>
                {renderCards}
            </div>        
        }

        <br /><br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={onLoadMore}>Load More</Button>
        </div>       
    </div>
    </>

    )  
}

export default Projects
