import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';

//import SearchFeature from './Sections/SearchFeature';
import NavBar from '../components/NavBar';

const { Meta } = Card;

function ExteriorDesigner(){
    const [Users, setUsers] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(4)
    const [PostSize, setPostSize] = useState()
   // const [SearchTerms, setSearchTerms] = useState("")
/*
   const [Filters, setFilters] = useState({
        designCategory: [],
        budget: [] 
       
    })
*/
    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getUsers(variables)

    }, [])

    const getUsers = (variables) => {
        Axios.post('http://localhost:5000/service-provider/get-Exterior-Designers', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setUsers([...Users, ...response.data.users])
                    } else {
                        setUsers(response.data.users)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch exterior designer datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            //filters: Filters,
            //searchTerm: SearchTerms
        }
        getUsers(variables)
        setSkip(skip)
    }

    const renderCards = Users.map((user, index) => {
        return <div className="col-lg-3 col-md-4 col-s-6">
 
        <Card style={{ width: '15rem', height: '20rem', padding: '10px', margin: '10px', boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)' }}>
            <Card.Img variant="top" style={{height:'12rem'}} src={`http://localhost:5000/${user.profile_photo}`} />
            <Card.Body>
            <a href={`/service-providers/${user._id}`} ><Card.Title>{user.firstName} {user.lastName} </Card.Title></a>
                <Card.Text>{user.userType}</Card.Text>
            </Card.Body>
        </Card>
    </div>    
    })
/*
const showFilteredResults = (filters) => {

    const variables = {
        skip: 0,
        limit: Limit,
        filters: filters

    }
    getUsers(variables)
    setSkip(0)

}

const handleFilters = (filters, category) => {

    const newFilters = { ...Filters }

    newFilters[category] = filters

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

    getUsers(variables)
}
*/
return(
    <>
    <NavBar/>
    <div className="container" style={{ width: '100%', marginTop:'10rem', marginBottom:'4rem' }}>
        <div style={{ textAlign: 'center', margin: '2rem' }}>
            <h2 style={{color:'black',fontWeight:'bold'}}>  EXTERIOR DESIGNERS   </h2>
        </div>
        {/* Search  */}
        {/*
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>
            <SearchFeature
                refreshFunction={updateSearchTerms}
            />
        </div> */}
 
        { Users.length === 0?
            <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                <h2>No results yet...</h2>
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
    <Footer/>
</>

)  
}

export default ExteriorDesigner
