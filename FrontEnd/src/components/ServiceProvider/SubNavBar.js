import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

function SubNavBar() {
    return (
        <Jumbotron fluid>
        <div className="d-flex justify-content-end align-items-start">
             <button type="button" className="btn btn-outline-dark mr-2 mb-2">Best Rated</button>
             <button type="button" className="btn btn-outline-dark mr-2 mb-2">Payment Type</button>
         </div>
         <div className=" d-flex justify content-start align-items-start">
           <nav aria-label="breadcrumb">
             <ol className="breadcrumb">
               <li className="breadcrumb-item"><a href="#">Architects</a></li>
               <li className="breadcrumb-item active" aria-current="page">Residential Architects</li>
             </ol>
           </nav>
           <p>20 items</p> 
         </div>  
         </Jumbotron>     
    )
}

export default SubNavBar