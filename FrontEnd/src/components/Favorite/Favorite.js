import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import 'antd/dist/antd.css';
//import { Button } from 'antd';
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux';

function Favorite(props) {
    const user = useSelector(state => state.user)

    const projectId = props.projectId
    const userFrom = props.userFrom
    const projectName = props.projectInfo.name
    const projectDescription = props.projectInfo.description
    const projectCategory = props.projectInfo.designCategory
    const projectArchitect = props.projectInfo.architect
    const projectInteriorDesigner = props.projectInfo.interiorDesigner
    const projectExteriorDesigner = props.projectInfo.exteriorDesigner
    const projectLandscapeDesigner = props.projectInfo.landscapeDesigner
    const projectConstructionCompany = props.projectInfo.ConstructionCompany

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    const variables = {
        projectId : projectId,
        userFrom : userFrom,
        projectName : projectName,
        projectDescription : projectDescription,
        projectCategory : projectCategory,
        projectArchitect : projectArchitect,
        projectInteriorDesigner : projectInteriorDesigner,
        projectExteriorDesigner : projectExteriorDesigner,
        projectLandscapeDesigner :  projectLandscapeDesigner,
        projectConstructionCompany : projectConstructionCompany
    }

    const onClickFavorite = () => {

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        if (Favorited) {
            //when we are already add to favourites
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Remove From Favorite')
                    }
                })

        } else {
            // when we are not added to favourites

            axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Add To Favorite')
                    }
                })
        }
    }

    useEffect(() => {

        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(response.data.favouriteNumber)
                } else {
                    alert('Failed to get Favorite Number')
                }
            })

        axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited)
                } else {
                    alert('Failed to get Favorite Information')
                }
            })

    }, [])


    return (
        <>
            <div className="row">
                <div className="col-10">
                    <Button onClick={onClickFavorite} > {!Favorited ? "Add to Favorite" : "Remove From Favorite"} </Button>
                </div>
                <div className="col-2">
                    <h5 style={{color: 'red'}}>{FavoriteNumber}</h5>
                </div>
            </div> 
        </>
    )
}

export default Favorite

