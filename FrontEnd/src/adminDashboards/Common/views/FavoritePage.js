import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Typography, Popover, Button } from 'antd';
import axios from 'axios';
import '../css/favorite.css';
import { useSelector } from 'react-redux';

const { Title } = Typography;

function FavoritePage() {
    const user = useSelector(state => state.user)

    const [Favorites, setFavorites] = useState([])
    const [Loading, setLoading] = useState(true)
    let variable = { userFrom: localStorage.getItem('userId') }

    useEffect(() => {
        axios.post('/api/favorite/getFavoredProject', variable)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.favorites)
                setFavorites(response.data.favorites)
                setLoading(false)
            } else {
                alert('Failed to get Favorite Projects')
            }
        })
    },[])

    const onClickDelete = (projectId, userFrom) => {

        const variables = {
            projectId: projectId,
            userFrom: userFrom,
        }

        axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
                if (response.data.success) {
                    //fetchFavoredProject()
                    axios.post('/api/favorite/getFavoredProject', variable)
                    .then(response => {
                        if (response.data.success) {
                            console.log(response.data.favorites)
                            setFavorites(response.data.favorites)
                            setLoading(false)
                        } else {
                            alert('Failed to get Favorite Projects')
                        }
                    })
                } else {
                    alert('Failed to Remove From Favorite')
                }
            })
    }


    const renderCards = Favorites.map((favorite, index) => {

        return <tr key={index}>

            <td className="fav">{favorite.projectName} </td>
            <td className="fav">{favorite.projectCategory} </td>
            <td className="fav">{favorite.projectArchitect} </td>
            <td className="fav">{favorite.projectInteriorDesigner} </td>
            <td className="fav">{favorite.projectLandscapeDesigner} </td>
            <td className="fav"><button onClick={() => onClickDelete(favorite.projectId, favorite.userFrom)}> Remove </button></td>
        </tr>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > My Favorite Projects  </Title>
            <hr />
          {/*} {user.userData && !user.userData.isAuth ?
                <div style={{ width: '100%', fontSize: '2rem', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Please Log in first...</p>
                    <a href="/login">Go to Login page</a>
                </div>
                :
                !Loading && */}
                <table id = "favTable" style={{backgroundColor: 'white', padding: '20px', boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5)'}}>
                    <thead>
                        <tr id="favRow">
                            <th className="fav">Project Name</th>
                            <th className="fav">Project Category</th>
                            <th className="fav">Exterior Designer</th>
                            <th className="fav">Interior Designer</th>
                            <th className="fav">Landscape Designer</th>
                            <td className="fav">Remove from favorites</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCards}
                    </tbody>
                </table>
           {/*} }*/}
        </div>
    )
}

export default FavoritePage
