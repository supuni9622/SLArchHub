import React, { Component } from 'react'
import ProfileMain from './ProfileMain';
import ProfileSide from './ProfileSide';

class ProfileBody extends Component {
    render() {
        return (
            <>
                <div className="container" id="profileBody">
                    <div className="row"> 
                        <ProfileMain></ProfileMain>
                        <ProfileSide></ProfileSide>   
                    </div>
                </div> 
            </>
        )
    }
}

export default ProfileBody

