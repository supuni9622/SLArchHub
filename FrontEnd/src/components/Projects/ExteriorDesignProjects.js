import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ImageSlider from '../../adminDashboards/ArchiDashboard/utils/ImageSlider';
import CheckBox from './Sections/Checkbox';
import RadioBox from './Sections/RadioBox';
import StyleCheckbox from './Sections/StyleCheckbox';
import AreaRadio from './Sections/AreaRadio';
import {budget, designCategory,area,style } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
import NavBar from '../NavBar';
import Footer from '../Footer';

const { Meta } = Card;

function ExteriorDesignProjects(){
    const [Projects, setProjects] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(4)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        designCategory: [],
        style: [],
        budget: [],
        area: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProjects(variables)

    }, [])

    const getProjects = (variables) => {
        Axios.post('http://localhost:5000/archi-dashboard/projects/getProjects', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProjects([...Projects, ...response.data.projects])
                    } else {
                        setProjects(response.data.projects)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch project datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        getProjects(variables)
        setSkip(skip)
    }

    const renderCards = Projects.map((project, index) => {
        return <div className="col-lg-3 col-md-4 col-s-6">
 
        <Card style={{ width: '15rem', height: '17rem', padding: '10px', margin: '10px',boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)' }}>
            {<a href={`/projects/${project._id}`} > <ImageSlider images={project.images} /></a>}
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Title>{project.designCategory}</Card.Title>
            </Card.Body>
        </Card>
    </div>    
    })

const showFilteredResults = (filters) => {

    const variables = {
        skip: 0,
        limit: Limit,
        filters: filters
    }
    getProjects(variables)
    setSkip(0)

}

const handlebudget = (value) => {
    const data = budget;
    let array = [];

    for (let key in data) {

        if (data[key]._id === parseInt(value, 10)) {
            array = data[key].array;
        }
    }
    console.log('array', array)
    return array
}

const handlearea = (value) => {
    const data = area;
    let array = [];

    for (let key in data) {

        if (data[key]._id === parseInt(value, 10)) {
            array = data[key].array;
        }
    }
    console.log('array', array)
    return array
}

const handleFilters = (filters, category) => {

    const newFilters = { ...Filters }

    newFilters[category] = filters

    if (category === "budget") {
        let budgetValues = handlebudget(filters)
        newFilters[category] = budgetValues
    }
    if (category === "area") {
        let areaValues = handlearea(filters)
        newFilters[category] = areaValues
    }

    console.log(newFilters)

    showFilteredResults(newFilters)
    setFilters(newFilters)
}

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
}

return(
    <>
    <NavBar/>
    <div className="container" style={{ width: '100%', marginTop:'10rem', marginBottom:'4rem' }}>
        <div style={{ textAlign: 'center', margin: '2rem' }}>
            <h2 style={{color:'black', fontWeight:'bold'}}>  ALL PROJECTS   </h2>
        </div>

        <div className="row" style={{margin:'16px'}}>
            <div className="col-lg-3 col-s-6">
                <CheckBox
                    list={designCategory}
                    handleFilters={filters => handleFilters(filters, "designCategory")}
                /> 
            </div>
            <div className="col-lg-3 col-s-6">
                <StyleCheckbox
                    list={style}
                    handleFilters={filters => handleFilters(filters, "style")}
                /> 
            </div>
            <div className="col-lg-3 col-s-6">
                <RadioBox
                    list={budget}
                    handleFilters={filters => handleFilters(filters, "budget")}
                />
            </div>
            <div className="col-lg-3 col-s-6">
                <AreaRadio
                    list={area}
                    handleFilters={filters => handleFilters(filters, "area")}
                />
            </div>
        </div>

        {/* Search  */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>
            <SearchFeature
                refreshFunction={updateSearchTerms}
            />
        </div>

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
    <Footer></Footer>
    </>

    )  
}

export default ExteriorDesignProjects
