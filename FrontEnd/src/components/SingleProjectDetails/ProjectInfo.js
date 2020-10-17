import React, { useEffect, useState } from 'react'

function ProjectInfo(props) {

    const [Project, setProject] = useState({})

    useEffect(() => {

        setProject(props.detail)

    }, [props.detail])

    return (
        <div className="container" style={{color:'black'}}>
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>  Exterior Designer</p>
                </div> 
                <div className="col-6">
                    <p>{Project.architect}</p>
                </div> 
            </div>
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>Interior Designer</p>
                </div> 
                <div className="col-6">
                    <p>{Project.interiorDesigner}</p>
                </div> 
            </div>
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>Landscape Designer</p>
                </div> 
                <div className="col-6">
                    <p>{Project.landscapeDesigner}</p>
                </div> 
            </div>
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>Project Style</p>
                </div> 
                <div className="col-6">
                    <p>{Project.style}</p>
                </div> 
            </div>
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>Project Started Date</p>
                </div> 
                <div className="col-6">
                    <p>{Project.startedDate}</p>
                </div> 
            </div>
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>Project Ended Date</p>
                </div> 
                <div className="col-6">
                    <p>{Project.finishedDate}</p>
                </div> 
            </div>
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>Total Budget of the Project</p>
                </div> 
                <div className="col-6">
                    <p>{Project.budget}</p>
                </div> 
            </div>
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>Area</p>
                </div> 
                <div className="col-6">
                    <p>{Project.area} sqft</p>
                </div> 
            </div>
            {/*}
            <div className="row">
               <div className="col-6">
                   <p style={{fontWeight:'bold'}}>Project Description</p>
                </div> 
                <div className="col-6">
                    <p>{Project.description}</p>
                </div> 
            </div> */}
        </div>
    )
}

export default ProjectInfo
